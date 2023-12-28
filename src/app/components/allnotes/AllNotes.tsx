import React from "react";
import Image from "next/image";
import { subMainLi } from "@/app/styles/style";

interface Note {
  idx: number;
  title: string;
  content: string;
  noteBookIdx: number; // 노트가 속한 노트북의 idx
}

interface NoteBook {
  idx: number;
  title: string;
  noteList: Note[];
}

interface AllNote {
  onClickNoteBookDetail: any;
  noteBookList: NoteBook[];
  screenMode: string;
}

export default function AllNotes({ noteBookList, onClickNoteBookDetail, screenMode }: AllNote) {
  // 모든 noteBook을 합친 배열 (평탄화)
  const allNoteList = noteBookList.flatMap((notebook) => notebook.noteList.map((note) => ({ ...note, noteBookIdx: notebook.idx })));

  return (
    <>
      <div className="flex justify-between items-center bg-gray-100 h-[40px] border-b-2 dark:bg-gray-800 dark:border-b-[1px]">
        <h2 className="ml-4 dark:text-white">All Notes</h2>

        <Image src={screenMode === "dark" ? "/img/darkmode/option-white.png" : "/img/option.png"} alt="option-img" className="mr-4 " width={24} height={24} />
      </div>
      <ul
        className="overflow-hidden h-[96%] 
        scrollbar-thumb-gray-500 
        scrollbar-track-gray-100 
        scrollbar-thumb-rounded-full 
        scrollbar-thin
        hover:overflow-y-auto dark:bg-gray-800 
        hover:dark:scrollbar-thin 
        hover:dark:scrollbar-thumb-gray-500
        hover:dark:scrollbar-white 
        hover:dark:scrollbar-thumb-rounded-full"
      >
        {allNoteList.map((note, idx) => (
          <li key={idx} className={`hover:bg-blue-100 dark:hover:bg-gray-100 dark:text-white ${subMainLi}`}>
            <button className="w-full h-full dark:hover:text-black" onClick={() => onClickNoteBookDetail(note.noteBookIdx)}>
              <h2 className="font-bold text-left text-[18px] truncate pb-6">{note.title ? note.title : "New Note"}</h2>
              <p className="truncate text-left">{note.content ? note.content : "No additional text"}</p>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
