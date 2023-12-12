import React, { useState, useEffect } from "react";

function NoteAddModal({ onClickCloseNoteAddModal }: any) {
  const [noteTitle, setNoteTitle] = useState(""); // 단일 메모의 제목을 저장
  const [isTitle, setIsTitle] = useState(false);

  const onClickNoteCreate = () => {
    // 로컬 스토리지에서 저장된 메모 목록을 불러옵니다.
    const savedMemos = JSON.parse(localStorage.getItem("noteList") || "[]");

    // 새로운 메모를 만듭니다.
    const newMemo = {
      idx: savedMemos.length + 1,
      title: noteTitle,
      content: "",
      subtitle: "",
      // 추가로 메모에 필요한 속성들을 여기에 추가할 수 있습니다.
    };

    // 새로운 메모를 기존 메모 목록에 추가합니다.
    const updatedMemos = [newMemo, ...savedMemos];

    // 로컬 스토리지에 업데이트된 메모 목록을 저장합니다.
    localStorage.setItem("noteList", JSON.stringify(updatedMemos));

    onClickCloseNoteAddModal();

    console.log("savedMemos", newMemo);
  };

  // iuput에 입력값이 없으면 create 버튼을 disabled로 변경
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setNoteTitle(inputValue);

    setIsTitle(!!inputValue);
  };

  return (
    <div className="w-full h-full">
      <div className="absolute top-0 w-full h-full bg-gray-500 opacity-30"></div>
      <div className="absolute top-0 w-full h-full flex justify-center items-center">
        <div className="w-[360px] flex flex-col bg-white rounded-[5px] p-4">
          <h2 className="text-center py-4">Create New NoteBook</h2>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            className="pl-2 h-[40px] hover:ring-1 hover:ring-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 border-[1px] border-gray-400 rounded-[5px]"
            value={noteTitle}
            onChange={onChangeTitle}
          />
          <div className="flex justify-evenly mt-4">
            <button
              className={` p-2 rounded-[5px]  ${isTitle ? "bg-blue-400 hover:bg-blue-500" : "bg-white border text-gray-300"}`}
              onClick={onClickNoteCreate}
              disabled={!isTitle}
            >
              Create
            </button>
            <button className="bg-red-400 p-2 rounded-[5px] hover:bg-red-500" onClick={onClickCloseNoteAddModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteAddModal;
