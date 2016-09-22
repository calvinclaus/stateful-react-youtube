import React, { Component } from 'react';


export default class YouTubeVideo extends Component {
  static get defaultProps() {
    return {
      onProgress: () => {},
      onStateChange: () => {},
      onReady: () => {},
      playerVars: {
        controls: 0,
        modestbranding: 1,
        showinfo: 0,
        disablekb: 1,
        enablejsapi: 1,
        fs: 0,
        autohide: 2,
      },
    };
  }

  constructor(props) {
    super(props);
    this.player = null;
    this.onProgressTimer = null;
    this.loadingNewVideo = false;
  }

  getCurrentTimeInMs() {
    return this.player.getCurrentTime() * 1000;
  }

  startOnProgressTimer() {
    this.stopOnProgressTimer();
    this.onProgressTimer = setInterval(() => {
      this.props.onProgress(this.getCurrentTimeInMs());
    }, 100);
  }

  stopOnProgressTimer() {
    clearInterval(this.onProgressTimer);
    this.onProgressTimer = null;
  }

  onPlayerReady = () => {
    if (this.props.shouldPrestart || this.props.playing) {
      this.player.playVideo();
      this.prestart = !this.props.playing;
    }
    this.props.onReady({ duration: this.player.getDuration() * 1000 });
  }

  onNewVideoLoaded = () => {
    this.onPlayerReady();
    if (!this.props.playing) {
      this.player.pauseVideo();
      this.stopOnProgressTimer();
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
      this.startOnProgressTimer();
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
        this.stopOnProgressTimer();
        break;
      case BUFFERING:
        //not exposing this
        this.stopOnProgressTimer();
        break;
      case ENDED:
        this.props.onPlayingChange(false);
        this.stopOnProgressTimer();
        break;
      default:
    }
  }

  componentDidMount() {
    if (typeof(YT) !== 'undefined' && YT.loaded) {
      this.initializePlayer();
    } else {
      window.onYouTubePlayerAPIReady = this.initializePlayer;
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

  componentDidUpdate(prevProps) {
    if (prevProps.videoId !== this.props.videoId) {
      this.stopOnProgressTimer();
      if (!this.player) {
        this.initializePlayer();
      } else {
        this.loadingNewVideo = true;
        this.player.loadVideoById(this.props.videoId);
      }
    }

    if (Math.abs(prevProps.position - this.props.position) > 200) {
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
