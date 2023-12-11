import React from "react";
import Image from "next/image";

interface Note {
  idx: number;
  title: string;
  content: string;
  subtitle: string;
}

interface NoteDetailProps {
  selectedIdx: number | null;
  memoList: Note[];
  subTitle: string;
}

export default function NoteDetail({ selectedIdx, memoList }: NoteDetailProps) {
  const selectedNote = memoList.find((item: Note) => item.idx === selectedIdx);

  return (
    <>
      <div className="flex justify-between items-center bg-gray-100 h-[40px]">
        {selectedNote ? <h2 className="ml-4 truncate text-[20px]">{selectedNote.title}</h2> : <h2 className="ml-4 truncate">Select a Note</h2>}
        <Image src="/img/option.png" alt="option-img" className="mx-2 " width={24} height={24} />
      </div>
      <div>
        {/* editor에 저장된 값이 나와야 함 */}
        {selectedNote && selectedNote.idx === selectedIdx && (
          <>
            <h1 className="p-4 truncate">{}</h1>
            <p className="pl-4 truncate">{selectedNote.content}</p>
          </>
        )}
      </div>
    </>
  );
}
