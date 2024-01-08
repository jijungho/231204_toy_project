import { ArrowBigLeft } from "lucide-react";
import React from "react";
import { mainPageLi } from "../styles/style";

const MainPage = () => {
  return (
    <>
      <div className="w-full h-full text-center pt-[70px] bg-slate-300 relative">
        <div className="w-full h-[400px] flex justify-center items-center flex-col">
          <span className="text-4xl underline underline-offset-8 bg-slate-200 p-3 rounded-2xl">Hoya의 놀이터</span>
          <ul className="text-left mt-6 ">
            <span className="text-xl">기능</span>
            <li className={`${mainPageLi} `}>
              <span>1. Lexical Editor을 사용한 메모장 기능 (2023.12.28 부분완료)</span>
            </li>
            <li className={`${mainPageLi}`}>
              <span>2. Next.js를 사용한 게시판 기능 (진행중)</span>
            </li>
            <li className={`${mainPageLi}`}>
              <span>3. Shadcn/ui를 사용한 ui 학습 (2024.01.05 완료)</span>
            </li>
            <li className={`${mainPageLi}`}>
              <span>4. React-Query, React-Hook-Form을 사용한 회원가입 기능 (진행중)</span>
            </li>
          </ul>
        </div>
        <div className="absolute top-[25%] flex items-center text-xl">
          <ArrowBigLeft size={90} />
          <span className="underline underline-offset-1 ">SideMenu</span>를 통해 이동해주세요
        </div>
      </div>
    </>
  );
};

export default MainPage;
