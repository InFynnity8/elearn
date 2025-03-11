import { useEffect, useState } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

declare global {
  interface Window {
    electronAPI: {
      getVideos: () => Promise<Video[]>;
    };
  }
}

type Video = {
  name: string;
  path: string;
};

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    window.electronAPI.getVideos().then((videoList: Video[]) => {
      setVideos(videoList);
      if (videoList.length > 0) {
        setSelectedVideo(videoList[0].path); // Default to first video
      }
    });
  }, []);

  return (
    <div className="flex">
      {/* Video Player */}
      <div className="w-3/4">
        {selectedVideo && (
          <Plyr
            source={{
              type: "video",
              sources: [{ src: selectedVideo, type: "video/mp4" }],
            }}
          />
        )}
      </div>

      {/* Video List */}
      <div className="w-1/4 p-4">
        {videos.map((video) => (
          <button
            key={video.name}
            className={`block w-full p-2 my-2 text-left ${
              selectedVideo === video.path ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedVideo(video.path)}
          >
            {video.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
