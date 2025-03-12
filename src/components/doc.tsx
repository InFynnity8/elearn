import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { BookOpen, Edit, Trash2, File } from "lucide-react";
import { Input } from "./ui/input";

export default function SavedTexts() {
  const [files, setFiles] = useState([]);
  const [selectedText, setSelectedText] = useState("");

  useEffect(() => {
    window.electronAPI.loadTextFiles().then((files: any) => setFiles(files));
  }, []);

  const handleReadFile = async (filePath: string) => {
    const result = await window.electronAPI.readTextFile(filePath);
    if (result.success) setSelectedText(result.text);
    else alert(`Error: ${result.error}`);
  };

  return (
    <div>
      <div className="pb-2 flex items-center justify-between">
        <h1 className="flex-4 font-medium text-[20px] text-blue-400">Notes</h1>
        <Input
          type="search"
          className="bg-white flex-2"
          placeholder="Search for a note..."
        ></Input>
      </div>


      {/* files and reader preview */}
      <div className=" flex gap-2">
      <ul className="bg-white flex-6 rounded-[5px]">
        {files.map((file) => (
          <li
            key={file.name}
            className="w-full flex items-center justify-between border-b-2 p-2 hover:bg-blue-400 hover:text-white cursor-pointer"
          >
            <div className="flex items-center justify-between flex-4 lg:flex-3 xl:flex-2">
              <File size={20} />
              {/* description */}
              {/* name */}
              <div className=""> {file.name}</div>
              {/* date created */}
              <div className="">20th June</div>
            </div>
            {/*action buttons */}
            <div className="flex-4 flex justify-end gap-2">
              <Button onClick={() => handleReadFile(file.path)} variant="ghost">
                <BookOpen />
              </Button>
              <Button variant="ghost">
                <Edit />
              </Button>
              <Button variant="destructive">
                <Trash2 />
              </Button>
            </div>
          </li>
        ))}
      </ul>
      {selectedText ? <div className="pointer-events-none flex-3 bg-white border rounded-[5px] p-2">{selectedText}</div> : <div className="pointer-events-none flex flex-3 justify-center items-center bg-white border rounded-[5px] p-2">Preview</div>}
      </div>
    </div>
  );
}
