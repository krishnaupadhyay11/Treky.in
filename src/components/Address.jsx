import WhatsApp from '../assets/WhatsAppButton.png'

export default function Address() {
  return (
    <div className="w-full max-w-5xl p-4 flex flex-col md:flex-row justify-between gap-4 items-center text-gray-800 mt-8 flex-wrap">
        <p className="text-center">
            17A/1 Main Road, Govindpuri, <br />
            Opp. Acharya Narendra Dev College, <br />
            Kalkaji, New Delhi - 110019
        </p>
        
        <div className="md:h-[64px] md:w-[1px] h-[1px] w-[64px] bg-gray-500 sprinkle" />
        <div className="flex flex-col items-center">
            Manpreet Singh <br />
            <a href="tel:+919555008889" className="flex items-center gap-1">
                <i className="uil uil-phone-alt text-[18px] text-gray-900"></i>
                <h2>+91 9555008889</h2>
            </a>
        </div>

        <div className="md:h-[64px] md:w-[1px] h-[1px] w-[64px] bg-gray-500 sprinkle" />
        <p className="text-center">
            Mon - Sun: 10:00 AM - 7:00 PM
        </p>

        <div className="w-full max-w-[650px] mx-auto flex flex-basis-1 flex-col md:flex-row items-center justify-between gap-4">
            <a href="https://trekky.in" className="flex items-center gap-1">
                <i className="uil uil-globe text-[18px] font-thin"></i>
                <p className="text-center">
                    trekky.in
                </p>
            </a>

            <div className="md:h-[64px] md:w-[1px] h-[1px] w-[64px] bg-gray-500 sprinkle" />
            <a aria-label="Chat on WhatsApp" href="https://wa.me/919555008889">
                <img alt="Chat on WhatsApp" src={WhatsApp} width={300}/>
            </a>
        </div>
    </div>
  )
}
