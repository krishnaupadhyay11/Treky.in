import { popCategories } from "../constants"

export default function PopularCategories() {
  return (
    <div className="w-full max-w-7xl flex flex-col items-center p-2 mt-10">
        <h1 className="text-center font-semibold text-[36px]" id="categories">Explore Popular Categories</h1>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-flow-col gap-4 md:gap-10 p-1 mt-2">
            {popCategories.map((popCategory, index) => (
                <div className="flex flex-col items-center gap-2" key={index}>
                    <img src={popCategory.src} alt='Treky.in Popular' className="w-[100px] h-[100px] object-contain hover:scale-125 transition-all duration-200" loading="lazy"/>
                    <h4 className="font-semibold text-center">{popCategory.title}</h4>
                </div>
            ))}
        </div>
    </div>
  )
}
