import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './catalog.css';

const Catalog = () => {
  return (
    <div className='relative'>
      {/* header */}
      <div className='absolute left-[72px]'>
        <div className='fixed z-20 bg-black w-full h-[80px] flex items-center gap-5 pl-[20px] pr-[92px]'>
          <div className='bg-[#1d1d1d] w-full rounded-[12px] flex items-center px-5'>
            <input
              type="text"
              placeholder='Поиск'
              className='bg-transparent w-full h-[48px] focus:outline-none text-white'
            />
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
          </div>
          <div className='h-[44x] w-[46px]'>
            <Link
              href="/profile"
              className='bg-[#1d1d1d] flex items-center justify-center rounded-[1000px] text-black font-[600] text-[24px] h-[44px] w-[46px]'
            >
              D
            </Link>
          </div>
        </div>
      </div>
      {/* menu */}
      <div className='h-screen w-[72px] fixed ram'>
        <div className='w-[72px] py-8 fixed flex flex-col items-center gap-16'>
          <Link href="/start">
            <i className="fa-solid fa-house text-[#474747] text-[22px]"></i>
          </Link>
          <Link href="/catalog">
            <i className="fa-regular fa-square-plus text-[#474747] text-[26px]"></i>
          </Link>
          <Link href="/catalog">
            <i className="fa-regular fa-bell text-[#474747] text-[26px]"></i>
          </Link>
        </div>
      </div>
      {/* content */}
      <div className='bg-transparent absolute w-full top-[80px] left-[72px] pl-5 pr-[92px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-auto'>
        
      </div>
    </div>
  );
};  

export default Catalog;
