import moment from 'moment';
import { useNavigate } from 'react-router-dom';

function Video({ video }: any) {
  const navigate = useNavigate();

  const goToSingleVideo = (id: any) => {
    navigate(`/videos/${id}`);
  };

  return (
    <div className="video_card" onClick={() => goToSingleVideo(video.objectID)}>
      <img src={video.thumbnail} alt="" />
      <div className="content">
        <p>{video.title}</p>
        <p className="info">
          {video.views} views . {moment(video.created_at).fromNow()}
        </p>
      </div>
    </div>
  );
}

export default Video;
