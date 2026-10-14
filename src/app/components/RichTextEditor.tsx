"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { useEffect } from "react";
import styles from "./RichTextEditor.module.css";

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export default function RichTextEditor({ value, onChange }: Props) {
    const editor = useEditor({
        extensions: [StarterKit, Underline],
        content: value,
        immediatelyRender: false,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    useEffect(() => {
        if (editor && editor.getHTML() !== value) {
            editor.commands.setContent(value || "");
        }
    }, [editor, value]);

    if (!editor) return null;

    return (
        <div className={styles.editor}>
            <div className={styles.toolbar}>
                <button type="button" onClick={() => editor.chain().focus().toggleBold().run()}>
                    <b>B</b>
                </button>

                <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()}>
                    <i>I</i>
                </button>

                <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()}>
                    <u>U</u>
                </button>

                <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()}>
                    • Bullets
                </button>

                <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()}>
                    1. Numbering
                </button>
            </div>

            <EditorContent editor={editor} className={styles.content} />
        </div>
    );
}