import { Editor } from "@tiptap/react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Input } from "./ui/input";

declare global {
  interface Window {
    electronAPI: {
      readTextFile(filePath: string): unknown;
      loadTextFiles(): unknown;
      getVideos(): unknown;
      getVideoMetadata(videoPath: string): unknown;
      saveText: (content: {filename:string , text: string}) => void;
    };
  }
}
import { Toggle } from "./ui/toggle";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import {
  Bold,
  Italic,
  Strikethrough,
  Heading1,
  List,
  Save,
} from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner"


const MenuBar = ({ editor }: { editor: Editor | null }) => {
  const [filename, setFilename] = useState(""); // Stores filename
  const [open, setOpen] = useState(false); // Controls dialog visibility

  if (!editor) return null;
  const handleSave = () => {
    if (!filename.trim()) return;
    const text = editor.getText(); // Get plain text
    window.electronAPI.saveText({ filename, text }); // Send data to Electron
    toast.success(`File "${filename}.txt" has been saved!`);
    setOpen(false); // Close dialog after saving
  };

  return (
    <div className="bg-background flex gap-2 border-b pb-2 mb-2">
      <Toggle
        onClick={() => editor.chain().focus().toggleBold().run()}
        pressed={editor.isActive("bold")}
      >
        <Bold className="w-5 h-5" />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleItalic().run()}
        pressed={editor.isActive("italic")}
      >
        <Italic className="w-5 h-5" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("underline")}
        onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
      >
        <u>U</u>
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleStrike().run()}
        pressed={editor.isActive("strike")}
      >
        <Strikethrough className="w-5 h-5" />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        pressed={editor.isActive("heading", { level: 1 })}
      >
        <Heading1 className="w-5 h-5" />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        pressed={editor.isActive("bulletList")}
      >
        <List className="w-5 h-5" />
      </Toggle>
      <Select
        value={editor.getAttributes("textStyle").color || "default"}
        onValueChange={(color) => editor.chain().focus().setColor(color).run()}
      >
        <SelectTrigger className="w-fit pr-4 bg-background">
          <SelectValue placeholder="Color" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="#e11d48">Rose</SelectItem>
          <SelectItem value="#7c3aed">Violet</SelectItem>
        </SelectContent>
      </Select>
      <div className="w-full flex justify-end">
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogTrigger asChild>
            <Button className="cursor-pointer">
              <Save />
              Save Note
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Enter Filename</AlertDialogTitle>
            </AlertDialogHeader>
            <Input
              type="text"
              placeholder="Enter file name..."
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
            />
            <AlertDialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSave}>Save</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default MenuBar;
