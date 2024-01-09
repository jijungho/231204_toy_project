import React, { useEffect, useMemo } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import DragDropPaste from "./components/plugins/drop-paste-plugin";
import ImagesPlugin from "./components/plugins/image-plugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import PlaygroundNodes from "./components/nodes/playground-nodes";
import { $getRoot } from "lexical";
import { Toolbar } from "./Toobar";
const theme = {
  // 테마 스타일링 설정
  // ...
  paragraph: "mb-1",
  rtl: "text-right",
  ltr: "text-left",
  image: "editor-image",
  text: {
    bold: "font-bold",
    italic: "italic",
    underline: "underline",
    strikethrough: "line-through",
  },
};
function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    // 효과가 발생할 때 에디터에 포커스를 줍니다.
    // editor.focus();
  }, [editor]);
  return null;
}
function onError(error: any) {
  console.error(error);
}

interface Note {
  idx: number;
  title: string;
  content: string;
}

interface NoteBook {
  idx: number;
  title: string;
  noteList: Note[];
}

interface EditorProps {
  noteBookList: NoteBook[];
  selectedNoteBookIdx: number;
  noteList: Note[];
  selectedNoteIdx: number;
  screenMode: string;
}

export default function Editor({ noteBookList, selectedNoteBookIdx, noteList, selectedNoteIdx, screenMode }: EditorProps) {
  let CONTENT;

  // noteList에서 idx 속성이 selectedNoteIdx와 일치하는 첫 번째 노트
  const selectNote = noteList.find((el) => el.idx === selectedNoteIdx);

  // 애디터 초기 상태를 설정
  CONTENT = JSON.stringify({
    root: {
      children: [
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: selectNote?.title ? `${selectNote.title}\n${selectNote?.content}` : "",
              type: "text",
              version: 1,
            },
          ],
          direction: "ltr",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
      ],
      direction: "ltr",
      format: "",
      indent: 0,
      type: "root",
      version: 1,
    },
  });

  const initialConfig = {
    namespace: "MyEditor",
    theme,
    editorState: CONTENT,
    onError,
    MyCustomAutoFocusPlugin,
    nodes: [...PlaygroundNodes],
  };

  // 에디터 입력 이벤트
  const handleContentChange = (EditorState: any) => {
    EditorState.read(() => {
      const root = $getRoot();
      if (root.__cachedText === null) return;
      if (root.__cachedText !== "") {
        const lines = root.__cachedText.split("\n");

        const newNoteTitle = lines[0];
        const newNoteContent = lines.slice(1).join("\n") ?? "";

        localStorage.setItem(
          "NotebookList",
          JSON.stringify(
            noteBookList.map((el) =>
              el.idx === selectedNoteBookIdx
                ? {
                    ...el,
                    noteList: noteList.map((el) =>
                      el.idx === selectedNoteIdx
                        ? {
                            idx: el.idx,
                            title: newNoteTitle,
                            content: newNoteContent,
                          }
                        : el
                    ),
                  }
                : el
            )
          )
        );
      }
    });
  };

  return (
    <div className="w-full bg-white relative border-r-2 border-gray-200 h-full">
      <LexicalComposer initialConfig={initialConfig}>
        <Toolbar />
        <RichTextPlugin
          contentEditable={
            <ContentEditable className="outline-none py-[15px] px-2 resize-none overflow-auto text-ellipsis h-[910px] dark:bg-gray-800 dark:caret-white dark:text-white " />
          }
          placeholder={
            <div className="absolute top-[55px] left-[18px] truncate pointer-events-none text-gray-400">
              Type / for menu or <span className="font-bold underline">select from Templates</span>
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <ImagesPlugin />
        <DragDropPaste />
        <OnChangePlugin onChange={handleContentChange} />
      </LexicalComposer>
    </div>
  );
}
