import { Link } from "react-router-dom"

const Product = ({productImageSrc, productName, productMRP, productId, pageName}) => (
    <div className="flex flex-col gap-4 items-center justify-between h-full">
        <div className="max-w-[300px] overflow-hidden ">
            <Link to={`/${pageName.toLowerCase()}/${productId}`}>
                <img src={productImageSrc} alt="Treky.in Products" className="w-full h-full object-contain" loading="lazy"/>            
            </Link>
        </div>
        <div className="flex w-[90%] justify-between items-center">
            <div className="w-full flex flex-col gap-2">
                <h2 className="font-bold">{productName}</h2>

                <h2 className="">{`M.R.P. ₹${productMRP}`}</h2>
            </div>

            <a aria-label="Chat on WhatsApp" href={`https://wa.me/919555008889?text=${encodeURIComponent(`Hi, I'm interested in ${productName}`)}`} target="_blank" rel="noopener noreferrer">
                <button>
                    <i className="uil uil-whatsapp text-[32px] text-gray-900"></i>
                </button>
            </a>
        </div>
    </div>
)

export default Product