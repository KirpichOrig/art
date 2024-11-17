import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Themes: React.FC = () => {
    return (
      <div className="mt-[300px]">
        <div id="themes" className="section flex justify-center">
          {/* 3d */}
          <div className="relative w-[422px] h-[680px]">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/images/themes/3d.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
            <div className="hover absolute top-0 opacity-0 w-full h-full bg-transparent flex items-center justify-center hover:opacity-100 transition-all duration-300">
              <div className="absolute top-0 w-full h-full bg-black opacity-40"></div>
              <p className="z-10 text-[42px] font-[700] bg-transparent">3D ART</p>
            </div>
          </div>
          {/* 2d */}
          <div className="relative w-[422px] h-[680px] mt-10">
            <Image
              className="w-full h-full object-cover"
              src="/images/themes/2d.gif"
              width={422}
              height={680}
              alt=""
            />
            <div className="absolute top-0 opacity-0 w-full h-full bg-transparent flex items-center justify-center hover:opacity-100 transition-all duration-300">
              <div className="absolute top-0 w-full h-full bg-black opacity-40"></div>
              <p className="z-10 text-[42px] font-[700] bg-transparent">2D ART</p>
            </div>
          </div>
          {/* art */}
          <div className="relative w-[422px] h-[680px] mt-20">
            <Image
              className="w-full h-full object-cover"
              src="/images/themes/art.png"
              width={422}
              height={680}
              alt=""
            />
            <div className="absolute top-0 opacity-0 w-full h-full bg-transparent flex items-center justify-center hover:opacity-100 transition-all duration-300">
              <div className="absolute top-0 w-full h-full bg-black opacity-40"></div>
              <p className="z-10 text-[42px] font-[700] bg-transparent">MANUAL ART</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Themes;
  