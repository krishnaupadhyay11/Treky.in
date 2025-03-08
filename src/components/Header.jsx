import { useState } from 'react'
import { Link } from 'react-router-dom'


import logob from '../assets/logobl.png'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'

import { navLinks } from '../constants'

export default function Header() {
    const [toggle, setToggle] = useState(false)

    const activeNavLink = window.location.pathname

  return (
    <header className="w-full py-1 px-2 md:px-6 flex items-center justify-between z-[9999] transition-all duration-300 ease-in-out">
      <div className='w-[110px] md:ml-4'>
        <Link to='/' onClick={() => window.scroll(0,0)}>
          <img src={logob} alt='Treky.in Logo' className='w-full h-full object-contain'/>          
        </Link>
      </div>

      <div className='flex items-center'>
        <Link to='/shop' className='flex items-center mr-4 md:mr-8'>
            <i className="uil uil-map-marker"></i>  
            <p className='shop_button border-b border-black'>Visit Shop</p>
        </Link>

        <div className='md:hidden'>
          <div className='w-[24px] h-[24px]'>
            <img src={toggle ? close : menu} alt='Mobile Navbar Open' className='w-full h-full object-contain' onClick={() => setToggle(prev => !prev)} />
          </div>

          <div className={`${toggle ? 'flex' : 'hidden'} fixed top-0 right-0 flex-col bg-black h-full min-h-[100vh] w-2/3 p-4 items-center z-[9999]`}>
            <div className='w-full flex justify-end pr-4 pt-2'>
              <img src={close} alt='Mobile Navbar Close' className='w-[24px] h-[24px]' onClick={() => setToggle(prev => !prev)}/>
            </div>

            <nav className='h-full flex items-center'>
              <ul className='w-full flex flex-col items-center gap-8'>
                {navLinks.map((navLink) => (
                  <li key={navLink.title}>
                    <Link to={navLink.link} className={`${navLink.link !== activeNavLink ? 'text-white' : 'text-logo1'} text-[22px] p-2 px-4`}>
                      {navLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className='hidden md:flex items-center'>
          <nav className='flex items-center'>
            <ul className='flex items-center gap-8'>
              {navLinks.map((navLink) => (
                <li key={navLink.title}>
                  <Link to={navLink.link} className={`${navLink.link === activeNavLink ? 'text-logo1' : 'text-black'} hover:text-logo1 font-semibold transition-all duration-200 text-[16px]`}>
                    {navLink.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>


    </header>
  )
}
