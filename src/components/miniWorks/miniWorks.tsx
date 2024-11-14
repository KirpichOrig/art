import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const miniWorks = () => {
  return (
    <div className='mt-[300px]'>
      <div className='section flex flex-col items-center gap-10 '>
        {/* title */}
        <div id='miniWorks' className='flex flex-col items-center'>
          <div className='relative'>
            <p className='z-20 relative bg-transparent text-[56px] font-[600]'>Чему учатся наши ученики</p>
            <div className='z-10 absolute top-[50%] w-[100%] h-[3px] bg-[#40F100]'></div>
          </div>
          <p className='text-[20px] font-[600] opacity-[0.4]'>если хочешь также, записывайся на курсы!</p>
        </div>
        {/* images */}
        <div className='flex justify-between w-[100%] gap-[14px] z-30 bg-transparent'>
          <div className='flex flex-col gap-[14px] bg-transparent'>
            <Image className='rounded-[20px]'
                src="/images/miniWorks/2.png"
                width={300}
                height={334}
                alt={''}
            />
            <Image className='rounded-[20px]'
                src="/images/miniWorks/7.gif"
                width={300}
                height={349}
                alt={''}
            />
          </div>
          <div className='flex flex-col gap-[14px] bg-transparent'>
            <Image className='rounded-[20px] h-[420px]'
                src="/images/miniWorks/1.gif"
                width={300}
                height={420}
                alt={''}
            />
            <Image className='rounded-[20px]'
                src="/images/miniWorks/6.png"
                width={300}
                height={287}
                alt={''}
            />
          </div>
          <div className='flex flex-col gap-[14px] bg-transparent'>
            <Image className='rounded-[20px] h-[207px]'
                src="/images/miniWorks/3.gif"
                width={300}
                height={334}
                alt={''}
            />
            <Image className='rounded-[20px]'
                src="/images/miniWorks/8.gif"
                width={300}
                height={349}
                alt={''}
            />
          </div>
          <div className='flex flex-col gap-[14px] bg-transparent'>
            <Image className='rounded-[20px]'
                src="/images/miniWorks/4.gif"
                width={300}
                height={334}
                alt={''}
            />
            <Image className='rounded-[20px]'
                src="/images/miniWorks/9.png"
                width={300}
                height={349}
                alt={''}
            />
          </div>
          <div className='flex flex-col gap-[14px] bg-transparent'>
            <Image className='rounded-[20px]'
                src="/images/miniWorks/5.gif"
                width={300}
                height={334}
                alt={''}
            />
            <Image className='rounded-[20px]'
                src="/images/miniWorks/10.png"
                width={300}
                height={302}
                alt={''}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default miniWorks