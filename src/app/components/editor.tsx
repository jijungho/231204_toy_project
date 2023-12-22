import React, { useEffect, useMemo } from "react";
import Image from "next/image";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { $getRoot } from "lexical";
const theme = {
  // 테마 스타일링 설정
  // ...
  ltr: "ltr",
  rtl: "rtl",
  placeholder: "editor-placeholder",
  paragraph: "editor-paragraph",
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
}

export default function Editor({ noteBookList, selectedNoteBookIdx, noteList, selectedNoteIdx }: EditorProps) {
  let CONTENT;

  // 애디터 초기 상태를 설정
  //TODO: 에디터 초기화 진행 및 노트 선택 시 에디터가 변경되도록 해야함
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
              text: noteList[selectedNoteIdx]?.title ? `${noteList[selectedNoteIdx].title}\n${noteList[selectedNoteIdx]?.content}` : "",
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
    <div className="w-full">
      <div className="img-box flex justify-between p-2 bg-gray-100">
        <div className="flex justify-around w-[500px] ">
          <button className="w-[24px] h-[24px]">
            <Image src="/img/check-list.png" alt="check-list-img" width={24} height={24} className="" />
          </button>
          <button className="w-[24px] h-[24px]">
            <Image src="/img/image.png" alt="image-img" width={24} height={24} className="" />
          </button>
          <button className="w-[24px] h-[24px]">
            <Image src="/img/plus-circle.png" alt="plus-circle-img" width={24} height={24} className="" />
          </button>
          <Image src="/img/vbar.png" alt="vertical-bar-img" width={24} height={24} className="rotate-90 " />
          <button className="w-[24px] h-[24px]">
            <Image src="/img/pin.png" alt="pin-img" width={24} height={24} className="" />
          </button>
          <button className="w-[24px] h-[24px]">
            <Image src="/img/star.png" alt="star-img" width={24} height={24} className="" />
          </button>
          <button className="w-[24px] h-[24px]">
            <Image src="/img/share.png" alt="share-img" width={24} height={24} className="" />
          </button>
          <button className="w-[24px] h-[24px]">
            <Image src="/img/option.png" alt="option-img" width={24} height={24} className="" />
          </button>
        </div>
      </div>
      <div className="w-full h-[96%]  relative">
        <LexicalComposer initialConfig={initialConfig}>
          <PlainTextPlugin
            contentEditable={<ContentEditable className="h-full p-4 border-r-2 border-b-2 dark:bg-gray-600 " />}
            placeholder={
              <div className="absolute top-[18px] left-[18px] text-gray-400">
                Type / for menu or <span className="font-bold underline">select from Templates</span>
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <OnChangePlugin onChange={handleContentChange} />
          <HistoryPlugin />
        </LexicalComposer>
      </div>
    </div>
  );
}
