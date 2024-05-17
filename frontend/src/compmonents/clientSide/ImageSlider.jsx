import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Card from './Card';
import ProjectSection from './ProjectSection';
import BackgroundFixed from './BackgroundFixed';
import GallerImage from './Carousel';
import GallerImage2 from './Carousel2';
export default function ImageSlider() {
    const fadeImages = [
        {
          url: 'https://www.smindia.org/images/slider/1.jpg',
          
        },
        {
          url: 'https://www.smindia.org/images/slider/2.jpg',
          
        },
        {
          url: 'https://www.smindia.org/images/slider/3.jpg',
          
        },
        {
            url:'https://www.smindia.org/images/slider/4.jpg',
            
        }
    ]
  return (
    <div>
       <div className='w-full lg:h-[80vh] relative -z-50'>
      <Fade>
        {fadeImages.map((fadeImage) => (
          <div>
            <img className='w-full lg:h-[80vh]' src={fadeImage.url} />
            <h1 className='absolute top-[50%] left-[50%] md:text-5xl text-2xl -translate-x-[50%] font-bold text-red-800'>{fadeImage.text}</h1>
          </div>
        ))}
      </Fade>
    </div>
    <Card/>
    <ProjectSection/>
    <BackgroundFixed/>
    <GallerImage/>
    <GallerImage2/>
    </div>
  )
}
