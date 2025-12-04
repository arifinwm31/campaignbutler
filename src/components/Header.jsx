
const Header = () => {
  return (
    <div className="bg-gray-900 rounded-br-[200px]">
      <div className="header fixed w-full bg-gray-900 z-50 pt-4">

        <div className='container mx-auto px-16'>
          <div className="flex items-center justify-between py-4 border-b-white border-b-2">

            <h1 className='text-white text-3xl'>Campaign<span className='text-red-700'>Buttler</span></h1>
            <div>
              <ul className="menu flex item-center text-white gap-12">
                <li><a href="#" className="text-xl font-medium">Services</a></li>
                <li><a href="#" className="text-xl font-medium">Pricing</a></li>
                <li><a href="#" className="text-xl font-medium">Quick Start</a></li>
                <li><a href="#" className="text-xl font-medium">Support</a></li>
                <li><a href="#" className="text-xl font-medium">Blog</a></li>
                <li><a href="#" className="text-xl font-medium bg-red-500 px-4 py-2 rounded-md">Contact <i className="ri-arrow-right-up-line"></i></a></li>
              </ul>
            </div>

          </div>
        </div>

      </div>
      <div className='container mx-auto pt-48 pb-40 grid grid-cols-2 items-center px-16'>
        <div className=''>
          <h2 className='text-white text-6xl/tight'>Win Your Next Election with Campaign Butler's All-in-One Solution</h2>
          <p className='text-white text-xl my-8'>From digital presence to boots on the ground, we deliver the tools,
            technology, and expertise that modern campaigns need to connect
            with voters and secure victory</p>
          <div className='text-white flex gap-5 justify-between items-center'>
            <p className='text-xl text-gray-400'>Find Your Domain</p>
            <div>
              <input type="text" name="domain" id="domain" placeholder='Type here..' className='bg-stone-950 opacity-50 w-[350px] px-6 py-3 text-white placeholder-white' />
            </div>
            <div className='w-fit'>
              <button className=' px-5 border-white rounded-md border-2 flex items-center text-lg'>Search <i className="ri-arrow-right-up-line text-red-700 ri-2x"></i></button>
            </div>
          </div>
        </div>
        <div className="">
          <img src="/assets/link-user.png" alt="BG Header" className="w-full -right-5" />
        </div>
      </div>
      <div className='container flex mx-auto px-16 items-center text-white pb-18'>
        <div><a href="#" className='w-fit px-6 bg-red-600 flex items-center rounded-md text-lg'>Launch Your Campaign Today <i className="ri-arrow-right-up-line ri-2x"></i></a></div>
        <div className='mx-6'><hr className='border-white w-[500px]' /></div>
        <div><a href="#" className='w-fit px-6  flex items-center rounded-md text-lg'>See Our Pricing <i className="ri-arrow-right-up-line ri-2x text-red-600"></i></a></div>
        <div><a href="#" className='w-fit px-6  flex items-center rounded-md text-lg'>Schedule a Demo <i className="ri-arrow-right-up-line ri-2x text-red-600"></i></a></div>
      </div>
    </div>
  )
}

export default Header