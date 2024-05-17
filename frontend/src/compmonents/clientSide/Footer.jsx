import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { TbPhoneCalling } from "react-icons/tb";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div>
      <div className='w-full h-auto bg-black'>
       <div className='w-full h-auto bg-indigo-950 py-14'>
       <div className='md:w-[90%] h-full m-auto pt-5 md:flex md:gap-6 md:justify-start md:items-start'>
            <div className='md:w-1/3 text-white w-80 m-auto mb-5 md:m-0'>
                <h1 className='text-2xl font-mono font-bold text-white'>About Us</h1>
                <p >Every deal is important and every happy customer is our earning. We, real estate company, sincerely keep raising bars for ourselves and benchmark to international standards. </p><p className='hover:text-orange-600 font-bold'>READ MORE <FaLongArrowAltRight className='inline-block ' /></p>
            </div>
            <div className='md:w-1/3 text-white w-80 m-auto mb-5 md:m-0'>
                <h1 className='text-2xl font-mono font-bold text-white'>Usefull Links</h1>
                <p className='hover:text-yellow-600' ><IoMdArrowDropright className='inline' /> About Company </p>
                <p className='hover:text-yellow-600'><IoMdArrowDropright className='inline' /> Legal Documents</p>
                <p className='hover:text-yellow-600'><IoMdArrowDropright className='inline' /> Photo Gallery</p>
                <p className='hover:text-yellow-600'><IoMdArrowDropright className='inline' /> Privacy Policy</p>
                <p className='hover:text-yellow-600'><IoMdArrowDropright className='inline' /> Terms & Conditions</p>
            </div>
            <div className='md:w-1/3 text-white w-80 m-auto mb-5 md:m-0'>
                <h1 className='text-2xl font-mono font-bold text-white'>Get In Touch</h1>
                <p ><PiPaperPlaneTiltFill className='inline' />  H.O. ADDRESS : MAUPAKAD, MAHARAJGANJ, 273303 (U.P.) INDIAndards. </p>
                <p><TbPhoneCalling className='inline' /> Phone: +91-9140112940</p>
                <p><MdEmail  className='inline'/> Email: info@smindia.org</p>
            </div>
        </div>
       </div>
       <p className='text-center text-white py-3'>Copyrights © 2024 All Rights Reserved by S Infra City Developers Pvt. Ltd.</p>
      </div>
    </div>
  )
}
