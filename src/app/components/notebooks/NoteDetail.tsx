import React, { useState } from "react";
import Image from "next/image";
import { subMainLi } from "@/app/styles/style";

interface Note {
  idx: number;
  title: string;
  content: string;
}

interface NoteDetailProps {
  selectedNoteBooktitle: string;
  noteList: Note[];
  setSelectedNoteIdx: React.Dispatch<React.SetStateAction<number>>;
}

export default function NoteDetail({ selectedNoteBooktitle, noteList, setSelectedNoteIdx }: NoteDetailProps) {
  const handleNoteIdx = (idx: number) => {
    setSelectedNoteIdx(idx);
  };

  const onClickDeleteNoteBook = (idx: number) => {
    setSelectedNoteIdx(idx);
    // const updatedNoteBookList = noteList.filter((el: Note) => el.idx !== selectNoteBookIdx);
    // localStorage.setItem("NoteBookList", JSON.stringify(updatedNoteBookList));
  };

  return (
    <>
      <div className="flex justify-between items-center bg-gray-100 h-[40px]">
        {selectedNoteBooktitle ? <h2 className="ml-4 truncate">{selectedNoteBooktitle}</h2> : <h2 className="ml-4 truncate">Select a Note</h2>}
        <Image src="/img/option.png" alt="option-img" className="mr-4 " width={24} height={24} />
      </div>
      <ul className="overflow-y-auto">
        {noteList.map((el, idx) => (
          <li key={idx} className={`hover:bg-blue-100  ${subMainLi}`}>
            <button className="w-full h-full" onClick={() => handleNoteIdx(el.idx)}>
              <div
                className="float-right"
                onClick={(e) => {
                  e.stopPropagation();
                  onClickDeleteNoteBook(el.idx);
                }}
              >
                <Image src="/img/delete.png" alt="delete-img" width={24} height={24} />
              </div>
              <h2 className="font-bold text-left text-[20px] truncate pb-6">{el.title ? el.title : "New Note"}</h2>
              <p className="truncate text-left">{el.content ? el.content : "No additional text"}</p>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
