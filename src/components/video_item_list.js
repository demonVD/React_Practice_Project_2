import React from 'react';
import VideoListItem from './video_item';
const VideoList=(props)=>{
    return(
        <ul>
            {props.videoList.map((video)=>{
               return(<VideoListItem key={video.etag} video={video} />);
            })}
        </ul>
    );
}
export default VideoList;