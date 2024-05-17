import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {imageGallery,testimoniyal} from '../../image/ImageGallery'

export default function GallerImage2() {
    // console.log(testimoniyal)
    // var settings = {
    //   infinite: true,
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 3000,
    //   pauseOnHover: true
    // };
    var settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      pauseOnHover: true,
      cssEase: "ease-out",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
   
  return (
    <div>
      <div className='w-full h-screen pt-2 bg-gray-300'>
    <div>
    <h1 className='text-center text-2xl font-serif font-bold md:text-5xl'>Our  <span className='text-orange-500 '>Achievers</span></h1>
    </div>
    <div className="w-[90%] m-auto mt-5">
    <div className="slider-container">
      <Slider {...settings}>
     {
      testimoniyal.map((item)=>(
        <div className="cursor-pointer text-center">
          <img src={`${item.imgLink}`} alt="" className="px-2 lg:h-[330px] w-full h-[300px]"/>
          <div className="mt-3 border px-5 bg-indigo-950 text-white h-32">
          <h1 className="text-center font-serif text-yellow-600 font-bold text-xl uppercase">{item.name}</h1>
          <p className="font-serif">ID :- <span>{item.id}</span></p>
          <p className="font-serif">Mobile No :- <span>{item.mobileNo}</span></p>
          <p className="font-serif">Email Id :- <span>{item.emailid}</span></p>
          </div>
        </div>
      ))
    }
    </Slider>
    </div>
    </div>
      </div>
    </div>
  )
}
