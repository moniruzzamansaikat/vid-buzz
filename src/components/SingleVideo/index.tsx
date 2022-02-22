import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import { BiDownload } from 'react-icons/bi';
import '../../styles/SingleVideo.scss';
import { getVideoById } from '../../adapter/videos';
import Videos from '../Videos';

function SingleVideo() {
  const params: any = useParams();
  const [video, setVideo] = useState<any>(null);

  // const video = {
  //   created_at: '2018-07-09T22:49:13.237Z',
  //   updated_at: '2021-12-01T20:00:41.262Z',
  //   title: 'Stones by the waterfall',
  //   base_filename: 'Agua-natural',
  //   poster: 'https://storage.coverr.co/p/rhOM3iuhDqxedD7lKLpPO34yN2lhf5Kk',
  //   thumbnail: 'https://storage.coverr.co/t/rhOM3iuhDqxedD7lKLpPO34yN2lhf5Kk',
  //   description:
  //     'Close-up shot of some grey stones, with a beautiful waterfall in the background. ',
  //   state: 'published',
  //   is_vertical: false,
  //   tags: [
  //     'stones',
  //     'rocks',
  //     'iceland',
  //     'waterfall',
  //     'forest',
  //     'woods',
  //     'greenery',
  //     'mountains',
  //     'pebbles',
  //     'water',
  //     'lake',
  //     'pond',
  //     'nature',
  //     'beautiful',
  //     'cinematic',
  //     'background',
  //     'loop',
  //     'cloudy weather',
  //     'peaceful',
  //     'setting',
  //     'zoom background',
  //     'zoom virtual background',
  //     'virtual background',
  //   ],
  //   downloads: 65740,
  //   views: 895608,
  //   likes: 0,
  //   contributor_id: 0,
  //   published_at: '2016-04-25T00:00:00.000Z',
  //   playback_id: 'rhOM3iuhDqxedD7lKLpPO34yN2lhf5Kk',
  //   aspect_ratio: '16:9',
  //   duration: 13.04,
  //   max_height: 1080,
  //   max_width: 1920,
  //   video_id: 'ee0b4132-65ba-4813-a2d7-1f7c2853dd81',
  //   d2v_ratio: 0.44025895,
  //   id: 'hWGAKF358u',
  //   published_at_timestamp: 1461542400000,
  //   objectID: 'hWGAKF358u',
  //   urls: {
  //     mp4: 'https://storage.coverr.co/videos/rhOM3iuhDqxedD7lKLpPO34yN2lhf5Kk?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjJCOTVGNzI1RjgwN0JGOUJGRThBIiwiaWF0IjoxNjQ1NTE1MzQ3fQ.OJjeRzg64625svDwL9pum-kxuFvK4PhWpMrYsixP7lA',
  //     mp4_preview:
  //       'https://storage.coverr.co/videos/rhOM3iuhDqxedD7lKLpPO34yN2lhf5Kk/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjJCOTVGNzI1RjgwN0JGOUJGRThBIiwiaWF0IjoxNjQ1NTE1MzQ3fQ.OJjeRzg64625svDwL9pum-kxuFvK4PhWpMrYsixP7lA',
  //     mp4_download:
  //       'https://storage.coverr.co/videos/rhOM3iuhDqxedD7lKLpPO34yN2lhf5Kk/download?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjJCOTVGNzI1RjgwN0JGOUJGRThBIiwiaWF0IjoxNjQ1NTE1MzQ3fQ.OJjeRzg64625svDwL9pum-kxuFvK4PhWpMrYsixP7lA&filename=Stones by the waterfall',
  //     m3u8: 'https://storage.coverr.co/videos/m3u8/rhOM3iuhDqxedD7lKLpPO34yN2lhf5Kk?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjJCOTVGNzI1RjgwN0JGOUJGRThBIiwiaWF0IjoxNjQ1NTE1MzQ3fQ.OJjeRzg64625svDwL9pum-kxuFvK4PhWpMrYsixP7lA',
  //   },
  // };

  useEffect(() => {
    getVideoById(params.id).then((data: any) => {
      console.log(data);
      setVideo(data);
    });
  }, [params.id]);

  if (!video) return <h2>loading..</h2>;
  else {
    return (
      <div className="single_video">
        <div className="video">
          <video controls src={video?.urls?.mp4}></video>
          <div className="video_info">
            <h2>{video?.title}</h2>
            <div className="options">
              <p className="time_and_views">
                {video?.views} views . {moment(video?.created_at).format('LL')}
              </p>
              <div className="handlers">
                <p>
                  {video?.likes} likes | {video?.downloads} downlaods |
                  <a href={video?.urls.mp4_download}>
                    <BiDownload id="icon" />
                  </a>
                </p>
              </div>
            </div>
            <div className="desc">
              <p>{video?.description}</p>
            </div>
          </div>
        </div>
        <div>
          <Videos options={true} />
        </div>
      </div>
    );
  }
}

export default SingleVideo;
