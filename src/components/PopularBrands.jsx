import { brandsLogo } from "../constants"

export default function PopularBrands() {
  return (
    <div className="w-full p-2 bg-[#f0f0f0] md:py-8 mt-12 flex flex-col items-center">
        <div className="w-full max-w-4xl p-4 flex flex-col items-center gap-4">
            <h1 className="text-[36px] font-semibold text-center">Popular Brands</h1>

            <div className="w-full py-4 flex flex-wrap justify-center gap-6 md:gap-12">
                {brandsLogo.map((brandLogo, index) => (
                    <img src={brandLogo.logo} alt={`${brandLogo.name} Logo`} className="w-[60px] h-[60px] md:w-[110px] md:h-[110px] object-contain" key={index} loading="lazy"/>
                ))}
            </div>
        </div>
    </div>
  )
}
