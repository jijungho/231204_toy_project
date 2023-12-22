import React from "react";
import Image from "next/image";
import { subMainLi } from "@/app/styles/style";

interface Note {
  idx: number;
  title: string;
  content: string;
}

interface AllNote {
  onClickNoteBookDetail: any;
  noteBookList: Note[];
  screenMode: string;
}

export default function AllNotes({ noteBookList, onClickNoteBookDetail, screenMode }: AllNote) {
  return (
    <>
      <div className="flex justify-between items-center bg-gray-100 h-[40px]">
        <h2 className="ml-4">All Notes</h2>
        <Image src={screenMode === "dark" ? "/img/darkmode/option-white.png" : "/img/option.png"} alt="option-img" className="mr-4 " width={24} height={24} />
      </div>
      <ul className="overflow-y-auto h-[100%]">
        {/* 모든 노트북이 아닌 모든 노트가 보여야함 */}
        {noteBookList.map((notebook, idx) => (
          <li key={idx} className={`hover:bg-blue-100 dark:hover:bg-gray-100 dark:text-white  ${subMainLi}`}>
            <button className="w-full h-full dark:hover:text-black" onClick={() => onClickNoteBookDetail(notebook.idx)}>
              <h2 className="font-bold text-left text-[20px] truncate pb-6">{notebook.title ? notebook.title : "New Note"}</h2>
              <p className="truncate text-left">{notebook.content ? notebook.content : "No additional text"}</p>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
