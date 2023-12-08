import React from "react";
import Image from "next/image";

interface Note {
  idx: number;
  title: string;
}

interface NoteDetailProps {
  selectedIdx: number | null;
  memoList: Note[];
}

export default function NoteDetail({ selectedIdx, memoList }: NoteDetailProps) {
  const selectedNote = memoList.find((item: Note) => item.idx === selectedIdx);

  return (
    <>
      <div className="flex justify-between items-center bg-gray-100 h-[40px]">
        {selectedNote ? <h2 className="ml-4 truncate">{selectedNote.title}</h2> : <h2 className="ml-4 truncate">Select a Note</h2>}
        <Image src="/img/option.png" alt="option-img" className="mx-4 " width={24} height={24} />
      </div>
      <div>
        {/* editor에 저장된 값이 나와야함 */}
        <h2 className="m-4">타이틀</h2>
      </div>
    </>
  );
}
