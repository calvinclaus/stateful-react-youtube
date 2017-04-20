# Stateful React YouTube
A React YouTube API Wrapper that allows declarative video control via props.
This component is especially useful if you plan on creating an alternative timeline for YouTube videos.

![funny img](http://i.giphy.com/H3oWbYbyhxedq.gif)

## **[----> Demo <----](https://calvinclaus.github.io/stateful-react-youtube/)**

## Installation

```
npm install --save stateful-react-youtube
```

## Usage
Include the YouTube API in your html file:
```HTML
<script src="https://www.youtube.com/player_api"></script>
```
Fire it up:
```javascript
import YouTubeVideo from "stateful-react-youtube";
//...
//in render:
<YouTubeVideo
  position={this.state.position}
  videoId={this.state.videoId}
  playing={this.state.playing}
  volume={this.state.volume}
  shouldPrestart={true}

  onPlayingChange={this.onPlayingChange}
  onReady={this.handleOnReady}
  onProgress={this.setPosition}
  onVolumeChange={this.handleVolumeChange}
  ></YouTubeVideo>

```
## API

###props (non functions)

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead><tbody>
    <tr>
      <td>position</td>
      <td>Number</td>
      <td>0</td>
      <td>Milliseconds since the beginning of the video.</td>
    </tr>
    <tr>
      <td>videoId</td>
      <td>String</td>
      <td>""</td>
      <td>YouTube video id (e.g. "JsgpZdGVNys").</td>
    </tr>
    <tr>
      <td>playing</td>
      <td>Boolean</td>
      <td>false</td>
      <td>Whether YouTube video is playing or not.</td>
    </tr>
    <tr>
      <td>volume</td>
      <td>Number</td>
      <td>50</td>
      <td>Volume of the YouTube video.</td>
    </tr>
    <tr>
      <td>shouldPrestart</td>
      <td>Boolean</td>
      <td>true</td>
      <td>When false player displays thumbnail, when true player displays video frame at position, before video is played by the user.</td>
    </tr>
     <tr>
      <td>minPositionChangeToNotify</td>
      <td>Number</td>
      <td>100</td>
      <td>Minimum player position change (milliseconds) required for onProgress to be called. </td>
    </tr>
    
    
    <tr>
      <td>width</td>
      <td>String</td>
      <td>"500"</td>
      <td>Player width.</td>
    </tr>
    <tr>
      <td>height</td>
      <td>String</td>
      <td>"500"</td>
      <td>Player height.</td>
    </tr>
    <tr>
      <td>playerVars</td>
      <td>Object</td>
      <td>{}</td>
      <td>YouTube API Player Parameters. Refer to <a href="https://developers.google.com/youtube/player_parameters?playerVersion=HTML5">YouTube's documentation</a>.</td>
    </tr>
  </tbody></table>
  
### props (functions)
 
 <table><thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead><tbody>
      <tr>
        <td>onReady({ duration: Number})</td>
        <td>function</td>
        <td>noop</td>
        <td>Fired when YouTube API is ready.</td>
      </tr>
      <tr>
        <td>onPlayingChange(playing: Boolean)</td>
        <td>function</td>
        <td>noop</td>
        <td>Fires when playing state is changed.</td>
      </tr>
      <tr>
        <td>onProgress(position: Number)</td>
        <td>function</td>
        <td>noop</td>
        <td>Fires every 100ms when the YouTube player is playing.</td>
      </tr>
      <tr>
        <td>onVolumeChange(volume: Number)</td>
        <td>function</td>
        <td>noop</td>
        <td>Fires when the YouTube player volume is changed, or the player is muted/unmuted.</td>
      </tr>
    </tbody></table>

### Escape hatch
You can access the YouTube API by putting a ref on the `YouTubeVideo` component and accessing `this.refs.yourRefName.player`

## Todos

- Tests

## Other

This library was crafted with care by [Moritz Kobrna](https://twitter.com/neuling2k) & [Calvin Claus](https://twitter.com/calvin_claus).
