import { useParams } from "react-router-dom";
import VideoPlayer from "../../../components/video-clip";


const Player = () => {
  const { subject } = useParams<{ subject?: string }>();
  return (
      <div className="flex-5">
        {/* player */}
          <VideoPlayer sub={subject || "defaultSubject"}/>
      </div>
  )
}

export default Player