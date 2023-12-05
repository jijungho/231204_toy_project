"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import NaviBarOption from '@/app/styles/style'

export default function Main() {
  const [isAllNotesVisible, setAllNotesVisible] = useState(true);
  const [isNoteBooks, setIsNoteBooks] = useState(true);
  const [isTags, setIsTags] = useState(true);

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

  const AllNotesMenu = { display: isAllNotesVisible ? 'block' : 'none' }
  const NoteBooksMenu = { display: isNoteBooks ? 'block' : 'none' }
  const TagsMenu = { display: isTags ? 'block' : 'none' }

  return (
    <div className='min-w-[1400px] max-w-[1920px] '>
      <section className='w-full flex '>
        <aside className='flex w-[12.5%] h-[100vh] border-1 border-#ddd'>
          <nav className='flex'>
            <ul className=''>
              <li className='w-[240px]'>
                <ul className={`flex justify-center flex-col`} >
                  <li className='flex items-center'>
                    <a href="#!" className={'flex w-full items-center hover:bg-gray-100'}>
                      <button onClick={AllNotesToggle} >
                        <Image
                          src={isAllNotesVisible ? '/img/chevron-right.png' : '/img/chevron-right.png'}
                          className={`${isAllNotesVisible ? 'rotate-90' : ''}`}
                          alt='arrow-right-img'
                          width={16}
                          height={16}
                        />
                      </button>
                      <Image
                        src="/img/sticky-note.png"
                        alt='all-note-img'
                        className='mr-[8px]'
                        width={24}
                        height={24}
                      />
                      All Notes
                    </a>
                  </li>
                  <li style={AllNotesMenu}><a href="#!" className={NaviBarOption}>
                    <Image
                      src='/img/filte.png'
                      alt='uncategorized-img'
                      className='mr-[8px]'
                      width={24}
                      height={24}
                    />
                    Uncategorized</a></li>
                  <li style={AllNotesMenu}><a href="#!" className={NaviBarOption}>
                    <Image
                      src='/img/check.png'
                      alt='todo-img'
                      className='mr-[8px]'
                      width={24}
                      height={24}
                    />
                    Todo</a></li>
                  <li style={AllNotesMenu}><a href="#!" className={NaviBarOption}>
                    <Image
                      src='/img/cloud-off.png'
                      alt='unsynced-img'
                      className='mr-[8px]'
                      width={24}
                      height={24}
                    />
                    Unsynced</a></li>
                </ul>
              </li>
              <li>
                <ul className='flex justify-center flex-col relative'>
                  <li className='flex items-center'>
                    <button onClick={NoteBooksToggle} >
                      <Image
                        src={isNoteBooks ? '/img/chevron-right.png' : '/img/chevron-right.png'}
                        className={`${isNoteBooks ? 'rotate-90' : ''}`}
                        alt='arrow-right-img'
                        width={16}
                        height={16}
                      />
                    </button>
                    <a href="#!" className='flex w-full items-center hover:bg-gray-100'>NOTEBOOKS</a>
                    {/* 메모 추가 버튼 */}
                    <button id='add-note' className='flex items-center'>
                      <Image
                        src="/img/plus.png"
                        alt='plus-icon'
                        className='absolute top-0 right-0 '
                        width={24}
                        height={24}
                      />
                    </button>
                  </li>
                  {/* 내가 입력한 메모가 저장되야함 */}
                  <li style={NoteBooksMenu}><a href="#!" className={NaviBarOption}>Uncategorized</a></li>
                  <li style={NoteBooksMenu}><a href="#!" className={NaviBarOption}>Todo</a></li>
                  <li style={NoteBooksMenu}><a href="#!" className={NaviBarOption}>Unsynced</a></li>
                </ul>
              </li>
              <li>
                <ul className='flex justify-center flex-col'>
                  <li className='flex items-center'>
                    <a href="#!" className='flex w-full items-center hover:bg-gray-100'>
                      <button onClick={TagsToggle} >
                        <Image
                          src={isTags ? '/img/chevron-right.png' : '/img/chevron-right.png'}
                          className={`${isTags ? 'rotate-90' : ''}`}
                          alt='arrow-right-img'
                          width={16}
                          height={16}
                        />
                      </button>
                      TAGS
                    </a>
                  </li>
                  <li style={TagsMenu}>
                    <a href="#!" className={NaviBarOption}>UpNote</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#!">TEMPLATES</a>
              </li>
              <li>
                <a href="#!">TRASH</a>
              </li>
            </ul>
          </nav>
        </aside>
        {/* <aside className='flex w-[14%] h-[100vh] bg-red-500'>
          <nav className='flex'>
            <ul>
              <li>
                <ul className='w-full flex justify-center flex-col' >
                  <li className='flex items-center'>
                    <button onClick={AllNotesToggle} >
                      <Image
                        src={isAllNotesVisible ? '/img/chevron-right.png' : '/img/chevron-right.png'}
                        className={`${isAllNotesVisible ? 'rotate-90' : ''}`}
                        alt='arrow-right-img'
                        width={16}
                        height={16}
                      />
                    </button>
                    <a href="#!">All Notes</a>
                  </li>
                  <li style={AllNotesMenu} className={NaviBarOption}><a href="#!">Uncategorized</a></li>
                  <li style={AllNotesMenu} className={NaviBarOption}><a href="#!">Todo</a></li>
                  <li style={AllNotesMenu} className={NaviBarOption}><a href="#!">Unsynced</a></li>
                </ul>
              </li>
              <li>
                <ul className='flex justify-center flex-col'>
                  <li className='flex items-center'>
                    <button onClick={NoteBooksToggle} >
                      <Image
                        src={isNoteBooks ? '/img/chevron-right.png' : '/img/chevron-right.png'}
                        className={`${isNoteBooks ? 'rotate-90' : ''}`}
                        alt='arrow-right-icon'
                        width={16}
                        height={16}
                      />
                    </button>
                    <a href="#!">NOTEBOOKS</a>
                    <button id='add-note'>
                      <Image
                        src="/img/plus.png"
                        alt='plus-icon'
                        width={16}
                        height={16}
                      />
                    </button>
                  </li>
                    내가 입력한 메모가 저장되야함
                  <li style={NoteBooksMenu} className={NaviBarOption}><a href="#!">Uncategorized</a></li>
                  <li style={NoteBooksMenu} className={NaviBarOption}><a href="#!">Todo</a></li>
                  <li style={NoteBooksMenu} className={NaviBarOption}><a href="#!">Unsynced</a></li>
                </ul>
              </li>
              <li>
                <ul className='flex justify-center flex-col'>
                  <li className='flex items-center'>
                    <button onClick={TagsToggle} >
                      <Image
                        src={isTags ? '/img/chevron-right.png' : '/img/chevron-right.png'}
                        className={`${isTags ? 'rotate-90' : ''}`}
                        alt='arrow-right-img'
                        width={16}
                        height={16}
                      />
                    </button>
                    <a href="#!">TAGS</a>
                  </li>
                  <li style={TagsMenu} className={NaviBarOption}>
                    <a href="#!">UpNote</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#!">TEMPLATES</a>
              </li>
              <li>
                <a href="#!">TRASH</a>
              </li>
            </ul>
          </nav>
        </aside> */}
      </section >
    </div >
  );
}
