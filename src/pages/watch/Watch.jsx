import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";


export default function Watch() {

    return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://player.vimeo.com/external/455720252.sd.mp4?s=557e59e08bb27fd89994df98707978a60acb549c&profile_id=164&oauth2_token_id=57447761"
      />
    </div>
  );
}
