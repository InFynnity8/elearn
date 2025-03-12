"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import ListItem from "@tiptap/extension-list-item";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import TextAlign from "@tiptap/extension-text-align";
import Underline from '@tiptap/extension-underline';
import MenuBar from "./MenuBar";

const extensions = [
  StarterKit.configure({
    bulletList: { keepMarks: true, keepAttributes: false },
    orderedList: { keepMarks: true, keepAttributes: false },
  }),
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle,
  ListItem,
  TaskList,
  Underline,
  TaskItem.configure({ nested: true }),
  TextAlign.configure({ types: ["heading", "paragraph"] }),
];

const content = "Take notes here";

const TipTapEditor = () => {
  const editor = useEditor({
    extensions,
    content,
  });

  return (
    <div className="bg-background border p-4">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className=" mt-2  p-2 rounded-md" />
    </div>
  );
};

export default TipTapEditor;
