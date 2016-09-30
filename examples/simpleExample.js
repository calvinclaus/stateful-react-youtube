import React from "react";
import YouTubeVideo from "../src/YouTubeVideo.js";

export default class SimpleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unmounted: false,
      position: 6000,
      playing: false,
    };
  }
  unmountVideo() {
    this.setState({unmounted: true});
  }
  render () {
    return (
      <div>
        <button onClick={this.unmountVideo.bind(this)} >Umount Vide</button>
        {!this.state.unmounted &&
          <div>
            <h3>Video is mounted</h3>
            <YouTubeVideo
              videoId="bQQVybyIk5E"
              width="560"
              height="315"
              onPlayingChange={(val) => {console.log("notified about playing change ", val); this.setState({playing: val})}}
              playing={this.state.playing}
              minPositionChangeToNotify={100}
            ></YouTubeVideo>
          </div>
        }
      </div>
    )
  }
}
