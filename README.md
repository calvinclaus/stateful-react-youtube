# Stateful React Youtube
A React YouTube API Wrapper that allows declerative video control via props.
This component is especially useful if you plan on creating an alternative timeline for YouTube videos.

![funny img](http://i.giphy.com/H3oWbYbyhxedq.gif)

##**[----> Demo <----](https://calvinclaus.github.io/stateful-react-youtube/)**

##Usage
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

| Name       	| Type  	| Default     	| Description                                                                               	|
|----------------	|---------	|-------	|------------------------------------------------------------------------------------------------------------------------------	|
| position       	| Number  	| 0     	| Milliseconds since the beginning of the video.                                                                               	|
| videoId        	| String  	| ""    	| YouTube video id (e.g. "JsgpZdGVNys").                                                                                         	|
| playing        	| Boolean 	| false 	| Whether YouTube video is playing or not.                                                                                     	|
| volume        	| Number 	| 50 	| Volume of the YouTube video.                                                                                     	|
| shouldPrestart 	| Boolean 	| true  	| When false player displays thumbnail, when true player displays video frame at position, before video is played by the user. 	|
| width          	| String  	| "500" 	| Player width.                                                                                                                	|
| height         	| String  	| "500" 	| Player height.                                                                                                               	|
| playerVars         	| Object  	| {} 	| YouTube API Player Parameters. Refer to [youtube's documentation](https://developers.google.com/youtube/player_parameters?playerVersion=HTML5)                                                                                                              	|
###props (functions)
| Name       	| Type  	| Default     	| Description                                                                               	|
|----------------	|---------	|-------	|------------------------------------------------------------------------------------------------------------------------------	|
| onReady({ duration: Number})        	| function  	| noop    	| Fired when YouTube API is ready.                                                                                         	|
| onPlayingChange(playing: Boolean)       	| function  	| noop     	| Fires when playing state is changed.                                                                               	|
| onProgress(position: Number)        	| function 	| noop 	| Fires every 100ms when the YouTube player is playing. |
| onVolumeChange(volume: Number)        	| function 	| noop 	| Fires when the YouTube player volume is changed, or the player is muted/unmuted. |

###Escape hatch
You can access the YouTube API by putting a ref on the `YouTubeVideo` component and accessing `this.refs.yourRefName.player`

##Todos

- There is no onProgress fired when the player position is changed via the native YouTube controls until the video is played again.
- Tests

##Other

This library was crafted with care by [Moritz Kobrna](https://twitter.com/neuling2k) [Calvin Claus](https://twitter.com/calvin_claus).
