import React from 'react'
import { IoTimeOutline } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { RiRecycleFill } from "react-icons/ri";

export default function Card() {
  return (
    <>
      <div className='w-full h-auto bg-gray-200 p-16 box-border flex gap-3 flex-col md:flex-row'>
            <div className='lg:w-1/3 h-[400px] md:w-1/2 sm:w-1/2 bg-blue-400  rounded-md flex justify-center items-center px-11 text-center relative'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-4xl bg-gray-500 p-7 rounded-full text-white'><IoTimeOutline /></p>
                    <p className='text-2xl font-serif font-bold'>VISION</p>
                    <p>The vision of our company is an actionable, purpose-led ideal that has a real and significant bearing on our deliveries.</p>
                </div>
            </div>
            <div className='lg:w-1/3 h-[400px] md:w-1/2 sm:w-1/2 bg-orange-400  rounded-md flex justify-center items-center px-11 text-center relative'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-4xl bg-gray-500 p-7 rounded-full text-white'><FaUserGraduate /></p>
                    <p className='text-2xl font-serif font-bold'>MISSION</p>
                    <p>Our approach to work and all interactions with customers, vendors, partners, colleagues and society at large is defined and enriched by our mission.</p>
                </div>
            </div>
            <div className='lg:w-1/3 h-[400px] md:w-1/2 sm:w-1/2 bg-green-400  rounded-md flex justify-center items-center px-11 text-center relative'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-4xl bg-gray-500 p-7 rounded-full text-white'><RiRecycleFill /></p>
                    <p className='text-2xl font-serif font-bold'>QUALITY</p>
                    <p>Focus on achieving the best results by following set processes and constantly improving upon them.</p>
                </div>
            </div>

      </div>
    </>
  )
}
