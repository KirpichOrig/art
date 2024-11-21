"use client";

import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import Link from 'next/link';
import './catalog.css';

const Product = () => {
  const [files, setFiles] = useState<any[]>([]); // Список всех файлов
  const [searchQuery, setSearchQuery] = useState(''); // Поисковый запрос
  const [filteredFiles, setFilteredFiles] = useState<any[]>([]); // Отфильтрованные файлы

  const breakpointColumnsObj = {
    default: 10,
    2730: 9,
    2420: 8,
    2180: 7,
    1860: 6,
    1600: 5,
    1100: 4,
    900: 3,
    768: 2,
    500: 1,
  };

  // Получаем файлы с сервера
  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch('http://site/src/api/files.php');
      const data = await response.json();
      setFiles(data); // Сохраняем файлы
      setFilteredFiles(data); // Устанавливаем первоначальный список для отображения
    };

    fetchFiles();
  }, []);

  // Обновляем список отфильтрованных файлов при изменении поискового запроса
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredFiles(files); // Если строка поиска пуста, отображаем все файлы
    } else {
      setFilteredFiles(
        files.filter((file) =>
          file.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, files]);

  return (
    <div className="relative">
      {/* header */}
      <div className="absolute left-[72px]">
        <div className="fixed z-20 bg-black w-full h-[80px] flex items-center gap-[10px] pl-[10px] pr-[82px] sm:gap-[20px] sm:pl-[20px] sm:pr-[92px]">
          <div className="bg-[#1d1d1d] w-full rounded-[12px] flex items-center px-5 gap-1">
            <input
              type="text"
              placeholder="Поиск"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Обновляем поисковый запрос
              className="bg-transparent w-full h-[48px] focus:outline-none text-white"
            />
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
          </div>
          <div className="h-[44px] w-[46px]">
            <Link
              href="/profile"
              className="bg-[#1d1d1d] flex items-center justify-center rounded-[1000px] text-black font-[600] text-[24px] h-[44px] w-[46px]"
            >
              A
            </Link>
          </div>
        </div>
      </div>

      {/* menu */}
      <div className="h-screen w-[72px] fixed ram">
        <div className="w-[72px] py-8 fixed flex flex-col items-center gap-16">
          <Link href="/start">
            <i className="fa-solid fa-house text-[#474747] text-[22px]"></i>
          </Link>
          <Link href="/upload">
            <i className="fa-regular fa-square-plus text-[#474747] text-[26px]"></i>
          </Link>
          <Link href="/catalog">
            <i className="fa-regular fa-bell text-[#474747] text-[26px]"></i>
          </Link>
        </div>
      </div>

      {/* content */}
      <div className="absolute left-[92px] top-[80px] px-4 py-4">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {filteredFiles.map((file) => (
            <div key={file.id} className="rounded-[10px] overflow-hidden shadow-lg">
              <Link href={`/card/${file.id}`}>
                <Image
                  src={`http://site/src/api/${file.file_path}`}
                  alt={file.name}
                  width={300}
                  height={400}
                  className="rounded-[10px]"
                />
              </Link>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Product;
