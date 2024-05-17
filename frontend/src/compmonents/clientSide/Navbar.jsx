import React, { useState } from "react";
import { MdAddIcCall } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
export default function Navbar() {
  let [show, setShow] = useState("hidden");
  let [menu, setMenu] = useState("");
  return (
    <div>
      <header className="w-full lg:h-10 bg-orange-700 text-center lg:text-left">
        <div className="md:w-[500px]  bg-black h-10 absolute skew-x-[145deg] -left-5 hidden lg:block"></div>
        <div className="z-50 text-white top-2 left-20 lg:absolute font-semiboldbold ">
          <h1>Doing good for others is not a duty..</h1>
        </div>
        <div className=" lg:h-10 lg:text-right lg:flex z-10 lg:justify-end lg:items-center justify-center flex-wrap items-center flex h-auto text-white lg:gap-10 pr-24 ">
          <p className="flex items-center h-10 border-r-2 pr-3 mr-3 cursor-pointer m-0 p-0">
            <MdAddIcCall />
            &nbsp; +91 9140112940
          </p>
          <p className="flex items-center  h-10 border-r-2 pr-3 cursor-pointer m-0 p-0">
            <MdOutlineMail /> &nbsp;&nbsp;amitmrj914011@gmail.com
          </p>
        </div>
      </header>
      <nav className="w-full h-20 md:bg-indigo-800 lg:flex lg:justify-evenly lg:items-center bg-white relative z-50">
        <div className="text-2xl h-20  text-white font-bold">
          <img
            className="w-60 pt-2"
            src="https://www.smindia.org/images/logo.png"
            alt=""
          />
        </div>
        <div>
          <ul
            className={` menu lg:flex lg:text-gray-400 uppercase leading-8 lg:leading-[80px]  bg-black lg:bg-transparent text-white py-3 cursor-pointer ${
              show ? "hidden" : "block"
            } `}
          >
            <Link
              to=''
              className="px-5 lg:hover:text-orange-700 border-white border-b-2 block lg:border-0"
            >
              Home
            </Link>
            <Link className="link px-5 relative lg:hover:text-orange-700  border-white border-b-2 block lg:border-0">
              About Us{" "}
              <IoMdArrowDropdown
                onClick={() => setMenu(!menu)}
                className="absolute top-0 right-5 text-3xl border-white border-l-2 lg:hidden lg:border-0"
              />
              <ul className="submenu  lg:block" id={`${menu ? "show" : ""}`}>
                <Link to='/companyProfile' className="lg:text-gray-400 link">Company Profile</Link>
                <Link to="/legalDocument" className="lg:text-gray-400 link">Legal Documents</Link>
                <li className="lg:text-gray-400 link">Group of Companies</li>
              </ul>
            </Link>
            <li className="px-5 lg:hover:text-orange-700 border-white border-b-2 block lg:border-0">
              Our Services
            </li>
            <Link to='/photoGallery' className="px-5 lg:hover:text-orange-700 border-white border-b-2 block lg:border-0">
              Photo Gallery
            </Link>
            <Link to="/contactUs" className="px-5 lg:hover:text-orange-700 border-white border-b-2 block lg:border-0">
              Contact Us
            </Link>
            <button className="px-5 lg:hover:text-orange-700  lg:hidden bg-green-600 inline-block ms-3 mt-2 rounded-md py-1 font-bold cursor-pointer hover:bg-green-700">
              Login
            </button>
          </ul>
        </div>
        <div
          className="lg:hidden absolute top-8 right-10 text-3xl md:text-white cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <TiThMenu />
        </div>
        <div>
          <h1 className="hidden lg:block bg-yellow-500 px-5 py-2 hover:bg-yellow-600 cursor-pointer text-white font-bold text-xl rounded">
            Login
          </h1>
        </div>
      </nav>
    </div>
  );
}
