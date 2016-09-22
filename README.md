# Stateful React Youtube
A React YouTube API Wrapper that allows video control via props.

## API

###props
| position       	| Number  	| 0     	| Milliseconds since the beginning of the video.                                                                               	|
|----------------	|---------	|-------	|------------------------------------------------------------------------------------------------------------------------------	|
| videoId        	| String  	| ""    	| YouTube video id (e.g. JsgpZdGVNys).                                                                                         	|
| playing        	| Boolean 	| false 	| Whether YouTube video is playing or not.                                                                                     	|
| shouldPrestart 	| Boolean 	| true  	| When false player displays thumbnail, when true player displays video frame at position, before video is played by the user. 	|
| width          	| String  	| "500" 	| Player width.                                                                                                                	|
| height         	| String  	| "500" 	| Player height.                                                                                                               	|
