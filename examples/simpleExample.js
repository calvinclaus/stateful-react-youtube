import React from "react";
import YouTubeVideo from "../src/YouTubeVideo.js";

export default class SimpleExample extends React.Component {
  render () {
    return (
      <div>
        <YouTubeVideo
          videoId="bQQVybyIk5E"
          width="560"
          height="315"
          onVolumeChange={(v) => console.log(v)}
        ></YouTubeVideo>
      </div>
    )
  }
}
