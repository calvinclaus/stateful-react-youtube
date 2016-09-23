import React from "react";
import YouTubeVideo from "../src/YouTubeVideo.js";

export default class SimpleExample extends React.Component {
  render () {
    return (
      <div>
        <h3>Simple Example</h3>
        <YouTubeVideo
          videoId="bQQVybyIk5E"
          width="560"
          height="315"
        ></YouTubeVideo>
      </div>
    )
  }
}
