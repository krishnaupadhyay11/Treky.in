import { Link } from "react-router-dom"
import Product from "./Product"

export default function PageLayout({pageName, headBg, products, pageLink}) {
  return (
    <div className="w-full flex flex-col items-center">
        <div className="w-full p-4 text-white h-[200px] md:h-[400px] flex items-center justify-center relative" style={{backgroundImage: `url(${headBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
        >
            <div className="w-full h-full absolute top-0 left-0 bg-black/40 z-10" />

            <h1 className="text-[48px] font-semibold text-center z-[99]">{pageName}</h1>
        </div>

        <div className="w-full max-w-7xl p-4 mt-12">
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
                {products.map((product) => (
                    <div key={product.id}>
                        <Product
                            productImageSrc={product.image}
                            productName={product.name}
                            productMRP={product.MRP}
                            productId={product.id}
                            pageLink={pageLink}
                        />                    
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}