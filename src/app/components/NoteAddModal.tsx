import React, { useState, useEffect } from "react";

function NoteAddModal({ onClickCloseNoteAddModal }: any) {
  const [noteTitle, setNoteTitle] = useState(""); // 단일 메모의 제목을 저장

  const onClickNoteCreate = () => {
    // 로컬 스토리지에서 저장된 메모 목록을 불러옵니다.
    const savedMemos = JSON.parse(localStorage.getItem("noteTitle") || "[]");

    // 새로운 메모를 만듭니다.
    const newMemo = {
      id: savedMemos.length + 1,
      title: noteTitle,
      // 추가로 메모에 필요한 속성들을 여기에 추가할 수 있습니다.
    };

    // 새로운 메모를 기존 메모 목록에 추가합니다.
    const updatedMemos = [newMemo, ...savedMemos];

    // 로컬 스토리지에 업데이트된 메모 목록을 저장합니다.
    localStorage.setItem("noteTitle", JSON.stringify(updatedMemos));

    onClickCloseNoteAddModal();
  };

  return (
    <div className="w-full h-full">
      <div className="absolute top-0 w-full h-full bg-gray-500 opacity-30"></div>
      <div className="absolute top-0 w-full h-full flex justify-center items-center">
        <div className="w-[360px] flex flex-col bg-white rounded-[5px] p-4">
          <h2 className="text-center py-4">New NoteBook</h2>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            className="pl-2 h-[40px] hover:ring-1 hover:ring-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 border-[1px] border-gray-400 rounded-[5px]"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          <div className="flex justify-evenly mt-4">
            <button className="bg-blue-400 p-2 rounded-[5px] hover:bg-blue-500" onClick={onClickNoteCreate}>
              <span className="text-black">Create</span>
            </button>
            <button className="bg-red-400 p-2 rounded-[5px] hover:bg-red-500" onClick={onClickCloseNoteAddModal}>
              <span className="text-red-900">Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteAddModal;
