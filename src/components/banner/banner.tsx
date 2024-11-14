"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Banner: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleColor, setVisibleColor] = useState<'white' | 'yellow' | 'blue' | 'all'>('all');

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setVisibleColor('white');
      setTimeout(() => setVisibleColor('yellow'), 100);
      setTimeout(() => setVisibleColor('blue'), 200);
      setTimeout(() => {
        setVisibleColor('all');
        setIsAnimating(false);
      }, 300);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner mt-[160px]">
      <div className="relative banner-content h-[686px] section">
        <div className="relative z-10 flex justify-between">
          <div className="absolute">
            <Image src="/images/banner/1.png" width={340} height={680} alt={''} />
            <div className="flex absolute border-solid border-[1px] border-white h-[680px] w-[340px] bg-transparent top-[6px] left-[6px]"></div>
          </div>
          <div className="absolute bg-transparent top-[260px] left-[220px]">
            <Image src="/images/banner/2.png" width={320} height={400} alt={''} />
            <div className="flex absolute border-solid border-[1px] border-white h-[400px] w-[320px] bg-transparent top-[6px] right-[6px]"></div>
          </div>
          <div className="absolute bg-transparent top-[90px] right-[200px]">
            <Image src="/images/banner/3.png" width={400} height={500} alt={''} />
            <div className="flex absolute border-solid border-[1px] border-white h-[500px] w-[400px] bg-transparent top-[6px] right-[6px]"></div>
          </div>
          <div className="absolute bg-transparent top-[0px] right-[0px]">
            <Image src="/images/banner/4.png" width={430} height={530} alt={''} />
            <div className="flex absolute border-solid border-[1px] border-white h-[530px] w-[430px] bg-transparent top-[6px] left-[6px]"></div>
          </div>
        </div>
        <div className="h-full z-20 w-full flex relative bg-transparent justify-center items-center">
          <p className={`text-center font-bold text-[42px] z-10 absolute bg-transparent ${visibleColor === 'white' || visibleColor === 'all' ? '' : 'hidden'}`}>
            ИСКУССТВО — ЭТО ЯЗЫК, КОТОРЫЙ ГОВОРИТ ТАМ, ГДЕ <br /> СЛОВА БЕССИЛЬНЫ
          </p>
          <p className={`flex mb-[8px] ml-[8px] text-[#FFC300] absolute text-center font-bold text-[42px] bg-transparent ${visibleColor === 'yellow' || visibleColor === 'all' ? '' : 'hidden'}`}>
            ИСКУССТВО — ЭТО ЯЗЫК, КОТОРЫЙ ГОВОРИТ ТАМ, ГДЕ <br /> СЛОВА БЕССИЛЬНЫ
          </p>
          <p className={`text-center mt-[8px] ml-[10px] text-[#00E6FF] font-bold text-[42px] absolute bg-transparent ${visibleColor === 'blue' || visibleColor === 'all' ? '' : 'hidden'}`}>
            ИСКУССТВО — ЭТО ЯЗЫК, КОТОРЫЙ ГОВОРИТ ТАМ, ГДЕ <br /> СЛОВА БЕССИЛЬНЫ
          </p>
        </div>
        <Image className='absolute left-[200px] bottom-[-80px] bg-transparent'
            src="/images/banner/gray.png"
            width={629}
            height={548}
            alt={''}
        />
        <Image className='absolute right-[0px] rotate-180 bottom-[-65px] bg-transparent'
            src="/images/banner/pink.png"
            width={422}
            height={680}
            alt={''}
        />
      </div>
    </div>
  );
};

export default Banner;
