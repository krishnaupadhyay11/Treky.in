import { useState, useEffect } from 'react'

import { latests } from '../constants'

export default function Latests() {
    const [currentLatest, setCurrentLatest] = useState(0)

    const goNext = () => {
        setCurrentLatest((prev) => prev === latests.length-1 ? 0 : prev+1)
    }

    useEffect(() => {
        let autoScroll = setTimeout(() => {
            goNext()
        }, 5000)

        return () => clearTimeout(autoScroll)
    }, [currentLatest])
    
  return (
    <div className='w-full bg-black flex flex-col items-center overflow-hidden h-[36px]'>
        {latests.map((latest, index) => (
            <div className='w-full h-[36px] text-white transition-all duration-300 ease-in-out text-center flex-shrink-0 flex-grow-0 flex flex-col items-center justify-center' key={index} style={{transform: `translateY(${-100*currentLatest}%)`}}>
                {latest.text}
            </div>
        ))}            
    </div>
  )
}
