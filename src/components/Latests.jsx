import { useState, useEffect } from 'react'

const latests = [
    {
        text: 'We offer home delivery on select products.'
    },
    {
        text: 'We are now 30,000+ subscribers on YouTube.'
    },
    {
        text: "New Collection Available! Check out different categories. "
    },
]

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
    <div className='w-full bg-black flex flex-col items-center overflow-hidden h-[40px]'>
        {latests.map((latest, index) => (
            <div className='w-full h-full text-white transition-all duration-300 ease-in-out text-center flex-shrink-0 flex-grow-0 flex flex-col items-center justify-center text-[14px]' key={index} style={{transform: `translateY(${-100*currentLatest}%)`}}>
                {latest.text}
            </div>
        ))}            
    </div>
  )
}
