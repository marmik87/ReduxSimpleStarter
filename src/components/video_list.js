import React from 'react';
import VideoListDetail from './video_list_detail.js'

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListDetail
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />)
  })

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList;
