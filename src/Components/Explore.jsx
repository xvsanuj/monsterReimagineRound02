import React from 'react';

const Explore = () => {
  return (
    <div className='h-fit relative w-full'>
      <div className='lg:h-[60vh] relative w-full'>
        <img className='lg:h-[60vh] w-full object-cover object-center' src="https://miro.medium.com/v2/resize:fit:635/1*lJ9Om24np8cEw3SOgk2EMg.png" alt="Explore Xiaomi" />
        <div className='absolute top-0 left-0 h-[60vh] w-full bg-zinc-900 bg-opacity-85'></div>
        <div className='absolute bottom-8 left-4 sm:bottom-24 sm:left-32 flex flex-col gap-2 sm:gap-4 rounded-md px-2 bg-transparent'>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter bg-transparent">Explore Xiaomi</h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold bg-transparent">India's No.1 Smartphone Brand</p>
        </div>
      </div>
    </div>
  )
}

export default Explore;
