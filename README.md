# Stateful React Youtube
A React YouTube API Wrapper that allows video control via props.

## API

###props (non functions)

| Name       	| Type  	| Default     	| Description                                                                               	|
|----------------	|---------	|-------	|------------------------------------------------------------------------------------------------------------------------------	|
| position       	| Number  	| 0     	| Milliseconds since the beginning of the video.                                                                               	|
| videoId        	| String  	| ""    	| YouTube video id (e.g. "JsgpZdGVNys").                                                                                         	|
| playing        	| Boolean 	| false 	| Whether YouTube video is playing or not.                                                                                     	|
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

##Todos

- There is no onProgress fired when the player position is changed via the YouTube Controls until the user plays the video again.
- Tests

