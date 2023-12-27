import React from "react";

export default function NoteBookSelectModal({ handleCancel }: any) {
  return (
    <div className="w-full h-full">
      <div className="absolute top-0 w-full h-full bg-gray-500 opacity-30"></div>
      <div className="absolute top-0 w-full h-full flex justify-center items-center">
        <div className="w-[360px] flex flex-col bg-white rounded-[5px] p-4">
          <h2 className="text-center py-4 text-[20px]">Select a Note</h2>
          <div className="flex justify-evenly mt-4">
            <button className="bg-red-400 p-2 rounded-[5px] hover:bg-red-500" onClick={handleCancel}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
