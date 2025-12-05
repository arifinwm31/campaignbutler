import { useState, useEffect } from 'react';

import mainLogo from '/campaignbutler/assets/link-user.png';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const handleClick = () => {
    setMenuActive(!menuActive);
  }
  return (
    <div className="bg-black rounded-br-[200px]">
      <div className="header fixed w-full bg-black z-50 pt-4">
        <div className='container mx-auto xl:px-16 px-4'>
          <div className="flex items-center justify-between py-4 border-b-white border-b-2">
            <h1 className='text-white text-3xl'>Campaign<span className='text-red-700'>Buttler</span></h1>
            {/* <div className=''> */}
            <ul className={`menu flex items-center  lg:static absolute flex-col lg:flex-row text-white xl:gap-12 gap-6 left-1/2  -translate-x-1/2 lg:left-0 lg:-translate-x-0 lg:w-auto py-10 lg:py-0 transition-all lg:transition-none bg-black w-[50%] lg:w-auto -z-10 lg:z-0 lg:opacity-100 ${menuActive ? "top-16 opacity-100" : "-top-72 opacity-0"}`}>
                <li><a href="#" className="text-xl font-medium">Services</a></li>
                <li><a href="#" className="text-xl font-medium">Pricing</a></li>
                <li><a href="#" className="text-xl font-medium">Quick Start</a></li>
                <li><a href="#" className="text-xl font-medium">Support</a></li>
                <li><a href="#" className="text-xl font-medium">Blog</a></li>
                <li><a href="#" className="text-xl font-medium bg-red-500 px-4 py-2 rounded-md">Contact <i className="ri-arrow-right-up-line"></i></a></li>
              </ul>
            {/* </div> */}
            <div className="menu-btn lg:hidden block text-white" onClick={handleClick}>
              <i className="ri-menu-3-line ri-2x">

              </i>
            </div>

          </div>
        </div>

      </div>
      <div className='container mx-auto pt-48 md:pb-40 pb-20 grid lg:grid-cols-2 items-center grid-cols-1 xl:px-16 px-4'>
        <div className=''>
          <h2 className='text-white xl:text-6xl/tight text-4xl/tight'>Win Your Next Election with Campaign Butler's All-in-One Solution</h2>
          <p className='text-white text-xl my-8'>From digital presence to boots on the ground, we deliver the tools,
            technology, and expertise that modern campaigns need to connect
            with voters and secure victory</p>
          <div className='text-white flex flex-col md:flex-row gap-5 justify-between items-center'>
            <div className='flex items-center justify-between px-3 md:gap-5 '>
              <p className='md:text-xl text-lg text-gray-400'>Find Your Domain</p>
              <input type="text" name="domain" id="domain" placeholder='Type here..' className='bg-[#141b25] opacity-50 w-[350px] px-6 py-3 text-white placeholder-white' />
            </div>
            <div className='w-fit'>
              <button className=' px-5 border-white rounded-md border-2 flex items-center text-lg'>Search <i className="ri-arrow-right-up-line text-red-700 ri-2x"></i></button>
            </div>
          </div>
        </div>
        <div className="w-full lg:block hidden">
          <img src={mainLogo} alt="BG Header" className=" -right-5" />
        </div>
      </div>
      <div className='container flex md:flex-row flex-col mx-auto xl:px-16 px-4 items-center text-white pb-18'>
        <div><a href="#" className='w-fit px-6 bg-red-600 flex items-center rounded-md text-lg'>Launch Your Campaign Today <i className="ri-arrow-right-up-line ri-2x"></i></a></div>
        <div className='mx-6 lg:block hidden'><hr className='border-white xl:w-[500px] w-[200px]' /></div>
        <div><a href="#" className='w-fit px-6  flex items-center rounded-md text-lg'>See Our Pricing <i className="ri-arrow-right-up-line ri-2x text-red-600"></i></a></div>
        <div><a href="#" className='w-fit px-6  flex items-center rounded-md text-lg'>Schedule a Demo <i className="ri-arrow-right-up-line ri-2x text-red-600"></i></a></div>
      </div>
    </div>
  )
}

export default Header