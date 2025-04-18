import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { BookOpen, Trash2, File } from "lucide-react";
import { Input } from "./ui/input";

export default function SavedTexts() {
  const [files, setFiles] = useState([]);
  const [selectedText, setSelectedText] = useState("");

  useEffect(() => {
    window.electronAPI.loadTextFiles().then((files: any) => setFiles(files));
  }, [files]);

  const handleReadFile = async (filePath: string) => {
    const result = await window.electronAPI.readTextFile(filePath);
    if (result.success) setSelectedText(result.text);
    else alert(`Error: ${result.error}`);
  };

  const handleDeleteFile = async (filePath: string) => {
    const result = await window.electronAPI.deleteTextFile(filePath);
    if (result.success) alert(`${result.success}`);
    else alert(`Error: ${result.error}`);
    setSelectedText("")
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
      <div className=" flex gap-2 ">
      <ul className="bg-white flex-6 rounded-[5px]">
        {files.length !== 0 ? files.map((file) => (
          <li
            key={file.name}
            className="w-full flex items-center justify-between border-b-2 p-2 hover:bg-blue-400 hover:text-white cursor-pointer"
          >
            <div className="flex flex-1 items-center">
              <File size={20} />
               <div className="px-2">
                {file.name}
                </div> 
            </div>
            {/*action buttons */}
            <div className="flex-1 flex justify-end gap-2">
              <Button onClick={() => handleReadFile(file.path)} variant="ghost">
                <BookOpen />
              </Button>
              <Button variant="destructive" onClick={() => handleDeleteFile(file.path)}>
                <Trash2 />
              </Button>
            </div>
          </li>
        )) : <div className="text-gray-500 w-full h-full flex items-center justify-center"><p>Notes saved during lessons will apear here</p></div>}
      </ul>
      {selectedText ? <div className="pointer-events-none flex-3 bg-white border rounded-[5px] p-2">{selectedText}</div> : <div className="pointer-events-none flex flex-3 justify-center items-center bg-white border rounded-[5px] p-2">Preview</div>}
      </div>
    </div>
  );
}
