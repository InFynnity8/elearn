import { useEffect, useState } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { IoIosClose, IoIosOpen, IoIosVideocam } from "react-icons/io";
import { Input } from "./ui/input";
import { MdOutlineLiveTv } from "react-icons/md";
import NoteEditor from "./note-editor";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

type Video = {
  name: string;
  path: string;
};

// type VideoMetadata = {
//   duration: number;
//   title: string;
// };

const VideoList = ({ sub }: { sub: string }) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [language, setLanguage] = useState("en");
  const [sidebar, setSidebar] = useState(true);
  // const [metadata, setMetadata] = useState<VideoMetadata | null>(null);

  useEffect(() => {
    if (!language) return;
    window.electronAPI.getVideos(language).then((videoList: Video[]) => {
      const filteredVideos = videoList.filter((video) =>
        video.name.toLowerCase().includes(sub.toLowerCase())
      );

      setVideos(filteredVideos);

      if (filteredVideos.length > 0) {
        setSelectedVideo(filteredVideos[0].path);
      }
    });
  }, [language]);

  const selectVideo = async (videoPath: string) => {
    setSelectedVideo(videoPath);
    // const data = await window.electronAPI.getVideoMetadata(videoPath);
    // setMetadata(data);
  };

  return (
    <div className="flex flex-col xl:flex-row">
      {/* Video Player */}
      <div
        className={`w-full ${
          sidebar ? "xl:w-[calc(100%-274px)]" : "xl:w-full"
        }`}
      >
        {selectedVideo ? (
          <div className=" border-[1px] border-gray-100">
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
        ) : <Skeleton className="h-[450px] w-full flex items-center justify-center flex-col gap-1" > <IoIosVideocam size={50}/> <p>No Video Selected</p></Skeleton>}
        <div className="p-2 w-full flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2 text-white bg-blue-400 rounded-md cursor-pointer">
              {language}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setLanguage("en")}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("twi")}>
                Twi
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className=" w-full p-2">
          <NoteEditor />
        </div>
      </div>

      {/* Video List */}
      {!sidebar ? (
        <Button
          onClick={() => setSidebar(true)}
          className="rounded-l-[50%]  z-50 fixed top-[100px] right-0 bg-blue-400 opacity-25 hover:opacity-100 transition-opacity duration-300 ease-in-out"
        >
          <IoIosOpen size={20} className="text-white" />
        </Button>
      ) : (
        <div className="w-full bg-background overflow-auto h-screen xl:fixed xl:right-0 xl:w-[274px]">
          <div className=" flex items-center justify-between font-medium text-[17px] w-full px-5 py-2 border-b-[1px] border-t-[1px]">
            <h1>{sub}</h1>
            <IoIosClose
              size={20}
              className="hover:cursor-pointer"
              onClick={() => setSidebar(false)}
            />
          </div>
          {videos.length !== 0 ? videos.map((video) => (
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
                    <h1 className="leading-5 truncate">
                      {video.name.slice(0, -7)}
                    </h1>
                  </div>
                </div>
                <div className="px-5 flex items-center">
                  <MdOutlineLiveTv />
                  <p className="text-gray-400 text-[12px] mx-1">17min</p>
                </div>
              </button>
            </div>
          )): <p className="p-2 text-center w-full text-gray-400">No {sub} videos available yet. Go to settings and add a video.</p>}
        </div>
      )}
    </div>
  );
};

export default VideoList;
