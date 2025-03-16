import { useEffect, useState } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { IoIosClose } from "react-icons/io";
import { Input } from "./ui/input";
import { MdOutlineLiveTv } from "react-icons/md";
import NoteEditor from "./note-editor";



type Video = {
  name: string;
  path: string;
};

// type VideoMetadata = {
//   duration: number;
//   title: string;
// };

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  // const [metadata, setMetadata] = useState<VideoMetadata | null>(null);

  useEffect(() => {
    window.electronAPI.getVideos().then((videoList: Video[]) => {
      setVideos(videoList);
      if (videoList.length > 0) {
        setSelectedVideo(videoList[0].path); // Default to first video
      }
    });
  }, []);

  const selectVideo = async (videoPath: string) => {
    setSelectedVideo(videoPath);
    // const data = await window.electronAPI.getVideoMetadata(videoPath);
    // setMetadata(data);
  };

  return (
    <div className="flex flex-col xl:flex-row">
      {/* Video Player */}
      <div className="w-full xl:w-3/4 ">
        {selectedVideo && (
          <div className="">
            <Plyr
              source={{
                type: "video",
                sources: [{ src: selectedVideo, type: "video/mp4" }],
              }}
            />
            {/* {metadata && (
              <div className="p-4">
                <h2 className="text-xl font-bold ">Title: {metadata.title}</h2>
                <p>Duration: {metadata.duration.toFixed(2)} sec</p>
              </div>
            )} */}
          </div>
        )}
        <div className=" w-full p-2">
          <NoteEditor />
        </div>
      </div>

      {/* Video List */}
      <div className="w-full bg-background overflow-auto h-screen xl:fixed xl:right-0 xl:w-[270px]">
        <div className=" flex items-center justify-between font-medium text-[17px] w-full px-5 py-2 border-b-[1px] border-t-[1px]">
          <h1>Course content</h1>
          <IoIosClose size={20} className="hover:cursor-pointer" />
        </div>
        {videos.map((video) => (
          <div key={video.name}>
            <button
              className={`block h-20 w-full border-b-[1px] p-2 text-left ${
                selectedVideo === video.path
                  ? "bg-blue-500 text-white"
                  : "bg-background"
              }`}
              onClick={() => selectVideo(video.path)}
            >
              <div className="flex items-start">
                <div className="mr-2 mt-1">
                  <Input
                    type="checkbox"
                    className="w-full h-full cursor-pointer"
                  />
                </div>
                <div className="truncate h-5">
                  <h1 className="leading-5 truncate">{video.name.slice(0, -4)}</h1>
                </div>
              </div>
              <div className="px-5 flex items-center">
                <MdOutlineLiveTv />
                <p className="text-gray-400 text-[12px] mx-1">17min</p>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
