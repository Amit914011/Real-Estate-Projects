import React from 'react'
import {photoGallery} from '../../image/ImageGallery'
export default function PhotoGallery() {
  return (
    <div>
        <div className='w-full h-auto'>
            <div className='w-[90%] h-auto m-auto'>
                <div className='text-center text-[20px] font-bold font-serif my-5 md:text-4xl lg:text-6xl'>
                    <h1 >Photo Gallery of Our Company</h1>
                </div>
                <div className='w-full h-auto m-auto md:flex md:justify-center md:items-center lg:flex md:flex-wrap'>
                   {
                    photoGallery.map((data)=>(
                        <div className='w-[320px] h-[300px] my-5 lg:w-[300px] m-auto'>
                        <img className='w-full h-full'  src={data.image} alt="" />
                    </div>
                    ))
                   }
                    </div>
                </div>
            </div>
        </div>

  )
}
