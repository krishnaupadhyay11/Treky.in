import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import i1 from '../assets/graphics/pex.jpg'
import i2 from '../assets/graphics/dec.jpg'
import i3 from '../assets/graphics/coleman.jpg'

const slides = [
    {
        src: i1,
        alt: 'treky.in',
        heading: 'SCALE NEW HEIGHTS'
    },
    {
        src: i2,
        alt: 'treky.in',
        heading: 'BE LIMITLESS'
    },
    {
        src: i3,
        alt: 'treky.in',
        heading: 'FOR THE SOULFUL SOJOURNS'
    },
]

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goPrevious = () => {
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      Aos.refresh();
    }
  
    const goNext = () => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      Aos.refresh();
    }
  
    useEffect(() => {
      let autoScroll = setTimeout(() => {
        goNext();
      }, 5000)

      Aos.init()
  
      return () => clearTimeout(autoScroll)
    }, [currentIndex])

    return (
    <div className='w-full h-full relative flex'>
        <div className='w-full h-full flex overflow-hidden'>
            {slides.map((slide, index) => (
                <img key={index} src={slide.src} alt={slide.alt} className='w-full h-full object-cover flex-shrink-0 flex-grow-0 transition-all duration-300 ease-in-out' style={{translate: `${-100*currentIndex}%`}} loading="lazy"/>
            ))}       
        </div>

        <div className="w-full h-full absolute top-0 left-0 bg-black/40 z-10" />
            
        <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center px-4">
            <div className="w-full max-w-[400px] md:max-w-full text-center">
                <h1 key={currentIndex} className='text-2xl lg:text-5xl font-bold text-gray-300 font-impact italic md:mt-12 text-center' data-aos="fade-up" data-aos-duration="1000">{slides[currentIndex].heading}</h1>
            </div>
        </div>
        
        <div className='absolute top-1/2 translate-y-[-50%] left-4 lg:left-8 text-5xl text-white cursor-pointer z-[99]' onClick={goPrevious}>
            <i className="uil uil-angle-left"></i>
        </div>
        <div className='absolute top-1/2 translate-y-[-50%] right-4 lg:right-8 text-5xl text-white cursor-pointer z-[99]' onClick={goNext}>
            <i className="uil uil-angle-right"></i>
        </div>
    </div>
    )
}

export default function Slider() {
    return (
        <div className="h-[450px] w-full">
            <ImageSlider slides={slides} />
        </div>
    )
}
