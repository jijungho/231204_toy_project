import React from "react";
import Image from "next/image";
import { subMainLi } from "@/app/styles/style";

interface Note {
  idx: number;
  title: string;
  content: string;
  subtitle: string;
}

interface AllNote {
  selectedIdx: number;
  onClickNoteBookDetail: any;
  memoList: Note[];
}

export default function AllNotes({ memoList, selectedIdx, onClickNoteBookDetail }: AllNote) {
  const selectedNote = memoList.find((item: Note) => item.idx === selectedIdx);

  return (
    <>
      <div className="flex justify-between items-center bg-gray-100 h-[40px] dark:bg-gray-600 border-b-[1px]">
        <h2 className="ml-4">All Notes</h2>
        <Image src="/img/option.png" alt="option-img" className="mr-4 " width={24} height={24} />
      </div>
      <ul className="overflow-y-auto dark:bg-gray-600">
        {memoList.map((item, idx) => (
          <li key={idx} className={`hover:bg-blue-100  ${subMainLi}`}>
            <button className="w-full h-full" onClick={() => onClickNoteBookDetail(item.idx)}>
              <h2 className="font-bold text-left text-[20px] truncate pb-6">{item.subtitle ? item.subtitle : "New Note"}</h2>
              <p className="truncate text-left">{item.content ? item.content : "No additional text"}</p>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
