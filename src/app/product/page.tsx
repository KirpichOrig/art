"use client"

import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import Link from 'next/link';
import './product.css';

const images = [
  { src: '/images/banner/1.png', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/2.jpg', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/1.gif', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/2.jpg', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/banner/2.png', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/2.jpg', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/1.gif', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/banner/4.png', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/banner/1.png', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/2.jpg', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/1.gif', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/2.jpg', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/banner/2.png', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/2.jpg', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/1.gif', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/banner/4.png', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/banner/1.png', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/2.jpg', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/1.gif', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/2.jpg', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/banner/2.png', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/2.jpg', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/1.gif', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/banner/4.png', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/banner/1.png', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/2.jpg', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/1.gif', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/2.jpg', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/banner/2.png', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/2.jpg', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/1.gif', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/banner/4.png', alt: 'Image 1', width: 300, height: 400 },
];

const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна
  const [fileName, setFileName] = useState(""); // Состояние для имени файла
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

  return (
    <div className="relative">
      {/* header */}
      <div className="absolute left-[72px]">
        <div className="fixed z-20 bg-black w-full h-[80px] flex items-center gap-[10px] pl-[10px] pr-[82px] sm:gap-[20px] sm:pl-[20px] sm:pr-[92px]">
          <div className="bg-[#1d1d1d] w-full rounded-[12px] flex items-center px-5 gap-1">
            <input
              type="text"
              placeholder="Поиск"
              className="bg-transparent w-full h-[48px] focus:outline-none text-white"
            />
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
          </div>
          <div className="h-[44x] w-[46px]">
            <Link
              href="/profile"
              className="bg-[#1d1d1d] flex items-center justify-center rounded-[1000px] text-black font-[600] text-[24px] h-[44px] w-[46px]"
            >
              D
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
          <Link href="/upload" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>
            <i className="fa-regular fa-square-plus text-[#474747] text-[26px]"></i>
          </Link>
          <Link href="/catalog">
            <i className="fa-regular fa-bell text-[#474747] text-[26px]"></i>
          </Link>
        </div>
      </div>
      {/* content */}
      <div className="absolute left-[92px] top-[80px] py-4">
        <div className='mr-[-15px] w-full flex flex-col items-center'>
          {/* карточка одного изображения */}
          <div className='pr-[10px] flex justify-center'>
            {/* img */}
            <div className='ram-img rounded-[10px]'>
              <div className='relative'>
                <Image src="/images/banner/2.png"
                  className="h-full w-auto object-contain rounded-t-[10px]"
                  style={{ maxHeight: '500px' }}
                  width={400}
                  height={1}
                  alt={''}
                />
                <div className='absolute top-0 left-0 flex px-2 py-2 flex-col gap-2'>
                  <p className='rounded-[5px] px-3 py-[1px] bg-[#0000003f] text-white text-[16px] w-fit'>
                    Lorem ipsum.
                  </p>
                  <p className='rounded-[5px] px-3 py-[1px] bg-[#0000003f] text-white text-[16px] w-fit'>
                    Категория
                  </p>
                </div>
              </div>
              <div className='py-3 px-3 flex flex-col'>
                {/* профиль/кнопка */}
                <div className='flex justify-between items-center gap-4'>
                  <Link href="" className='flex items-center gap-2'>
                    <div className="h-[26px] w-[28px]">
                      <div className="bg-[#1d1d1d] flex items-center justify-center rounded-[1000px] text-black font-[600] text-[16px] h-[26px] w-[28px]">
                        D
                      </div>
                    </div>
                    <p className='text-white text-[16px]'>Danil</p>
                  </Link>
                  <Link href="" className='text-white'>
                    Контакты
                  </Link>
                  {/* <Link href="" className='text-white text-[16px] bg-[#1d1d1d] rounded-[40px] px-4 py-2'>
                    Контакты
                  </Link> */}
                </div>
                {/* текст */}
              </div>
            </div>
          </div>
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid mt-[30px] px-4"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((image, index) => (
            <div key={index} className="rounded-[10px] overflow-hidden shadow-lg">
              <Link href="/product">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="rounded-[10px]"
                />
              </Link>
            </div>
          ))}
        </Masonry>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30"
          onClick={() => setIsModalOpen(false)} // Закрытие при клике вне модала
        >
          <div
            className="max-w-[1160px] flex flex-col mt-0 ml-auto mb-0 mr-auto min-h-screen"
            onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике внутри модального окна
          >
            <div className="flex-grow max-w-[400px] w-full mx-auto text-white flex justify-center items-center">
              <form className="bg-black border border-dashed relative px-6 py-4 rounded-[10px] max-w-[400px] w-full flex flex-col justify-center items-center gap-10">
                <p className="text-[20px] font-[600]">Добавление файла</p>
                <div className="flex flex-col gap-2 w-full">
                  <input
                    className="bg-transparent w-full raam px-2"
                    type="text"
                    name=""
                    placeholder="Название"
                  />
                  <select
                    className="w-full bg-transparent py-1 px-1 raam focus:outline-none"
                    name="category"
                  >
                    <option className="bg-[#1f1f1f] text-white" value="abstract">
                      Абстракционизм
                    </option>
                    <option className="bg-[#1f1f1f] text-white" value="3d">
                      3D ART
                    </option>
                    <option className="bg-[#1f1f1f] text-white" value="2d">
                      2D ART
                    </option>
                  </select>
                </div>
                <div
                  className="bg-[#1f1f1f] rounded-[5px] p-6 w-full text-center cursor-pointer"
                  onClick={() => document.getElementById('fileInput')?.click()}
                >
                  {fileName ? (
                    <p className="text-white font-[300] opacity-[0.7] text-[16px]">{fileName}</p>
                  ) : (
                    <p className="text-white font-[300] opacity-[0.7] text-[16px]">
                      Перетащите файл сюда или нажмите для выбора
                    </p>
                  )}
                  <input
                    id="fileInput"
                    type="file"
                    className="hidden"
                    onChange={(e) =>
                      setFileName(e.target.files ? e.target.files[0]?.name : '')
                    }
                  />
                </div>
                <button className="bg-[#ffffff] w-full rounded-[5px] py-2 text-[16px] font-[500] text-black">
                  Готово
                </button>
                <Link
                  className="absolute top-[8px] right-4 rounded-[10px]"
                  href="/start"
                >
                  <i className="fa-solid fa-xmark fa-lg"></i>
                </Link>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;