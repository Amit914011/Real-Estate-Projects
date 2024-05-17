import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {imageGallery} from '../../image/ImageGallery'

export default function GallerImage() {
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
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
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
      <div className='w-full h-screen py-28 bg-white'>
    <div>
    <h1 className='text-center text-2xl font-serif font-bold md:text-5xl'>Gallery <span className='text-orange-500 '>Images</span></h1>
    </div>
    <div className="w-[90%] m-auto mt-5">
    <div className="slider-container">
      <Slider {...settings}>
     {
      imageGallery.map((item)=>(
        <div className="">
          <img src={`${item.imgLink}`} alt="" className="px-2"/>
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
