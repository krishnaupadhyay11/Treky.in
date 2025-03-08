import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Header from "../components/Header"
import Latests from "../components/Latests"
import Footer from "../components/Footer"

export default function ProductDetail() {
    const {id} = useParams()
    const numID = Number(id)

    const pathArray = window.location.pathname.split("/").filter(Boolean)
    const categoryPage = pathArray[pathArray.length-2]

    const [categoryProducts, setCategoryProducts] = useState([])

    useEffect(() => {
        if (categoryPage) {
            import(`../store/${categoryPage}/${categoryPage}.js`)
            .then((page) => setCategoryProducts(() => page.default))
            .catch((error) => console.error("Category loading failed", error))
        }
    }, [categoryPage])


  return (
    <>
        <Header />
        <Latests />
        <div className="w-full flex flex-col items-center">
            {id && categoryProducts
                .filter((categoryProduct) => categoryProduct.id === numID)
                .map((categoryProduct) => (
                    <div key={categoryProduct.id} className="mt-12 p-8 md:p-12 w-full max-w-7xl flex flex-col items-center md:flex-row md:items-start gap-10 md:gap-16">
                        <div className="w-[300px] md:w-[450px] ">
                            <img src={categoryProduct.image} alt={categoryProduct.name} className="w-full h-full object-contain" loading="lazy"/>
                        </div>

                        <div className="h-full flex flex-col items-center py-4 md:py-8 md:mt-10">
                            <div className="flex flex-col gap-2 mb-4 md:mb-8">
                                <h1 className="text-[28px] font-semibold font-sans">{categoryProduct.name}</h1>
                                <h1 className="text-[20px]">{`M.R.P. ₹${categoryProduct.MRP}`}</h1>
                            </div>
                            <div className="flex flex-col items-center">
                                <h1 className="text-[24px] font-semibold text-center">Get This Product</h1>

                                <div className="flex items-center justify-center gap-4 mt-4">
                                    <a aria-label="Chat on WhatsApp" href={`https://wa.me/919555008889?text=${encodeURIComponent(`Hi, I'm interested in ${categoryProduct.name}`)}`} target="_blank" rel="noopener noreferrer" className='flex items-center'>
                                        <button className="bg-black px-3 py-2 flex gap-2 items-center">
                                            <h1 className="text-white inline-block text-lg">Order Now</h1>
                                            <i className="uil uil-whatsapp text-[20px] text-white"></i>
                                        </button>
                                    </a>

                                    <a href="tel:+919555008889" className="bg-[#ff962d] px-3 py-2 flex gap-2 items-center">
                                        <h2 className="text-white inline-block text-lg">Enquire Now</h2>
                                        <i className="uil uil-phone-alt text-[20px] text-slate-100"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))            
            }
        </div>
        <Footer />
    </>
  )
}
