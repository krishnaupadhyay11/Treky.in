import { Link } from 'react-router-dom'

import shoes from '../assets/graphics/look_shoes.jpg'
import jackets from '../assets/graphics/look_jackets.jpg'
import camping from '../assets/graphics/look_camping.jpg'

const looks = [
    {
        index: 1,
        heading: 'THE PERFECT SHOES',
        subheading: 'Light on the feet, strong on the ground',
        image: shoes
    },
    {
        index: 2,
        heading: 'THE ULTIMATE JACKETS',
        subheading: 'For the maximum performance and adventure',
        image: jackets
    },
    {
        index: 3,
        heading: 'CAMPING ESSENTIALS',
        subheading: 'Feel at home in outdoors with our camping equipments',
        image: camping
    }
]

export default function Look() {
  return (
    <>
    <div className='w-full flex flex-col items-center justify-center mt-12'>
        {looks.map((look) => (
            <div className={`w-full flex flex-col md:flex-row items-center justify-center mt-4 md:mt-0 ${look.index % 2 != 0 ? 'md:flex-row-reverse' : ''}`} key={look.index}>
                <div className='w-full md:w-1/2 h-[300px] md:h-[400px] overflow-hidden'>
                    <img src={look.image} alt={look.heading} className='w-full h-full object-cover hover:scale-125 transition-all duration-200' loading='lazy'/>
                </div>

                <div className='w-full md:w-1/2 p-4 flex flex-col md:items-center md:justify-center items-start justify-start gap-2'>
                    <h1 className='text-[32px] font-semibold'>{look.heading}</h1>
                    <p>{look.subheading}</p>

                    <Link to='#categories' className='px-3 py-2 bg-black text-white mt-4'>
                        <h1>SHOP NOW</h1>
                    </Link>
                </div>

            </div>

        ))}

    </div>
    </>
  )
}
