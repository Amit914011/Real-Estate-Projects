import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { MdOutlineSettingsPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import axios from 'axios'

export default function ContactUs() {
    let [data,setData]=useState({
        name:'',
        email:'',
        number:'',
        subject:'',
        message:''
    })
    let {name,email,number,subject,message}=data
    function handleChange(e){
        setData({...data,[e.target.name]:e.target.value})

    }
    let [error,setError]=useState('')
    async function handleSubmit(e){
        e.preventDefault()
        if(data.name==''){
            setError('1px solid red')
        }else if(data.name.length<=3){
            alert('Please enter your name Grater then 3 Char')
            setError('')
        }
        else{
        await axios.post('http://localhost:3000/api/feedBackSave',data)
        e.preventDefault()
        }
    }
  return (
    <div>
      <div className="w-full h-auto">
        <div
          className="w-full h-[250px] relative"
          style={{
            backgroundImage:
              'URL("https://www.smindia.org/images/contact-title-bg.jpg")',
          }}
        >
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white text-2xl font-serif font-bold w-60 px-3 md:left-[25%] md:text-4xl md:w-96">
            <h1>Contact Us</h1>
          </div>
        </div>
        <div className="w-full h-auto py-14">
          <div className="w-[85%] m-auto md:flex">
            <div className="w-full md:w-[350px] me-9">
              <h1 className="text-5xl font-serif mb-3"> Contact Us</h1>
              <div className="w-full h-auto bg-gray-800">
                <div className="flex p-5 justify-start items-start">
                  <div className=" bg-black p-2 md:p-5 me-2 text-white text-2xl">
                    <FaPaperPlane />
                  </div>
                  <div className="text-white">
                    <p className="font-bold font-serif md:text-xl">
                      Head Office Address:
                    </p>
                    <p>MAUPAKAD, MAHARAJGANJ, 273303 (U.P.) INDIA</p>
                  </div>
                </div>
                <div className="flex p-5 justify-start items-start">
                  <div className=" bg-black md:p-5 p-2 me-2 text-white text-2xl">
                    <MdOutlineSettingsPhone />
                  </div>
                  <div className="text-white">
                    <p className="font-bold font-serif md:text-xl">
                      Phone Number:
                    </p>
                    <p>+91 9140112940</p>
                  </div>
                </div>
                <div className="flex p-5 justify-start items-start">
                  <div className=" bg-black md:p-5 p-2 me-2 text-white text-2xl">
                    <MdEmail />
                  </div>
                  <div className="text-white">
                    <p className="font-bold font-serif md:text-2xl">Email ID:</p>
                    <p>amitmrj914011@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[70%] mt-5 md:m-0">
              <h1 className="text-5xl font-serif mb-3">Feedback Form</h1>
              <div className="w-full bg-gray-200 p-5">
                <form action="" method="post" onSubmit={handleSubmit}>
                  <input
                    className=" w-full xl:w-[47%]   me-5 mb-5 h-14 ps-2 text-xl"
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    style={{border:`${error}`}}
                  />
                  <input
                    className="w-full xl:w-[47%] me-5 mb-5 h-14 ps-2 text-xl"
                    type="text"
                    placeholder="Phone No."
                    name="number"
                    value={number}
                    onChange={handleChange}
                    
                  />
                  <br />
                  <input
                    className="w-full xl:w-[47%] me-5 mb-5 h-14 ps-2 text-xl"
                    type="text"
                    placeholder="Email ID"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    
                  />
                  <input
                    className="w-full xl:w-[47%] me-5 mb-5 h-14 ps-2 text-xl"
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={subject}
                    onChange={handleChange}
                    
                  />
                  <textarea
                    className=" w-full xl:w-[97%] ps-2 h-28 mb-4"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    id=""
                    placeholder="Your Message "
                    
                  ></textarea>
                  <button type="submit" className="bg-green-600 px-8 py-2 text-2xl mt-5 text-white font-bold font-serif rounded hover:bg-green-800">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
