import React, { useState } from "react";

interface Memo {
  title: string;
}

export default function NoteDeleteModal({ onClickCloseNoteDelModal }: any) {
  const [memoList, setMemoList] = useState<Memo[]>([]);

  // 사이드 메뉴에서 메모 삭제
  const onClickMemoDelete = (id: any) => {
    const updatedMemoList = [...memoList];
    updatedMemoList.splice(id, 1);

    localStorage.setItem("noteTitle", JSON.stringify(updatedMemoList));

    setMemoList(updatedMemoList);

    onClickCloseNoteDelModal();
  };

  return (
    <div className="w-full h-full">
      <div className="absolute top-0 w-full h-full bg-gray-500 opacity-30"></div>
      <div className="absolute top-0 w-full h-full flex justify-center items-center">
        <div className="w-[360px] flex flex-col bg-white rounded-[5px] p-4">
          <h2 className="text-center py-4 text-xl">Really?</h2>
          <div className="flex justify-evenly mt-4">
            <button className="bg-blue-400 w-[65px] h-[40px]  p-2 rounded-[5px] hover:bg-blue-500" onClick={onClickMemoDelete}>
              <span className="text-black">Delete</span>
            </button>
            <button className="bg-red-400 w-[65px] h-[40px] p-2 rounded-[5px] hover:bg-red-500" onClick={onClickCloseNoteDelModal}>
              <span className="text-black">no</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
