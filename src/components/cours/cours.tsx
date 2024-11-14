"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Cours = () => {
  // Состояние для управления видимостью текста в 3D блоке
  const [show3DText, setShow3DText] = useState(false);
  // Состояние для управления видимостью текста в 2D блоке
  const [show2DText, setShow2DText] = useState(false);

  const toggleText3D = () => {
    setShow3DText(!show3DText); // меняем состояние для 3D блока
  }

  const toggleText2D = () => {
    setShow2DText(!show2DText); // меняем состояние для 2D блока
  }

  return (
    <div id='cours' className='max-w-[1400px] mt-300px mr-[auto] mb-0 ml-[auto]'>
      <div  className='flex mt-[300px] justify-between items-center relative'>
        {/* 2d */}
        <div className='relative max-h-[694.34px] max-w-[460px] w-full h-full'>
          <Image
            className='z-10 relative'
            src="/images/cours/2d.png"
            width={460}
            height={800}
            alt={''}
          />
          {/* Кнопка */}
          <div className='absolute z-20 top-0 bg-transparent max-h-[694.34px] max-w-[460px] w-full h-full flex justify-center items-end pb-14'>
            <button
              className='text-white text-[24px] font-[600] bg-black h-[50px] px-7 rounded-[10px]'
              onClick={toggleText2D} // Обработчик клика
            >
              {show2DText ? 'закрыть описание' : 'описание курса ->'}
            </button>
          </div>
          {/* Текст */}
          <div className={`absolute z-20 w-full h-full top-0 flex flex-col justify-between px-4 py-8 bg-transparent ${show3DText ? 'block' : 'hidden'}`}>
            <div className='bg-transparent z-30'>
              <p className='bg-transparent text-[38px] font-[800]'>3D/2D<br />ART DESIGN</p>
            </div>
            <div className='bg-transparent z-30'>
              <p className='bg-transparent text-[20px]'>Овладейте основами 3D-дизайна! На курсе вы научитесь создавать трёхмерные модели и сцены, развивая навыки визуализации и работы с пространством под руководством профессионалов.</p>
              <p className='bg-transparent text-[18px] font-[200]'>Более подробная информация, по <br/> телефону 8 (800) 555 35-35</p>
            </div>
            <div className='bg-transparent z-30 '>
              <p className='bg-transparent text-[24px] font-[500]'>82.000р/6 мес.</p>
              <Link href="/order">
                <p className='bg-transparent uppercase text-[26px] font-[700]'>записаться на курс</p>
              </Link>
            </div>
            {/* Затемнение */}
            <div className='z-20 w-full h-full absolute top-0 left-0 bg-black opacity-[0.7]'></div>
            {/* Картинка, что бы скрыть кнопку */}
            <Image
              className='z-10 absolute top-0 left-0 rounded-[20px]'
              src="/images/cours/2d.png"
              width={460}
              height={800}
              alt={''}
            />
          </div>
        </div>
        {/* Текст посередине */}
        <Image
          className=''
          src="/images/cours/text.png"
          width={72}
          height={543}
          alt={''}
        />

        {/* 3d */}
        <div className='relative max-h-[694.34px] max-w-[460px] w-full h-full'>
          <Image
            className='z-10 relative rounded-[20px]'
            src="/images/cours/3d.1.gif"
            width={460}
            height={800}
            alt={''}
          />
          {/* Кнопка */}
          <div className='absolute z-20 top-0 bg-transparent max-h-[694.34px] max-w-[460px] w-full h-full flex justify-center items-end pb-14'>
            <button
              className='text-white text-[24px] font-[600] bg-black h-[50px] px-7 rounded-[10px]'
              onClick={toggleText3D} // Обработчик клика
            >
              {show3DText ? 'закрыть описание' : '<- описание курса'}
            </button>
          </div>
          {/* Текст */}
          <div className={`absolute text-right bg-transparent z-20 w-full h-full top-0 flex flex-col justify-between px-4 py-8 ${show2DText ? 'block' : 'hidden'}`}>
            <div className='bg-transparent z-30'>
              <p className='bg-transparent text-[38px] font-[800]'>СОВРЕМЕННЫЙ АБСТРАКЦИОНИЗМ</p>
              <p className='mt-[-10px] bg-transparent font-[200] text-[20px]'>с небольшим уклоном в другие стили</p>
            </div>
            <div className='bg-transparent z-30'>
              <p className='bg-transparent text-[20px]'>Изучите основы абстрактного искусства! На курсе вы научитесь выражать эмоции через формы и цвета, создавая уникальные работы под руководством профессионалов.</p>
              <p className='bg-transparent text-[18px] font-[200]'>Более подробная информация, по <br/> телефону 8 (800) 555 35-35</p>
            </div>
            <div className='bg-transparent z-30'>
              <p className='bg-transparent text-[24px] font-[500]'>46.000р/4 мес.</p>
              <Link href="/order">
                <p className='bg-transparent uppercase text-[26px] font-[700]'>записаться на курс</p>
              </Link>
            </div>
            {/* Затемнение */}
            <div className='z-20 w-full h-full absolute top-0 left-0 bg-black opacity-[0.7]'>
            </div>
            {/* Картинка, что бы скрыть кнопку */}
            <Image
              className='z-10 absolute top-0 left-0 rounded-[20px]'
              src="/images/cours/3d.1.gif"
              width={460}
              height={800}
              alt={''}
            />
          </div>
        </div>

        {/* Orange */}
        <Image
          className='absolute top-[-500px] right-[-130px] max-h-[731px] max-w-[720px] bg-transparent'
          src="/images/cours/orange.png"
          width={851}
          height={864}
          alt={''}
        />
        {/* Purple */}
        <Image
          className='absolute top-[400px] left-[280px] max-h-[258px] max-w-[260px] bg-transparent'
          src="/images/cours/purple.png"
          width={851}
          height={864}
          alt={''}
        />
      </div>
    </div>
  )
}

export default Cours
