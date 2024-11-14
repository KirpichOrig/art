import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='section'>
        <div className='mt-[300px] flex justify-between items-center relative'>
          {/* Картинки */}
          <div className='flex items-center gap-10'>
            <Image className='max-h-[320px] max-w-[310.7px] h-full w-full'
              src="/images/footer/1w.png"
              width={422}
              height={680}
              alt={''}
            />
            <Image className='max-h-[190px] max-w-[187.18px] h-full w-full'
              src="/images/footer/2w.png"
              width={187}
              height={190}
              alt={''}
            />
          </div>
          <Image className='max-h-[91.3px] max-w-[140px] h-full w-full'
            src="/images/footer/5.5.png"
            width={422}
            height={680}
            alt={''}
          />
          <div className='flex items-center gap-10'>
            <Image className='max-h-[190px] max-w-[187.18px] h-full w-full'
              src="/images/footer/3w.png"
              width={187}
              height={190}
              alt={''}
            />
            <Image className='max-h-[320px] max-w-[310.7px] h-full w-full'
              src="/images/footer/4w.png"
              width={422}
              height={680}
              alt={''}
            />
          </div>
          {/* Пол */}
          <div className='absolute h-full w-full flex justify-center bg-transparent'>
            <Image className='h-[348.91px] max-w-[320px] w-full absolute bg-transparent bottom-[-60px] z-10'
              src="/images/footer/human.png"
              width={320}
              height={348.91}
              alt={''}
            />
            <Image className='max-h-[91.3px] max-w-[950px] h-full w-full absolute bg-transparent bottom-[-80px]'
              src="/images/footer/пол.png"
              width={950}
              height={680}
              alt={''}
            />
          </div>
        </div>
    </div>
  )
}

export default Footer