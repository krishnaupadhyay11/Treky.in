import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import logo from '../assets/logobl.png'
import { socials } from '../constants'
import { navLinks } from '../constants'

export default function Footer() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        }
    }, [location]);
    
  return (
    <footer className="w-full h-full bg-[#f0f0f0] mt-12 flex flex-col">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-4 p-8 pb-12 justify-around">
            <div className="flex flex-col gap-2 items-center">
                <div className="w-[150px]">
                    <img src={logo} alt="Treky.in Logo" className="w-full h-full object-contain" />
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-[24px] font-semibold mb-1'>Contact Us</h1>

                    <h2 className='text-center text-[18px]'>Manpreet Singh</h2>

                    <a href="tel:+919555008889" className="flex items-center gap-1">
                        <i className="uil uil-phone-alt text-[18px] text-gray-900"></i>
                        <h2>+91 9555008889</h2>
                    </a>

                    <a aria-label="Chat on WhatsApp" href="https://wa.me/919555008889" className='flex items-center gap-1'>
                        <i className="uil uil-whatsapp text-[18px] text-gray-900"></i>
                        <h2>WhatsApp</h2>
                    </a>

                    <ul className="flex text-[20px] gap-2 md:ml-2 text-gray-950">
                        {socials.map((social) => (
                            <li key={social.name}>
                                <a href={social.link} className="" target="_blank">
                                    <i className={`uil uil-${social.icon.toLowerCase()}`}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-[24px] font-semibold mb-2'>Address</h1>

                <p className="text-center">
                    17A/1 Main Road, Govindpuri, <br />
                    Opp. Acharya Narendra Dev College, <br />
                    Kalkaji, New Delhi - 110019
                </p>

                <div className='max-w-[300px] rounded-2xl overflow-hidden'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0271123651687!2d77.26067432640431!3d28.538904777002053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3dfd87874c7%3A0x1d8b5fb20808b408!2sTrekking%20Equipments!5e0!3m2!1sen!2sin!4v1739524617634!5m2!1sen!2sin"
                    width="100%"
                    height="150"
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

            <div className='flex flex-col gap-2 items-center'>
                <h1 className='text-[24px] font-semibold mb-2'>Useful Links</h1>

                <ul className='flex flex-col gap-2 items-center'>
                    {navLinks.map((navLink) => (
                        <li key={navLink.title}>
                            <Link to={navLink.link}>{navLink.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div className='w-full px-4 py-2 bg-black text-white flex justify-center items-center'>
            <h1 className='text-center'>&#169; 2025 treky.in. Designed and Developed by <Link to='https://krishnaupadhyay.vercel.app' className='text-logo1' target='_blank'>
                    Krishna.
                </Link>
            </h1>
        </div>
    </footer>
  )
}
