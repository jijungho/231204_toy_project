import React from "react";
import Image from "next/image";
import { subMainLi } from "@/app/styles/style";

interface Note {
  idx: number;
  title: string;
  content: string;
  subtitle: string;
  memoList: Array<{
    memoSubTitle: string;
    memoContent: string;
  }>;
}

interface NoteDetailProps {
  selectedIdx: number | null;
  memoList: Note[];
  onClickNoteBookDetail: any;
}

export default function NoteBookMemo({ selectedIdx, memoList, onClickNoteBookDetail }: NoteDetailProps) {
  const selectedNote = memoList.find((item: Note) => item.idx === selectedIdx);

  return (
    <>
      <div className="flex justify-between items-center bg-gray-100 h-[40px] dark:bg-gray-800 dark:border-b-[1px]">
        {selectedNote ? <h2 className="ml-4 truncate dark:text-white">{selectedNote.title}</h2> : <h2 className="ml-4 truncate">Select a Note</h2>}
        <Image src="/img/option.png" alt="option-img" className="mr-4 " width={24} height={24} />
      </div>
      <ul className="overflow-y-auto dark:bg-gray-800 h-[100%]">
        {selectedNote && selectedNote.memoList && selectedNote.memoList.length > 0 ? (
          selectedNote.memoList.map((subMemoList, subIdx) => (
            <li key={subIdx} className={`hover:bg-blue-100 dark:hover:bg-gray-100 dark:text-white ${subMainLi}`}>
              <button className="w-full h-full dark:hover:text-black" onClick={() => onClickNoteBookDetail(selectedIdx)}>
                <div>
                  <h2 className="font-bold text-left text-[20px] truncate pb-6">{subMemoList.memoSubTitle ? subMemoList.memoSubTitle : "New Note"}</h2>
                  <p className="truncate text-left">{subMemoList.memoContent ? subMemoList.memoContent : "No additional text"}</p>
                </div>
              </button>
            </li>
          ))
        ) : (
          <li className={`hover:bg-blue-100 dark:hover:bg-gray-100 dark:text-white ${subMainLi}`}>
            <button className="w-full h-full dark:hover:text-black" onClick={() => onClickNoteBookDetail(selectedIdx)}>
              <div>
                <h2 className="font-bold text-left text-[20px] truncate pb-6">New Note</h2>
                <p className="truncate text-left">No additional text</p>
              </div>
            </button>
          </li>
        )}
      </ul>
    </>
  );
}
