import { useState, useEffect } from "react";

import i1 from '../assets/shop/1.jpg'
import i2 from '../assets/shop/6.jpg'
import i3 from '../assets/shop/8.jpg'
import i4 from '../assets/shop/7.jpg'

const slides = [
    {
        src: i1,
        alt: 'treky.in'
    },
    {
        src: i2,
        alt: 'treky.in'
    },
    {
        src: i3,
        alt: 'treky.in'
    },
    {
        src: i4,
        alt: 'treky.in'
    },
]

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goPrevious = () => {
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  
    const goNext = () => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
  
    useEffect(() => {
      let autoScroll = setTimeout(() => {
        goNext();
      }, 5000)
  
      return () => clearTimeout(autoScroll)
    }, [currentIndex])

    return (
    <div className='w-full h-full relative flex'>
        <div className='w-full h-full flex overflow-hidden'>
            {slides.map((slide, index) => (
                <img key={index} src={slide.src} alt={slide.alt} className='w-full h-full object-cover flex-shrink-0 flex-grow-0 transition-all duration-300 ease-in-out' style={{translate: `${-100*currentIndex}%`}}/>
            ))}       
        </div>   
        
        <div className='absolute top-1/2 translate-y-[-50%] left-4 lg:left-8 text-5xl text-white z-10 cursor-pointer' onClick={goPrevious}>
            <i className="uil uil-angle-left"></i>
        </div>
        <div className='absolute top-1/2 translate-y-[-50%] right-4 lg:right-8 text-5xl text-white z-10 cursor-pointer' onClick={goNext}>
            <i className="uil uil-angle-right"></i>
        </div>
    </div>
    )
}

export default function Slider() {
    return (
        <div className="h-[450px] w-full mt-4">
            <ImageSlider slides={slides} />
        </div>
    )
}
