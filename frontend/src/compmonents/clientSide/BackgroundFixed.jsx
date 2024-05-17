import React from 'react'

export default function BackgroundFixed() {
  return (
    <div className='w-full'>
      <div className='w-full bg-contain md:bg-cover bg-no-repeat' style={{backgroundImage:`URL('https://www.smindia.org/images/bg-image.jpg')`, backgroundAttachment:'fixed'}}>
      <div className='px-5 py-10 md:p-16 w-[70%] m-auto'>
        <h1 className='text-white text-center text-2xl md:text-5xl font-serif'>Discover a Limitless World</h1>
        <p className='text-center text-white md:text-xl'>To empower the community, restore their self-confidence and promote a healthy living environment with people having respect for each other</p>
      </div>
      </div>
    </div>
  )
}
