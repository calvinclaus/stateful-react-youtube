import React, { Component } from 'react';

export default class YouTubeVideo extends Component {
  static get defaultProps() {
    return {
      position: 0,
      width: "560",
      height: "315",
      playing: false,
      volume: 50,
      shouldPrestart: true,
      minPositionChangeToNotify: 100,
      onProgress: () => {},
      onPlayingChange: () => {},
      onReady: () => {},
      onVolumeChange: () => {},
      playerVars: { },
    };
  }

  constructor(props) {
    super(props);
    this.player = null;
    this.onProgressTimer = null;
    this.loadingNewVideo = false;
    this.lastSentPosition = 0;
    this.lastSentVolume = 0;
  }

  getCurrentTimeInMs() {
    return this.player.getCurrentTime() * 1000;
  }

  callChangeHandlers() {
    const currentPosition = this.getCurrentTimeInMs();
    const currentVolume = this.player.isMuted() ? 0 : this.player.getVolume();
    if (this.lastSentVolume != currentVolume) {
      this.lastSentVolume = currentVolume;
      this.props.onVolumeChange(currentVolume);
    }
    if (Math.abs(this.lastSentPosition - currentPosition) > this.props.minPositionChangeToNotify) {
      this.lastSentPosition = currentPosition;
      this.props.onProgress(currentPosition);
    }
  }

  startVideoStateObserver = (t) => {
    if (this.player) this.callChangeHandlers();
    window.requestAnimationFrame(this.startVideoStateObserver);
  }

  stopListeningForVolumeChanges() {
    clearInterval(this.onVolumeChangeListener);
    this.onVolumeChangeListener = null;
  }

  onPlayerReady = () => {
    if (this.props.shouldPrestart || this.props.playing) {
      this.player.playVideo();
      this.prestart = !this.props.playing;
    }
    this.props.onReady({ duration: this.player.getDuration() * 1000 });
    this.setPlayerVolume(this.props.volume);
    this.startVideoStateObserver();
  }

  onNewVideoLoaded = () => {
    this.onPlayerReady();
    if (!this.props.playing) {
      this.player.pauseVideo();
      this.prestart = false;
    } else {
      this.setVideoPlaying();
    }
    this.loadingNewVideo = false;
  }

  setVideoPlaying = () => {
    if ((this.props.shouldPrestart || this.props.playing) && this.prestart) {
      this.player.pauseVideo();
      this.prestart = false;
    } else {
      this.props.onPlayingChange(true);
    }
  }

  onPlayerStateChange = ({ data }) => {
    const { PLAYING, PAUSED, BUFFERING, ENDED } = YT.PlayerState;
    switch(data) {
      case PLAYING:
        if (this.loadingNewVideo) {
          this.onNewVideoLoaded();
        } else {
          this.setVideoPlaying();
        }
        break;
      case PAUSED:
        this.props.onPlayingChange(false);
        break;
      case BUFFERING:
        break;
      case ENDED:
        this.props.onPlayingChange(false);
        break;
      default:
    }
  }

  componentDidMount() {
    if (typeof(YT) !== 'undefined' && YT.loaded) {
      this.initializePlayer();
    } else {
      let current = window.onYouTubePlayerAPIReady;
      window.onYouTubePlayerAPIReady = () => {
        current && current();
        this.initializePlayer();
      }
    }
  }

  initializePlayer = () => {
    const { videoId, width, height, playerVars } = this.props;
    this.player = new YT.Player(this.refs.player, {
      videoId,
      width,
      height,
      playerVars: {
        start: this.props.position / 1000,
        ...playerVars,
      },
      events: {
        onReady: this.onPlayerReady,
        onStateChange: this.onPlayerStateChange,
      },
    });
  }

  setPlayerVolume(volume) {
    if (volume > 0) {
      this.player.unMute();
    }
    if (volume === 0) {
      this.player.mute();
    } else {
      this.player.setVolume(volume);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.videoId !== this.props.videoId) {
      if (!this.player) {
        this.initializePlayer();
      } else {
        this.loadingNewVideo = true;
        this.player.loadVideoById(this.props.videoId);
      }
    }

    if (prevProps.volume !== this.props.volume) {
      this.setPlayerVolume(this.props.volume);
    }

    if (this.lastSentPosition !== this.props.position) {
      this.player.seekTo(this.props.position / 1000, true);
    }

    if (prevProps.playing === false && this.props.playing === true) {
      this.player.playVideo();
    }

    if (prevProps.playing === true && this.props.playing === false) {
      this.player.pauseVideo();
    }
  }

  render() {
    return (
      <div className="video">
        <div className="content">
          <div ref="player"></div>
        </div>
      </div>
    );
  }
}
