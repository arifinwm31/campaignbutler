
import bgend from '/campaignbutler/assets/bg-end.png';
import user7 from '/campaignbutler/assets/user-7.png';

const Link = () => {
  return (
    <div className="bg-[#121c2b]" style={{ backgroundImage: bgend, backgroundPosition: "left-bottom" }}>
      <div className="container grid md:grid-cols-2 gap-5 pt-5 px-5 items-center mx-auto" >
              <div className="md:block hidden">
                  
                <img src={user7} alt="" className="w-90 mx-auto -mt-20" />
              </div>
              <div className="text-white">
                  <h3 className="text-4xl">Visibility Starts Here. Victory Follows.</h3>
                  <p className="text-2xl py-5">Don't leave your campaign success to chance. Partner with the experts who understand what it takes to win in today's complex political landscape.</p>
                  <a href="#" className='w-fit px-6 bg-red-600 flex items-center rounded-md text-lg mt-5'>Launch My Campaign <i className="ri-arrow-right-up-line ri-2x"></i></a>

              </div>
          </div>
        
    </div>
  )
}

export default Link