"use client"

import React from 'react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import Link from 'next/link';
import './catalog.css';

const images = [
  { src: '/images/catalog/1.gif', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/2.jpg', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/1.gif', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/2.jpg', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/1.gif', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/2.jpg', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/1.gif', alt: 'Image 1', width: 300, height: 400 },
  { src: '/images/catalog/2.jpg', alt: 'Image 1', width: 300, height: 400 },
];

const Product = () => {
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
    </div>
  );
};

export default Product;

