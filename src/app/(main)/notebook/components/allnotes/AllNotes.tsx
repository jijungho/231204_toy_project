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
  noteList: Note[];
  selectedNoteBookIdx: Number;
}

export default function AllNotes({ noteBookList, onClickNoteBookDetail, screenMode, noteList, selectedNoteBookIdx }: AllNote) {
  // 모든 noteBook을 합친 배열 (평탄화)
  const allNoteList = noteBookList.flatMap((notebook) => notebook.noteList.map((note) => ({ ...note, noteBookIdx: notebook.idx })));

  // const onClickDeleteNote = (idx: number) => {
  //   // 선택한 노트를 제외한 새로운 noteList 생성
  //   const updatedNoteList = noteList.filter((note) => note.idx !== idx);

  //   const updatedNoteBookList = noteBookList.map((notebook) => {
  //     // notebook.idx를 비교하여 선택한 notebook이 맞는지 확인
  //     if (notebook.idx === selectedNoteBookIdx) {
  //       // 맞으면 새로운 noteList를 저장
  //       return {
  //         ...notebook,
  //         noteList: updatedNoteList,
  //       };
  //     }
  //     // 일치하지 않을 시 반환
  //     return notebook;
  //   });

  //   // 변경된 noteList를 로컬에 저장
  //   localStorage.setItem("NotebookList", JSON.stringify(updatedNoteBookList));
  // };

  return (
    <>
      <div className="flex justify-between items-center bg-gray-100 h-[40px] dark:bg-gray-800 dark:border-b-[1px]">
        <h2 className="ml-4 dark:text-white">All Notes</h2>

        <Image src={screenMode === "dark" ? "/img/darkmode/option-white.png" : "/img/option.png"} alt="option-img" className="mr-4 " width={24} height={24} />
      </div>
      <ul
        className="overflow-hidden h-[910px]
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
