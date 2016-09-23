require('file?name=[name].[ext]!./index.html');
import React from "react";
import ReactDOM from "react-dom";
import YouTubeVideo from "../src/YouTubeVideo.js";
import Slider from "calvinclaus-rc-slider";
import Timecode from "./Timecode";
require('calvinclaus-rc-slider/assets/index.css');

export default class MainExample extends React.Component {
  constructor(props) {
    super(props);
    this.videoIds = [
      "JsgpZdGVNys",
      "bQQVybyIk5E",
      "_AArltTNRaA",
      "zujy5U2QqdY",
    ];
    this.state = {
      currentVideo: 0,
      position: 0,
      playing: false,
      duration: 0,
      volume: 30,
    }
    this.handleOnReady = this.handleOnReady.bind(this);
    this.onPlayingChange = this.onPlayingChange.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.changeVideoId = this.changeVideoId.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

  changeVideoId() {
    this.setState({ currentVideo: (this.state.currentVideo+1)%this.videoIds.length, position: 0 });
  }

  onPlayingChange(playing) {
    this.setState({playing});
  }

  handleOnReady({ duration }) {
    this.setState({duration});
  }

  setPosition(position) {
    this.setState({position});
  }

  toggleState() {
    this.setState({playing: !this.state.playing});
  }

  handleVolumeChange(volume) {
    this.setState({volume: Math.round(volume)});
  }

  render () {
    let videoId = this.videoIds[this.state.currentVideo];
    return (
      <div>
        <h3>State:</h3>
        <ul>
          <li> videoId: <b>{videoId}</b> <button onClick={this.changeVideoId}>Next</button></li>
          <li> playing: <b>{this.state.playing ? "PLAYING" : "PAUSED"}</b> </li>
          <li> position: <b>{Math.round(this.state.position)}ms</b> </li>
          <li> volume: <b>{this.state.volume ? this.state.volume + "%": "MUTED"}</b> </li>
        </ul>


        <YouTubeVideo
          position={this.state.position}
          videoId={videoId}
          playing={this.state.playing}
          volume={this.state.volume}
          width="560"
          height="315"
          playerVars={{
            controls: 1,
            modestbranding: 1,
            showinfo: 0,
            disablekb: 1,
            enablejsapi: 1,
            fs: 0,
            autohide: 2,
          }}
          shouldPrestart={true}

          onPlayingChange={this.onPlayingChange}
          onReady={this.handleOnReady}
          onProgress={this.setPosition}
          onVolumeChange={this.handleVolumeChange}
        ></YouTubeVideo>


      <div style={{marginTop: 20}}>
        <Timecode milliseconds={this.state.position} /> - <Timecode milliseconds={this.state.duration} />
        <button style={{marginLeft: 10, marginBottom:10}} onClick={this.toggleState}>
          {this.state.playing ? "Pause" : "Play"}
        </button>
        <div style={{height: 50, marginLeft: 50,  display: "inline-block"}}>
          <Slider 
            vertical
            range={false}
            max={100}
            value={this.state.volume}
            onChange={this.handleVolumeChange}
          />
        </div>
        <Slider
          range={false}
          max={this.state.duration}
          value={this.state.position}
          onChange={position => { this.state.duration && this.setPosition(position) }}
          onRangeClick={position => { this.state.duration && this.setPosition(position) }}
        />
      </div>
    </div>
    )
  }
}
