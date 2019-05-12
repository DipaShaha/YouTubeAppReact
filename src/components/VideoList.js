import React from 'react';
import VideoItem from './VideoItem';


const VideoList=({videos})=>{

	const RenderedList=videos.map((video)=>{
		return <VideoItem video={video}/>;
	});
	return(
	<div className="ui relaxed devided list">{RenderedList}</div>
	);
}
export default VideoList;