import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white '>
          <div className="container mx-auto px-18 pt-25 ">
              <div className="flex flex-row gap-45 border-b-[#121c2b] border-b-2 pb-25 mb-5">
                <div className='w-100'>
                    <h1 className='text-white text-5xl mb-5'>Campaign<span className='text-red-700'>Buttler</span></h1>
                    <p className='text-lg'>Win Your Next Election with Campaign Butler's All-in-One Solution</p>
                </div>
                <ul className='flex flex-col gap-4'>
                    <li><a href="#" className='text-[21px]'>Privacy Policy</a></li>
                    <li><a href="#" className='text-[21px]'>Terms & Conditions</a></li>
                    <li><a href="#" className='text-[21px]'>Contact Us</a></li>
                </ul>
                <ul className='flex flex-col gap-4'>
                    <li><a href="#" className='text-[21px]'>Support Center</a></li>
                    <li><a href="#" className='text-[21px]'>Campaign Resources</a></li>
                    <li><a href="#" className='text-[21px]'>Blog</a></li>
                </ul>
            </div>
              <div className="flex flex-row justify-between items-center text-[#c1d3fe]">
                  <p className='text-xl'>&copy; 2025 Campaign Butler. All Rights Reserved.</p>
                  <ul className='flex flex-row gap-3'>
                      <li><a href="#"><i className="ri-facebook-fill ri-2x"></i></a></li>
                      <li><a href="#"><i className="ri-youtube-fill ri-2x"></i></a></li>
                      <li><a href="#"><i className="ri-twitter-x-line ri-2x"></i></a></li>
                      <li><a href="#"><i className="ri-tiktok-fill ri-2x"></i></a></li>
                  </ul>
              </div>  
        </div>
        
    </div>
  )
}

export default Footer