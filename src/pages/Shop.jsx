import { useState, useEffect } from "react"

import Header from "../components/Header"
import Latests from "../components/Latests"
import Address from "../components/Address"
import Footer from "../components/Footer"

import headBg from '../assets/shop/10.jpg'
import i1 from '../assets/shop/1.jpg'
import i3 from '../assets/shop/3.jpg'
import i6 from '../assets/shop/6.jpg'
import i8 from '../assets/shop/8.jpg'
import i7 from '../assets/shop/7.jpg'
import i9 from '../assets/shop/9.jpg'

const shop_images = [
    i1, i3, i6, i8, i7, i9, 
]
export default function Shop() {
    const [imageIndex, setImageIndex] = useState(0)

    const goNext = () => {setImageIndex((prev) => prev === 2 ? 0 : prev+1)}

    useEffect(() => {
        let autoScroll = setTimeout(() => {
            goNext();
        }, 3000)

        return () => clearTimeout(autoScroll)

    }, [imageIndex])

  return (
    <div className="flex flex-col items-center">
        <Header />
        <Latests />
        <div className="w-full text-white h-[200px] md:h-[400px] flex items-center justify-center relative">
            <img src={headBg} alt="Treky.in" className="w-full h-full object-cover absolute" loading="lazy" />
            <div className="w-full h-full absolute bg-black opacity-50"></div>

            <h1 className="text-[28px] md:text-[48px] font-semibold text-center font-arial z-50">TREKKING EQUIPMENT <br />
            <span className="text-orange-500  text-[42px] md:text-[64px] font-arial-rounded">TREKY</span></h1>

        </div>

        <Address />

        <div className="w-full max-w-7xl mt-10 p-4 md:p-10">
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
                <div className="w-[300px] md:w-[400px] lg:w-[500px] flex flex-nowrap overflow-hidden">
                    {shop_images.slice(0,3).map((shop_image, index) => (
                        <div key={index} style={{translate: `${-100*imageIndex}%`}} className="w-full h-full flex-shrink-0 flex-grow-0 transition-all duration-300 ease-in-out"  >
                            <img src={shop_image} alt="Trekking Equipment Images" className="w-full h-full object-cover" loading="lazy"/>
                        </div>
                    ))}
                </div>

                <div className="w-full max-w-[600px] flex flex-col px-4 md:px-0">
                    <h1 className="text-[36px] font-semibold">Best Trekking Store in Delhi</h1>
                    <p>Providing high-quality Equipment for Camping, Hiking and Trekking. Get Equipped and set out on the adventure.</p>
                    <a href='https://maps.app.goo.gl/N5Z1CHoiPrA5mfqG9' className='px-3 py-2 bg-black text-white mt-4 max-w-[fit-content]'>
                        <h1>Visit Shop</h1> 
                    </a>
                </div>                
            </div>

            <div className="w-full flex flex-col md:flex-row-reverse items-center justify-between gap-6 md:gap-10 mt-6 md:mt-10">
                <div className="w-[300px] md:w-[400px] lg:w-[500px] flex flex-nowrap overflow-hidden">
                    {shop_images.slice(3,6).map((shop_image, index) => (
                        <div key={index} style={{translate: `${-100*imageIndex}%`}} className="w-full h-full flex-shrink-0 flex-grow-0 transition-all duration-300 ease-in-out"  >
                            <img src={shop_image} alt="Trekking Equipment Images" className="w-full h-full object-cover" loading="lazy"/>
                        </div>
                    ))}
                </div>

                <div className="w-full max-w-[600px] flex flex-col">
                    <h1 className="text-[36px] font-semibold">ALL ADVENTURE ESSENTIALS</h1>
                    <p>For the maximum performance and adventure. Reliability that makes you feel at home in the outdoors.</p>
                    <a href='https://maps.app.goo.gl/N5Z1CHoiPrA5mfqG9' className='px-3 py-2 bg-black text-white mt-4 max-w-[fit-content]'>
                        <h1>Visit Shop</h1>
                    </a>
                </div>                
            </div>
        </div>

        <Footer />    
    </div>
  )
}
