import React, { useEffect, useState } from 'react';
import { fetchAllVideos } from '../../adapter/videos';
import '../../styles/Videos.scss';
import Video from '../Video';

function Videos({ options = false }) {
  const [videos, setVideos] = useState<any>([]);

  useEffect(() => {
    fetchAllVideos().then((data: any) => {
      // hits are an array of objects
      setVideos(data?.hits || []);
    });
  }, []);

  return (
    <div className={`videos_compo ${options ? 'options' : ''}`}>
      {videos.map((video: any) => (
        <Video key={video.video_id} video={video} />
      ))}
    </div>
  );
}

export default Videos;
