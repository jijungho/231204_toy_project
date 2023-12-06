"use client";
import React, { useState } from "react";
import Image from "next/image";
import { NaviBarOption } from "@/app/styles/style";
import AllNotes from "../components/allnotes/AllNotes";
import Uncategorized from "../components/allnotes/Uncategorized";
import Todo from "../components/allnotes/Todo";
import Unsynced from "../components/allnotes/Unsynced";
import Editor from "@/app/components/editor";

export default function Page() {
  // 사이드 메뉴 클릭 상태 변수
  const [isAllNotesVisible, setAllNotesVisible] = useState(true);
  const [isNoteBooks, setIsNoteBooks] = useState(true);
  const [isTags, setIsTags] = useState(true);

  // 사이드 메뉴 호버 상태 변수
  const [isAllNotesHover, setIsAllNotesHover] = useState(false);
  const [isNoteBooksHover, setIsNoteBooksHover] = useState(false);
  const [isTagsHover, setIsTagsHover] = useState(false);

  // 사이드 메뉴 링크
  const [isAllNotesComponent, setIsAllNotesComponent] = useState(true);
  const [isUncategoriedComponent, setIsUncategoriedComponent] = useState(false);
  const [isTodoComponent, setIsTodoComponent] = useState(false);
  const [isUnsyncedComponent, setIsUnsyncedComponent] = useState(false);

  // 메뉴 토글 상태 변수
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  // Menu 토글 이벤트
  const AllNotesToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAllNotesVisible(!isAllNotesVisible);
  };
  const NoteBooksToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsNoteBooks(!isNoteBooks);
  };
  const TagsToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsTags(!isTags);
  };
  const NavMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 사이드 메뉴 클릭 시 상태 업데이트
  const onClickAllNotesMenu = () => {
    setIsAllNotesComponent(true);
    setIsUncategoriedComponent(false);
    setIsTodoComponent(false);
    setIsUnsyncedComponent(false);
  };
  const onClickUncategoriedMenu = () => {
    setIsUncategoriedComponent(true);
    setIsAllNotesComponent(false);
    setIsTodoComponent(false);
    setIsUnsyncedComponent(false);
  };
  const onClickTodoMenu = () => {
    setIsTodoComponent(true);
    setIsUncategoriedComponent(false);
    setIsAllNotesComponent(false);
    setIsUnsyncedComponent(false);
  };
  const onClickUnsyncedMenu = () => {
    setIsUnsyncedComponent(true);
    setIsUncategoriedComponent(false);
    setIsTodoComponent(false);
    setIsAllNotesComponent(false);
  };
  // const handleAllNotesLinkClick = () => {
  // };
  // const handleAllNotesLinkClick = () => {
  // };
  // const handleAllNotesLinkClick = () => {
  // };
  // const handleAllNotesLinkClick = () => {
  // };
  // const handleAllNotesLinkClick = () => {
  // };

  const AllNotesMenu = { display: isAllNotesVisible ? "flex" : "none" };
  const NoteBooksMenu = { display: isNoteBooks ? "flex" : "none" };
  const TagsMenu = { display: isTags ? "flex" : "none" };
  const clickimageSrc = isAllNotesVisible ? "/img/arrotw-right-bold.png" : "/img/arrotw-right-bold.png";
  const hoverImageSrc = isAllNotesVisible ? "/img/arrotw-right-bold-balck.png" : "/img/arrotw-right-bold-balck.png";

  return (
    <div className="min-w-[1400px] max-w-[1920px] h-[100vh]">
      <header className="">
        <div id="top-header" className="w-full h-full flex border-b justify-between ">
          <ul className="flex items-center ">
            <li className="pl-[16px] h-[32px]">
              <button onClick={NavMenuToggle}>
                <Image src="/img/menu.png" alt="hambar-menu-img" width={32} height={32} />
              </button>
            </li>
            <li className="h-[32px]">
              <button>
                <Image src="/img/arrow-left.png" alt="arrow-left-img" width={32} height={32} />
              </button>
            </li>
            <li className="h-[32px]">
              <button>
                <Image src="/img/arrow-right.png" alt="arrow-right-img" width={32} height={32} />
              </button>
            </li>
            <li className="flex relative h-[32px]">
              <button className="absolute top-[4px] left-[-10px] pl-[16px]">
                <Image src="/img/search.png" alt="search-img" className="h-[24px] " width={24} height={24} />
              </button>
              <input
                type="text"
                placeholder="Search"
                className="w-[400px] pl-[40px]  hover:ring-1 hover:ring-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 border-[1px] border-gray-400 rounded-[5px]"
              />
            </li>
          </ul>
          <ul className="flex items-center">
            <li>
              <button className="p-[10px] m-2 bg-blue-500 rounded-[5px] hover:bg-blue-600">
                <span className="text-white">New Note</span>
              </button>
            </li>
            <li className="ml-[32px] h-[32px]">
              <button>
                <Image src="/img/copy.png" alt="copy-img" width={32} height={32} />
              </button>
            </li>
            <li className="pr-[16px] ml-[32px] h-[32px]">
              <button>
                <Image src="/img/settings.png" alt="settings-img" width={32} height={32} />
              </button>
            </li>
          </ul>
        </div>
      </header>
      <main id="noteBook" className="flex">
        <aside id="sideNavBar" className={"w-[250px] transition-transform duration-700 ease-in-out  border-gray-400"}>
          <div className="flex w-[12.5%] border-1 border-#ddd">
            <nav className="flex">
              <ul className="">
                <li className="w-[240px]">
                  <ul className="flex justify-center flex-col">
                    <li onClick={onClickAllNotesMenu} className="flex items-center h-[40px] hover:bg-gray-100">
                      <a href="#!" className="flex w-full items-center ">
                        <button onClick={AllNotesToggle}>
                          <Image
                            src={isAllNotesHover ? hoverImageSrc : clickimageSrc}
                            className={`${isAllNotesVisible ? "rotate-90" : ""}`}
                            alt="arrow-right-img"
                            width={24}
                            height={24}
                            onMouseEnter={() => {
                              setIsAllNotesHover(true);
                            }}
                            onMouseLeave={() => {
                              setIsAllNotesHover(false);
                            }}
                          />
                        </button>
                        <Image src="/img/sticky-note.png" alt="all-note-img" className="mr-[8px]" width={24} height={24} />
                        All Notes
                      </a>
                    </li>
                    <li style={AllNotesMenu} className="py-2 pl-6 h-[40px] items-center hover:bg-gray-100">
                      <a href="#!" onClick={onClickUncategoriedMenu} className={NaviBarOption}>
                        <Image src="/img/filte.png" alt="uncategorized-img" className="mr-[8px] h-[100%]" width={24} height={24} />
                        Uncategorized
                      </a>
                    </li>
                    <li style={AllNotesMenu} className="py-2 pl-6 h-[40px] items-center hover:bg-gray-100">
                      <a href="#!" onClick={onClickTodoMenu} className={NaviBarOption}>
                        <Image src="/img/check.png" alt="todo-img" className="mr-[8px]" width={24} height={24} />
                        Todo
                      </a>
                    </li>
                    <li style={AllNotesMenu} className="py-2 pl-6 h-[40px] items-center hover:bg-gray-100">
                      <a href="#!" onClick={onClickUnsyncedMenu} className={NaviBarOption}>
                        <Image src="/img/cloud-off.png" alt="unsynced-img" className="mr-[8px]" width={24} height={24} />
                        Unsynced
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="w-[240px]">
                  <ul className="flex justify-center flex-col relative">
                    <li className="flex items-center h-[40px]">
                      <a href="#!" className="flex items-center  ">
                        <button onClick={NoteBooksToggle} className="w-[24px] h-[24px]">
                          <Image
                            src={isNoteBooksHover ? hoverImageSrc : clickimageSrc}
                            className={`${isNoteBooks ? "rotate-90" : ""}`}
                            alt="arrow-right-img"
                            width={24}
                            height={24}
                            onMouseEnter={() => {
                              setIsNoteBooksHover(true);
                            }}
                            onMouseLeave={() => {
                              setIsNoteBooksHover(false);
                            }}
                          />
                        </button>
                      </a>
                      <a href="#!" className="flex w-full items-center h-full text-blue-800">
                        NOTEBOOKS
                      </a>
                      {/* 메모 추가 버튼 */}
                      <button className="group flex items-center relative">
                        <Image src="/img/plus.png" alt="plus-icon" width={24} height={24} />
                        <span className="w-[110px] bg-gray-600 absolute top-[-26px] right-[-45px] rounded opacity-0 transition-opacity group-hover:opacity-100 text-[14px] z-5 text-white">
                          New NoteBook
                        </span>
                        <Image
                          src="/img/down-triangle.png"
                          alt="speech-bubble-img"
                          className="absolute bottom-[16px] left-[2px] opacity-0 transition-opacity group-hover:opacity-100 "
                          width={16}
                          height={16}
                        />
                      </button>
                    </li>
                    {/* 내가 입력한 메모가 저장되야함 */}
                    <li style={NoteBooksMenu} className="py-2 pl-6 h-[40px] items-center hover:bg-gray-100">
                      <a href="#!" className={NaviBarOption}>
                        추가될 메모
                      </a>
                    </li>
                    <li style={NoteBooksMenu} className="py-2 pl-6 h-[40px] items-center hover:bg-gray-100">
                      <a href="#!" className={NaviBarOption}>
                        추가될 메모
                      </a>
                    </li>
                    <li style={NoteBooksMenu} className="py-2 pl-6 h-[40px] items-center hover:bg-gray-100">
                      <a href="#!" className={NaviBarOption}>
                        추가될 메모
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="w-[240px]">
                  <ul className="flex justify-center flex-col">
                    <li className="flex items-center  h-[40px]">
                      <a href="#!" className="flex items-center ">
                        <button onClick={TagsToggle}>
                          <Image
                            src={isTagsHover ? hoverImageSrc : clickimageSrc}
                            className={`${isTags ? "rotate-90" : ""}`}
                            alt="arrow-right-img"
                            width={24}
                            height={24}
                            onMouseEnter={() => {
                              setIsTagsHover(true);
                            }}
                            onMouseLeave={() => {
                              setIsTagsHover(false);
                            }}
                          />
                        </button>
                      </a>
                      <a href="#!" className="flex w-full items-center h-full text-blue-800">
                        TAGS
                      </a>
                    </li>
                    <li style={TagsMenu} className="py-2 pl-6 h-[40px] items-center hover:bg-gray-100">
                      <a href="#!" className={NaviBarOption}>
                        #UpNote
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="w-[240px] ml-6 h-[40px] flex items-center">
                  <a href="#!" className="block text-blue-800">
                    TEMPLATES
                  </a>
                </li>
                <li className="w-[240px] ml-6 h-[40px] flex items-center">
                  <a href="#!" className="block text-blue-800">
                    TRASH
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <div className={`w-full flex ${isMenuOpen ? "" : "translate-x-[-240px]"} transition-transform duration-500 ease-in-out z-3 bg-white`}>
          <aside id="subMain" className="w-[240px] border-x-2 border-gray-200">
            {isAllNotesComponent && <AllNotes />}
            {isUncategoriedComponent && <Uncategorized />}
            {isTodoComponent && <Todo />}
            {isUnsyncedComponent && <Unsynced />}
          </aside>
          {/* 에디터 */}
          <Editor />
        </div>
      </main>
    </div>
  );
}
