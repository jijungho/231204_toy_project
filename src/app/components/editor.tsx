// pages/editor.js

import { useEffect } from "react";
import Image from "next/image";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

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

function Editor() {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    MyCustomAutoFocusPlugin,
  };

  return (
    <div className="w-full">
      <div className="img-box flex justify-between p-2 bg-gray-100">
        <div className="flex ">
          <Image src="/img/check-list.png" alt="check-list-img" width={24} height={24} className="ml-6" />
          <Image src="/img/image.png" alt="image-img" width={24} height={24} className="ml-6" />
          <Image src="/img/plus-circle.png" alt="plus-circle-img" width={24} height={24} className="ml-6" />
          <Image src="/img/vbar.png" alt="vertical-bar-img" width={24} height={24} className="rotate-90 ml-6" />
          <Image src="/img/pin.png" alt="pin-img" width={24} height={24} className="ml-6" />
          <Image src="/img/star.png" alt="star-img" width={24} height={24} className="ml-6" />
          <Image src="/img/share.png" alt="share-img" width={24} height={24} className="ml-6" />
          <Image src="/img/option.png" alt="option-img" width={24} height={24} className="ml-6" />
        </div>
        <Image src="/img/maximize.png" alt="view-maxize-img" width={24} height={24} className="mr-2" />
      </div>
      <div className="w-full h-full  relative">
        <LexicalComposer initialConfig={initialConfig}>
          <PlainTextPlugin
            contentEditable={<ContentEditable className="h-full p-4 border-2 " />}
            placeholder={<div className="absolute top-[18px] left-[16px]">fffff</div>}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
        </LexicalComposer>
      </div>
    </div>
  );
}

export default Editor;
