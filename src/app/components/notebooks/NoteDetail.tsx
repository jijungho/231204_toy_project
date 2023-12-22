import React from "react";
import Image from "next/image";
import { subMainLi } from "@/app/styles/style";

interface Note {
  idx: number;
  title: string;
  content: string;
  subtitle: string;
}
interface NoteDetailProps {
  selectNoteBookIdx: number | null;
  noteBookList: Note[];
  onClickNoteBookDetail: any;
}

export default function NoteDetail({ selectNoteBookIdx, noteBookList, onClickNoteBookDetail }: NoteDetailProps) {
  const selectedNote = noteBookList.find((item: Note) => item.idx === selectNoteBookIdx);

  const onClickDeleteNoteBook = () => {
    const updatedNoteBookList = noteBookList.filter((note: Note) => note.idx !== selectNoteBookIdx);
    localStorage.setItem("NoteBookList", JSON.stringify(updatedNoteBookList));
  };

  return (
    <>
      <div className="flex justify-between items-center bg-gray-100 h-[40px]">
        {selectedNote ? <h2 className="ml-4 truncate">{selectedNote.title}</h2> : <h2 className="ml-4 truncate">Select a Note</h2>}
        <Image src="/img/option.png" alt="option-img" className="mr-4 " width={24} height={24} />
      </div>
      <ul className="overflow-y-auto">
        {noteBookList.map((noteBook, idx) => (
          <li key={idx} className={`hover:bg-blue-100  ${subMainLi}`}>
            <button className="w-full h-full" onClick={() => onClickNoteBookDetail(noteBook.idx)}>
              <div
                className="float-right"
                onClick={(e) => {
                  e.stopPropagation();
                  onClickDeleteNoteBook();
                }}
              >
                <Image src="/img/delete.png" alt="delete-img" width={24} height={24} />
              </div>
              <h2 className="font-bold text-left text-[20px] truncate pb-6">{noteBook.subtitle ? noteBook.subtitle : "New Note"}</h2>
              <p className="truncate text-left">{noteBook.content ? noteBook.content : "No additional text"}</p>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
