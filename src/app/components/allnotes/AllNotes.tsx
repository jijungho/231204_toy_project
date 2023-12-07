import React from "react";
import Image from "next/image";
import { subMainLi } from "@/app/styles/style";

export default function AllNotes() {
  return (
    <>
      <div className="flex justify-between items-center bg-gray-100 h-[40px] ">
        <h2 className="ml-4">All Notes</h2>
        <Image src="/img/option.png" alt="option-img" className="mr-4 " width={24} height={24} />
      </div>
      <div className="border-t-[2px] border-gray-200">
        <ul>
          <li className={subMainLi}>
            <button className="pointer w-full h-full ">모든 노트</button>
          </li>
          <li className={subMainLi}>
            <button className="pointer w-full h-full">모든 노트</button>
          </li>
          <li className={subMainLi}>
            <button className="pointer w-full h-full">모든 노트</button>
          </li>
        </ul>
      </div>
    </>
  );
}
