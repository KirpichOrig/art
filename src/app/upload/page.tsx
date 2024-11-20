"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import './upload.css';

const Upload = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <div className='max-w-[1160px] flex flex-col mt-0 ml-auto mb-0 mr-auto min-h-screen'>
      <div className='flex-grow max-w-[400px] w-full mx-auto text-white flex justify-center items-center'>
        <form className='relative border border-solid px-6 py-4 rounded-[10px] max-w-[400px] w-full flex flex-col justify-center items-center gap-8' action="">
          <p className='text-[20px] font-[600]'>Добавление файла</p>
          <div className='flex flex-col gap-2 w-full'>
            <input className='bg-transparent w-full ram px-2' type="text" name="" placeholder='Название' />
            <select
              className='w-full bg-transparent py-1 px-1 ram focus:outline-none'
              name="category"
            >
              <option className='bg-transparent' value="abstract">Абстракционизм</option>
              <option value="3d">3D</option>
              <option value="2d">2D</option>
            </select>
          </div>
          <div
            className="bg-[#1f1f1f] rounded-[5px] p-6 w-full text-center cursor-pointer"
            onClick={() => document.getElementById('fileInput')?.click()}
          >
            {fileName ? (
              <p className="text-white font-[300] opacity-[0.7] text-[16px]">{fileName}</p>
            ) : (
              <p className="text-white font-[300] opacity-[0.7] text-[16px]">Перетащите файл сюда или нажмите для выбора</p>
            )}
            <input
              id="fileInput"
              type="file"
              className="hidden"
              onChange={(e) => setFileName(e.target.files ? e.target.files[0]?.name : '')}
            />
          </div>
          <button className='bg-[#ffffff] w-full rounded-[5px] py-2 text-[16px] font-[500] text-black'>Готово</button>
          <Link className='absolute top-[8px] right-4 rounded-[10px]' href='/start'>
            <i className="fa-solid fa-xmark fa-lg"></i>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Upload;
