"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/header/header';
import './style.css';

const Order = () => {
  // Состояние для отслеживания выбора
  const [isSelected2d, setIsSelected2d] = useState(false);
  const [isSelected3d, setIsSelected3d] = useState(false);

  // Функции для обработки кликов на изображения
  const handleSelect2d = () => {
    setIsSelected2d(true);
    setIsSelected3d(false); // Скрываем рамку для 3D
  };

  const handleSelect3d = () => {
    setIsSelected2d(false); // Скрываем рамку для 2D
    setIsSelected3d(true);
  };

  return (
    <div className='max-w-[1160px] mt-0 ml-auto mb-0 mr-auto'>
      <Header />
      <div className='mt-[100px] flex justify-between px-[20px]'>
        {/* images */}
        <div className='flex flex-col gap-10'>
          <div className='max-h-[806px] max-w-[530px] w-full h-full'>
            <div className='w-full h-full relative'>
              <Image
                className=''
                src="/images/order/2d.png"
                width={530}
                height={806}
                alt={''}
                onClick={handleSelect2d} // Обработчик для 2D изображения
              />
              {isSelected2d && (
                <div className='absolute w-full h-full top-0 left-0 ram z-10'></div>
              )}
              {isSelected2d && (
                <div className='absolute z-20 top-5 right-6 h-[35px] w-[35px] bg-[#0048FF] rounded-[100px] flex justify-center items-center'>
                  <Image
                    className=''
                    src="/images/order/done.png"
                    width={23}
                    height={23}
                    alt={''}
                  />
                </div>
              )}
            </div>
          </div>
          <div className='max-h-[806px] max-w-[530px] w-full h-full'>
            <div className='w-full h-full relative'>
              <Image
                className='rounded-[20px]'
                src="/images/order/3d.gif"
                width={530}
                height={806}
                alt={''}
                onClick={handleSelect3d} // Обработчик для 3D изображения
              />
              {isSelected3d && (
                <div className='absolute w-full h-full top-0 left-0 ram z-10'></div>
              )}
              {isSelected3d && (
                <div className='absolute z-20 top-5 right-6 h-[35px] w-[35px] bg-[#0048FF] rounded-[100px] flex justify-center items-center'>
                  <Image
                    className=''
                    src="/images/order/done.png"
                    width={23}
                    height={23}
                    alt={''}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* text */}
        <div className='max-w-[530px] w-full h-full sticky top-[20px] flex flex-col gap-[20px]'>
          <div className='bg-[#252525] w-full rounded-[20px] px-[25px] py-[18px]'>
            <p className='text-[24px]'>Описание:</p>
            <p className='text-[20px] font-[400]'>Современный абстракционизм – это искусство, выражающее идеи и эмоции через формы, цвета и текстуры, без привязки к конкретным объектам. Он фокусируется на личных интерпретациях зрителя, позволяя каждому видеть что-то своё.</p>
          </div>
          <div className='bg-[#252525] w-full rounded-[20px] px-[25px] py-[18px]'>
            <div className='flex gap-[12px]'>
              <p className='text-[20px]'>Наименование:</p>
              <p className='text-[20px] font-[400]'>сов. абстракционизм</p>
            </div>
            <div className='flex gap-[12px]'>
              <p className='text-[20px]'>Прод.обучения:</p>
              <p className='text-[20px] font-[400]'>6 месяцев</p>
            </div>
            <div className='flex gap-[12px]'>
              <p className='text-[20px]'>Стоимость:</p>
              <p className='text-[20px] font-[400]'>46.000р</p>
            </div>
            <div className='line mt-1 mb-3'></div>
            <form action="" className='bg-black pl-4 flex rounded-[10px]'>
              <input type="text" className='py-2 pr-4 w-full bg-black focus:outline-none text-white' placeholder='Промокод'/>
              <button className='bg-white rounded-[10px] px-2 text-[14px]'>Применить</button>
            </form>
            <button className='bg-white w-full mt-3 rounded-[10px] py-2'>Подтвердить</button>
          </div>
          {/* <div className='bg-[#252525] w-full rounded-[20px] px-[25px] py-[10px]'>
            <Link href="/start" className=''>
              <p className='font-[400] h-full w-full'>Вернуться назад</p>
            </Link>
          </div> */}
            <Link href="/start" className='bg-[#252525] w-full rounded-[20px] px-[25px] py-[10px]'>
              <p className='font-[400] h-full w-full'>Вернуться назад</p>
            </Link>
        </div>
      </div>
      <div className='flex justify-between gap-4 mt-[100px]'>
        <p className='text-[36px] font-[700]'>ART</p>
        <p className='text-[36px] font-[700]'>ART</p>
        <p className='text-[36px] font-[700]'>ART</p>
        <p className='text-[36px] font-[700]'>ART</p>
        <p className='text-[36px] font-[700]'>ART</p>
        <p className='text-[36px] font-[700]'>ART</p>
        <p className='text-[36px] font-[700]'>ART</p>
        <p className='text-[36px] font-[700]'>ART</p>
        <p className='text-[36px] font-[700]'>ART</p>
      </div>
    </div>
  );
};

export default Order;
