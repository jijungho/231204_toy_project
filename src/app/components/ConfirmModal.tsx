import React from "react";

export default function ConfirmModal({ handleCancel, onClickOpenNoteAddModal }: any) {
  const OpenNoteAddModal = () => {
    handleCancel();
    onClickOpenNoteAddModal();
  };

  return (
    <>
      <div className="w-full h-full">
        <div className="absolute top-0 w-full h-full bg-gray-500 opacity-30"></div>
        <div className="absolute top-0 w-full h-full flex justify-center items-center">
          <div className="w-[360px] flex flex-col bg-white rounded-[5px] p-4">
            <h2 className="text-center py-4 text-xl">Plase Create New NoteBook</h2>
            <div className="flex justify-evenly mt-4">
              <button className="bg-blue-400 w-[65px] h-[40px]  p-2 rounded-[5px] hover:bg-blue-500" onClick={OpenNoteAddModal}>
                <span className="text-black">yes</span>
              </button>
              <button className="bg-red-400 w-[65px] h-[40px] p-2 rounded-[5px] hover:bg-red-500" onClick={handleCancel}>
                <span className="text-black">no</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
