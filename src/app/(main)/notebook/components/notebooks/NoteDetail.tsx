import React, { useState } from "react";
import Image from "next/image";
import { subMainLi } from "@/app/styles/style";

interface Note {
  idx: number;
  title: string;
  content: string;
  updatedAt: string; // 수정 시간을 문자열로 변경
}

interface NoteBook {
  idx: number;
  title: string;
  noteList: Note[];
}

interface NoteDetailProps {
  selectedNoteBooktitle: string;
  noteBookList: NoteBook[];
  noteList: Note[];
  setSelectedNoteIdx: React.Dispatch<React.SetStateAction<number>>;
  selectedNoteIdx: number;
  selectedNoteBookIdx: number;
  screenMode: string;
}

export default function NoteDetail({
  selectedNoteBooktitle,
  noteBookList,
  selectedNoteBookIdx,
  selectedNoteIdx,
  noteList,
  screenMode,
  setSelectedNoteIdx,
}: NoteDetailProps) {
  const handleNoteIdx = (idx: number) => {
    setSelectedNoteIdx(idx);
  };

  const onClickDeleteNote = (idx: number) => {
    // 선택한 노트를 제외한 새로운 noteList 생성
    const updatedNoteList = noteList.filter((note) => note.idx !== idx);

    const updatedNoteBookList = noteBookList.map((notebook) => {
      // notebook.idx를 비교하여 선택한 notebook이 맞는지 확인
      if (notebook.idx === selectedNoteBookIdx) {
        // 맞으면 새로운 noteList를 저장
        return {
          ...notebook,
          noteList: updatedNoteList,
        };
      }
      // 일치하지 않을 시 반환
      return notebook;
    });

    // 변경된 noteList를 로컬에 저장
    localStorage.setItem("NotebookList", JSON.stringify(updatedNoteBookList));
  };

  const today = new Date();

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const updateNoteContent = (newContent: string) => {
    // 에디터에서 텍스트를 작성할 때 호출되는 함수
    // noteList를 업데이트하고 수정 시간을 갱신
    const updatedNoteList = noteList.map((note) => (note.idx === selectedNoteIdx ? { ...note, content: newContent, updatedAt: formatDate(today) } : note));

    const updatedNoteBookList = noteBookList.map((notebook) => (notebook.idx === selectedNoteBookIdx ? { ...notebook, noteList: updatedNoteList } : notebook));

    localStorage.setItem("NotebookList", JSON.stringify(updatedNoteBookList));
  };

  return (
    <>
      <div className="flex justify-between items-center bg-gray-100 h-[40px]  dark:bg-gray-800 dark:border-b-[1px]">
        {selectedNoteBooktitle ? <h2 className="ml-4 truncate dark:text-white ">{selectedNoteBooktitle}</h2> : <h2 className="ml-4 truncate">Select a Note</h2>}
        <Image src={screenMode === "dark" ? "/img/darkmode/option-white.png" : "/img/option.png"} alt="option-img" className="mr-4 " width={24} height={24} />
      </div>
      <ul
        className="overflow-hidden h-[910px]
        border-b-2
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
        {noteList.map((el, idx) => (
          <li key={idx} className={`${subMainLi} ${selectedNoteIdx === el.idx ? "bg-blue-100 dark:bg-gray-100 dark:text-black" : ""}`}>
            <button className={`w-full h-full  ${selectedNoteIdx === el.idx ? "dark:text-white" : "text-black"}`} onClick={() => handleNoteIdx(el.idx)}>
              <div
                className="float-right"
                onClick={(e) => {
                  e.stopPropagation();
                  onClickDeleteNote(el.idx);
                }}
              >
                <Image src="/img/delete.png" alt="delete-img" width={24} height={24} />
              </div>
              <h2 className={`font-bold text-left text-[18px] truncate pb-6  ${selectedNoteIdx === el.idx ? "dark:text-black" : "dark:text-white"}`}>
                {el.title ? el.title : "New Note"}
              </h2>
              <p className={`truncate text-left  ${selectedNoteIdx === el.idx ? "dark:text-black" : "dark:text-white"}`}>
                {el.content ? el.content : "No additional text"}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
