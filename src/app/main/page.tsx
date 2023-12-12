"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NotoBookNaviBarOption, commonNaviBarOption } from "@/app/styles/style";
import AllNotes from "@/app/components/allnotes/AllNotes";
import Uncategorized from "@/app/components/allnotes/Uncategorized";
import Todo from "@/app/components/allnotes/Todo";
import Unsynced from "@/app/components/allnotes/Unsynced";
import Editor from "@/app/components/editor";
import NoteAddModal from "@/app/components/NoteAddModal";
import NoteBook from "@/app/components/notebooks/NoteBook";
import NoteDeleteModal from "../components/NoteDeleteModal";
import NoteDetail from "../components/notebooks/NoteDetail";

interface Memo {
  title: string;
  idx: number;
  content: string;
  subtitle: string;
}

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
  const [isNoteBookComponent, setIsNoteBookComponent] = useState(false);
  const [isNoteBookDetailComponent, setIsNoteBookDetailComponent] = useState(false);

  // 메뉴 토글 상태 변수
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const [memoList, setMemoList] = useState<Memo[]>([]);
  const [subTitle, setSubTitle] = useState<string>("");
  const [selectedIdx, setSelectedIdx] = useState(0);

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

  // 로컬에 저장된 데이터를 반영해주는 useEffect 훅
  useEffect(() => {
    const loadMemoList = () => {
      const titleList = JSON.parse(localStorage.getItem("noteList") || "[]");
      setMemoList(titleList);
    };

    loadMemoList();

    const intervalId = setInterval(() => {
      loadMemoList();
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  // 로컬에 저장된 데이터 삭제하는 클릭 이벤트
  // const onClickMemoDelete = (idx: any) => {
  //   const updatedMemoList = [...memoList];
  //   updatedMemoList.splice(idx, 1);

  //   localStorage.setItem("noteTitle", JSON.stringify(updatedMemoList));

  //   setMemoList(updatedMemoList);

  //   onClickCloseNoteDelModal();
  //   console.log(idx);
  // };

  // 사이드 메뉴 클릭 시 상태 업데이트
  const onClickAllNotesMenu = () => {
    setIsAllNotesComponent(true);
    setIsUncategoriedComponent(false);
    setIsTodoComponent(false);
    setIsUnsyncedComponent(false);
    setIsNoteBookComponent(false);
    setIsNoteBookDetailComponent(false);
  };
  const onClickUncategoriedMenu = () => {
    setIsUncategoriedComponent(true);
    setIsAllNotesComponent(false);
    setIsTodoComponent(false);
    setIsUnsyncedComponent(false);
    setIsNoteBookComponent(false);
    setIsNoteBookDetailComponent(false);
  };
  const onClickTodoMenu = () => {
    setIsTodoComponent(true);
    setIsUncategoriedComponent(false);
    setIsAllNotesComponent(false);
    setIsUnsyncedComponent(false);
    setIsNoteBookComponent(false);
    setIsNoteBookDetailComponent(false);
  };
  const onClickUnsyncedMenu = () => {
    setIsUnsyncedComponent(true);
    setIsUncategoriedComponent(false);
    setIsTodoComponent(false);
    setIsAllNotesComponent(false);
    setIsNoteBookComponent(false);
    setIsNoteBookDetailComponent(false);
  };
  const onClickNoteBookMenu = () => {
    setIsNoteBookComponent(true);
    setIsUnsyncedComponent(false);
    setIsUncategoriedComponent(false);
    setIsTodoComponent(false);
    setIsAllNotesComponent(false);
    setIsNoteBookDetailComponent(false);
  };
  const onClickNoteBookDetail = (idx: any) => {
    setIsNoteBookDetailComponent(true);
    setIsNoteBookComponent(false);
    setIsUnsyncedComponent(false);
    setIsUncategoriedComponent(false);
    setIsTodoComponent(false);
    setIsAllNotesComponent(false);

    setSelectedIdx(idx);
    console.log(idx);
  };
  // const handleAllNotesLinkClick = () => {
  // };
  // const handleAllNotesLinkClick = () => {
  // };
  // const handleAllNotesLinkClick = () => {
  // };

  // 메모 추가 모달 가시성 상태 변수
  const [isNoteAddModalOpen, setIsNoteAddModalOpen] = useState(false);

  // 메모 삭제 모달 가시성 상태 변수
  const [isNoteDeleteModalOpen, setIsNoteDeleteModalOpen] = useState(false);

  // 노트 추가 모달 열기
  const onClickOpenNoteAddModal = () => {
    setIsNoteAddModalOpen(true);
  };

  // 노트 추가 모달 닫기
  const onClickCloseNoteAddModal = () => {
    setIsNoteAddModalOpen(false);
  };

  // 노트 삭제 모달 열기
  const onClickOpenNoteDelModal = (idx: any) => {
    setIsNoteDeleteModalOpen(true);

    // idx를 객체 형식으로 DeleteNote 로컬스토리지에 저장
    localStorage.setItem("DeleteNote", JSON.stringify({ idx }));

    // console.log("idx = ", idx);
    // console.log("memoList = ", memoList);
  };

  // 로컬에 저장된 데이터 삭제하는 클릭 이벤트
  const onClickMemoDelete = () => {
    const noteToDelete = JSON.parse(localStorage.getItem("DeleteNote") || "{}");
    const updatedMemoList = memoList.filter((memo) => memo.idx !== noteToDelete.idx);

    localStorage.setItem("noteList", JSON.stringify(updatedMemoList));
    setMemoList(updatedMemoList);

    onClickCloseNoteDelModal();

    // console.log(noteToDelete.id);
    // console.log(updatedMemoList);
  };

  // 노트 삭제 모달 닫기
  const onClickCloseNoteDelModal = () => {
    setIsNoteDeleteModalOpen(false);
  };

  const AllNotesMenu = { display: isAllNotesVisible ? "flex" : "none" };
  const NoteBooksMenu = { display: isNoteBooks ? "flex" : "none" };
  const TagsMenu = { display: isTags ? "flex" : "none" };
  const clickimageSrc = isAllNotesVisible ? "/img/arrotw-right-bold.png" : "/img/arrotw-right-bold.png";
  const hoverImageSrc = isAllNotesVisible ? "/img/arrotw-right-bold-balck.png" : "/img/arrotw-right-bold-balck.png";

  const [dark, setDark] = useState("dark"); // 다크모드 있는곳 텍스트 !

  const toggleDarkMode = () => {
    if (localStorage.getItem("theme") === "dark") {
      // 다크모드 -> 기본모드
      localStorage.removeItem("theme"); // 다크모드 삭제
      document.documentElement.classList.remove("dark"); // html class에서 dark클래스 삭제 !
      setDark("nomal");
    } else {
      // 기본모드 -> 다크모드
      document.documentElement.classList.add("dark"); // html의 class에 dark 클래스 추가 !
      localStorage.setItem("theme", "dark"); // localstorage에 dark를 추가해서 ! useEffect에서 처음에 검사해서 다크모드인지 판단해주려고 !
      setDark("dark");
    }
  };

  useEffect(() => {
    // 처음에 다크모드인지 판단해서 뿌려주기 !! ( 나중에는 상태관리를 해도 괜찮습니다 ! )
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <>
      <div
        className={`min-w-[1400px] max-w-[1920px] h-[100vh] dark:bg-gray-600 ${isNoteAddModalOpen ? "blur-sm" : ""} || ${
          isNoteDeleteModalOpen ? "blur-sm" : ""
        }`}
      >
        <header className="dark: text-white">
          <div id="top-header" className="w-full h-full flex border-b-[2px] justify-between ">
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
                <Image src="/img/search.png" alt="search-img" className="h-[24px] absolute top-[4px] left-[10px] " width={24} height={24} />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[400px] pl-[40px]  hover:ring-1 hover:ring-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 border-[1px] border-gray-400 rounded-[5px]"
                />
              </li>
            </ul>
            <ul className="flex items-center">
              <li>
                <button onClick={toggleDarkMode}>
                  <Image
                    src={dark === "dark" ? "/img/moon.png" : "/img/sun.png"}
                    alt={dark === "dark" ? "darkMode-img" : "nomalMode-img"}
                    width={32}
                    height={32}
                  />
                </button>
              </li>
              <li>
                <button className="p-[10px] m-2 bg-blue-500 rounded-[5px] hover:bg-blue-600" onClick={onClickOpenNoteAddModal}>
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
        <main id="noteBook" className="flex min-w-[1400px] max-w-[1920px] h-[100vh]">
          <aside id="sideNavBar" className={"w-[250px] transition-transform duration-700 ease-in-out  border-gray-200 border-r-2"}>
            <div className="flex h-full">
              <nav className="flex">
                <ul className="w-[250px]">
                  <li className="w-full">
                    <ul className="flex justify-center flex-col">
                      <li onClick={onClickAllNotesMenu} className="flex items-center h-[40px] hover:bg-gray-100">
                        <a href="#!" className="flex items-center ">
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
                      <li style={AllNotesMenu} className="  py-2 px-6 h-[40px] items-center hover:bg-gray-100">
                        <a href="#!" onClick={onClickUncategoriedMenu} className={commonNaviBarOption}>
                          <Image src="/img/filte.png" alt="uncategorized-img" className="mr-[8px] h-[100%]" width={24} height={24} />
                          Uncategorized
                        </a>
                      </li>
                      <li style={AllNotesMenu} className="  py-2 px-6 h-[40px] items-center hover:bg-gray-100">
                        <a href="#!" onClick={onClickTodoMenu} className={commonNaviBarOption}>
                          <Image src="/img/check.png" alt="todo-img" className="mr-[8px]" width={24} height={24} />
                          Todo
                        </a>
                      </li>
                      <li style={AllNotesMenu} className="  py-2 px-6 h-[40px] items-center hover:bg-gray-100">
                        <a href="#!" onClick={onClickUnsyncedMenu} className={commonNaviBarOption}>
                          <Image src="/img/cloud-off.png" alt="unsynced-img" className="mr-[8px]" width={24} height={24} />
                          Unsynced
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li id="asd" className="">
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
                        <a href="#!" onClick={onClickNoteBookMenu} className="flex w-full items-center h-full text-blue-800">
                          NOTEBOOKS
                        </a>
                        {/* 메모 추가 버튼 */}
                        <button onClick={onClickOpenNoteAddModal} className="group flex items-center relative">
                          <Image src="/img/plus-blue.png" alt="plus-blue-img" width={24} height={24} />
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
                      {memoList.map((item, idx) => (
                        <li style={NoteBooksMenu} key={idx} className="py-2 pl-6 pr-4 h-[40px] hover:bg-gray-100 justify-between">
                          <a
                            href="#!"
                            onClick={() => onClickNoteBookDetail(item.idx)}
                            /* onClick={() => console.log(idx)} */ className={`truncate ${NotoBookNaviBarOption}`}
                          >
                            {item.title}
                          </a>
                          <button onClick={() => onClickOpenNoteDelModal(item.idx)}>
                            <Image src="/img/delete.png" alt="delete-img" width={24} height={24} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="">
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
                        <a href="#!" className={NotoBookNaviBarOption}>
                          #UpNote
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className=" ml-6 h-[40px] flex items-center">
                    <a href="#!" className="block text-blue-800">
                      TEMPLATES
                    </a>
                  </li>
                  <li className=" ml-6 h-[40px] flex items-center">
                    <a href="#!" className="block text-blue-800">
                      TRASH
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
          {isNoteBookComponent ? (
            <NoteBook isMenuOpen={isMenuOpen} onClickNoteBookDetail={onClickNoteBookDetail} memoList={memoList} />
          ) : (
            <div className={`w-full flex ${isMenuOpen ? "" : "translate-x-[-250px]"} transition-transform duration-500 ease-in-out z-3 bg-white`}>
              <aside id="subMain" className="min-w-[250px] max-w-[250px] border-r-2 border-bg-gray-200">
                {isUncategoriedComponent ? <Uncategorized /> : ""}
                {isTodoComponent ? <Todo /> : ""}
                {isUnsyncedComponent ? <Unsynced /> : ""}
                {isAllNotesComponent ? <AllNotes selectedIdx={selectedIdx} memoList={memoList} onClickNoteBookDetail={onClickNoteBookDetail} /> : ""}
                {isNoteBookDetailComponent ? <NoteDetail selectedIdx={selectedIdx} memoList={memoList} onClickNoteBookDetail={onClickNoteBookDetail} /> : ""}
              </aside>
              {/* 에디터 */}

              {memoList.map((item, idx) =>
                isNoteBookDetailComponent && selectedIdx === item.idx ? <Editor key={idx} selectedIdx={selectedIdx} memoList={memoList} /> : ""
              )}

              {isAllNotesComponent ? <Editor selectedIdx={selectedIdx} memoList={memoList} /> : ""}
              {isUncategoriedComponent ? <Editor selectedIdx={selectedIdx} memoList={memoList} /> : ""}
              {isTodoComponent ? <Editor selectedIdx={selectedIdx} memoList={memoList} /> : ""}
              {isUnsyncedComponent ? <Editor selectedIdx={selectedIdx} memoList={memoList} /> : ""}
            </div>
          )}
        </main>
      </div>
      {isNoteAddModalOpen && <NoteAddModal onClickCloseNoteAddModal={onClickCloseNoteAddModal} />}
      {isNoteDeleteModalOpen && <NoteDeleteModal closeDelModal={onClickCloseNoteDelModal} memoTitleDelete={onClickMemoDelete} />}
    </>
  );
}
