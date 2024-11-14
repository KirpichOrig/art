import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Start: React.FC = () => {
    return (
        <div className="relative w-screen h-screen">
            {/* Главная гиф/видео */}
            {/* <Image className="absolute z-10 inset-0 w-full h-full object-cover bg-transparent"
                src="/images/start/firstversion.mp4"
                width={629}
                height={548}
                alt=""
            /> */}
            <video className="absolute z-10 inset-0 w-full h-full object-cover bg-transparent"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/images/start/firstversion.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
            </video>
            {/* Затемнение */}
            <div className='absolute z-20 w-full h-full bg-black opacity-[0.35]'></div>
            {/* Две гиф/видео с рамкой */}
            <div className='absolute z-30 w-full h-full bg-transparent'>
                {/* <Image className="absolute top-[90px] right-[120px]"
                src="/images/start/firstversion.gif"
                width={380}
                height={214}
                alt=""
            />
            <Image className="absolute top-[104px] right-[106px]"
                src="/images/start/firstversion.gif"
                width={380}
                height={214}
                alt=""
            /> */}
                <video className="absolute top-[90px] right-[120px] h-[214px] w-[380px]"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/images/start/firstversion.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>
                <video className="absolute top-[104px] right-[106px] h-[214px] w-[380px]"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/images/start/firstversion.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>
                {/* 3D/2D */}
                <div>
                    <p className='absolute z-20 top-[268px] right-[75px] bg-transparent text-white font-[700] text-[38px]'>3D ART</p>
                    <p className='absolute z-10 top-[270px] right-[70px] px-1 bg-bldck text-[#DD00FF] font-[700] text-[38px]'>3D ART</p>
                </div>
                <div>
                    <p className='absolute z-10 top-[318px] right-[55px] bg-transparent text-white font-[700] text-[38px]'>2D ART</p>
                    <p className='absolute top-[320px] right-[50px] px-1 bg-transparent text-[#006FFF] font-[700] text-[38px]'>2D ART</p>
                </div>
                {/* Рамка */}
                <div className='absolute bg-transparent h-[214px] w-[380px] top-[80px] right-[130px] border border-solid border-white'></div>
            </div>
            {/* ART ART ART */}
            <Image className="absolute z-30 bottom-0 right-[50px]"
                src="/images/start/plug.jpg"
                width={410}
                height={0}
                alt=""
            />
            {/* title */}
            <div className='absolute z-30 w-full h-full bg-transparent'>
                <div>
                    <p className='absolute z-10 top-[22px] left-[72px] bg-transparent text-white font-[700] text-[38px]'>ART МУЗЕЙ-УНИВЕРСИТЕТ</p>
                    <p className='absolute top-[20px] left-[70px] bg-transparent text-[#FF0000] font-[700] text-[38px]'>ART МУЗЕЙ-УНИВЕРСИТЕТ</p>
                </div>
                <div>
                    <p className='absolute z-10 top-[67px] left-[88px] bg-transparent text-white font-[700] text-[38px]'>ДОРОГУ МОЛОДЫМ СПЕЦИАЛИСТАМ</p>
                    <p className='absolute top-[65px] left-[90px] bg-transparent text-[#00A53F] font-[700] text-[38px]'>ДОРОГУ МОЛОДЫМ СПЕЦИАЛИСТАМ</p>
                </div>
            </div>
            {/* Manuail art */}
            <div className='absolute z-30 w-full h-full bg-transparent'>
                <p className='absolute z-10 bottom-[62px] left-[72px] bg-transparent text-white font-[700] text-[38px]'>СОВРЕМЕННЫЙ АБСТРАКЦИОНИЗМ</p>
                <p className='absolute bottom-[60px] left-[70px] bg-transparent text-[#F6FF00] font-[700] text-[38px]'>СОВРЕМЕННЫЙ АБСТРАКЦИОНИЗМ</p>
            </div>
            {/* btn */}
            <Link className='absolute z-30 left-[140px] bottom-[170px] bg-transparent' href="/start">
                {/* <p className='px-8 py-2 border border-solid bg-transparent text-white text-[26px] font-[800] hover:bg-white hover:text-black border-white transition duration-300'>ART ART ART</p> */}
                <p className='px-8 py-2 border border-solid bg-transparent text-white text-[26px] font-[800] hover:opacity-[0.7] transition duration-300'>ART ART ART</p>
            </Link>
        </div>
    );
};

export default Start;