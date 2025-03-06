import { Link } from "react-router-dom"

// import { newArrivals } from "../constants"

const NewArrivals = () => {
  return (
    <div className="w-full max-w-7xl flex flex-col items-center p-2 mt-12">
        <h1 className="text-center font-bold text-[48px]">New Arrivals</h1>
        <Link to='/new-arrivals' className="border-[0.2px] border-black px-2 py-1 mt-2">
          <p className="text-[14px]">VIEW ALL</p>
        </Link>

        <div className="flex items-center gap-4 p-1">
            {newArrivals.map((newArrival, index) => (
                <div className="flex flex-col items-center gap-2" key={index}>
                    <img src={newArrival.src} alt='Treky.in Popular' className="w-[100px] h-[100px] object-contain"/>
                    <h4 className="text-center text-lg font-bold">{newArrival.title}</h4>
                    <h4 className="text-center">{`M.R.P. ${newArrival.mrp}`}</h4>
                </div>
            ))}
        </div>
    </div>
  )
}

// export default newArrivals