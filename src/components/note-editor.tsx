import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Heading from "@tiptap/extension-heading";
import { Bold, Italic, List, ListOrdered, Strikethrough, UnderlineIcon } from "lucide-react";

const NoteEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ 
        bulletList: false, // Disable default to prevent conflicts
        orderedList: false, // Disable default to prevent conflicts
      }),
      BulletList, // Add BulletList extension
      OrderedList, // Add OrderedList extension
      ListItem, // Add ListItem extension
      Underline,
      Strike,
      Heading.configure({ levels: [1, 2, 3] }),
    ],
    content: "<p>Start writing here...</p>",
  });

  if (!editor) return null;

  return (
    <div className="editor bg-background">
      {/* Toolbar */}
      <div className="toolbar">
        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          <Bold/>
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          <Italic/>
        </button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <UnderlineIcon/>
        </button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()}>
          <Strikethrough/>
        </button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
        <List />
        </button>
        {/* <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          <ListOrdered/>
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
          H1
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          H2
        </button> */}
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} />
    </div>
  );
};

export default NoteEditor;
