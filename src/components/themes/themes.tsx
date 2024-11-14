import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Themes: React.FC = () => {
  return (
    <div className='mt-[300px]'>
        <div id='themes' className='section flex justify-center'>
            {/* 3d */}
            <div className='relative h-full'>
                {/* <Image className='max-h-[680px] h-full'
                    src="/images/themes/3d.2.gif"
                    width={422}
                    height={680}
                    alt={''}
                /> */}
                <video className="max-w-[422px] w-full max-h-[680px] h-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source className='' src="/images/themes/3d.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>
                <div className='hover absolute top-0 opacity-0 max-h-[680px] h-full max-w-[422px] w-full bg-transparent flex items-center justify-center hover:opacity-100 transition-all duration-300'>
                    <div className='absolute top-0  max-h-[680px] h-full max-w-[422px] w-full opacity-[0.4]'></div>
                    <p className='z-10 text-[42px] font-[700] bg-transparent'>3D ART</p>
                </div>
            </div>
            {/* 2d */}
            <div className='relative'>
                <Image className='mt-10 max-h-[680px] h-full max-w-[422px] w-full'
                    src="/images/themes/2d.gif"
                    width={422}
                    height={680}
                    alt={''}
                />
                <div className='mt-10 absolute top-0 opacity-0 max-h-[680px] h-full max-w-[422px] w-full bg-transparent flex items-center justify-center hover:opacity-100 transition-all duration-300'>
                    <div className='absolute top-0 max-h-[680px] h-full max-w-[422px] w-full opacity-[0.4]'></div>
                    <p className='z-10 text-[42px] font-[700] bg-transparent'>2D ART</p>
                </div>
            </div>
            {/* art */}
            <div className='relative'>
                <Image className='mt-20 max-h-[680px] h-full max-w-[422px] w-full'
                    src="/images/themes/art.png"
                    width={422}
                    height={680}
                    alt={''}
                />
                <div className='mt-20 absolute top-0 opacity-0 max-h-[680px] h-full max-w-[422px] w-full bg-transparent flex items-center justify-center hover:opacity-100 transition-all duration-300'>
                    <div className='absolute top-0  max-h-[680px] h-full max-w-[422px] w-full    opacity-[0.4]'></div>
                    <p className='z-10 text-[42px] font-[700] bg-transparent'>MANUAL ART</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Themes;