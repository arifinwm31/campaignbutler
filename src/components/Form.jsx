

const Form = () => {
  return (
      <div className="bg-black py-25">
          <div className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between px-6 md:px-18">
                  <div className="text-white">
                      <h2 className="text-4xl md:text-6xl/tight font-medium mb-10">Ready to Launch Your <span className="text-red-700">Winning Campaign?</span></h2>
                      <p className="text-2xl md:text-4xl">Get started today with Campaign Butler and receive:</p>
                      <ul className="flex flex-col">
                          <li className="text-base md:text-2xl/tight"><i className="ri-arrow-right-s-fill ri-2x text-red-700 mr-4"></i> <strong>Same-day </strong> domain and email setup</li>
                          <li className="text-base md:text-2xl/tight"><i className="ri-arrow-right-s-fill ri-2x text-red-700 mr-4"></i> <strong>Professional</strong> website within 72 hours</li>
                          <li className="text-base md:text-2xl/tight"><i className="ri-arrow-right-s-fill ri-2x text-red-700 mr-4"></i> <strong>Dedicated</strong> campaign strategist</li>
                          <li className="text-base md:text-2xl/tight"><i className="ri-arrow-right-s-fill ri-2x text-red-700 mr-4"></i> <strong>Complete</strong> onboarding and training</li>
                      </ul>
                  </div>
                  <div>
                      <form action="#" className="flex flex-col text-white gap-5">
                          <input type="text" name="fistName" id="fistName" placeholder="Fist Name" className=" border-white border rounded-md px-3 py-4" />
                          <input type="text" name="lastName" id="lastName" placeholder="Last Name" className=" border-white border rounded-md px-3 py-4" />
                          <input type="text" name="email" id="email" placeholder="Email" className=" border-white border rounded-md px-3 py-4" />
                          <input type="text" name="phone" id="phone" placeholder="Phone Number(Optional)" className=" border-white border rounded-md px-3 py-4" />
                          <div className="flex gap-2">
                              <input type="checkbox" id="some_id" className="appearance-none w-10 h-7 border-2 border-blue-500 rounded-sm bg-white mt-1"
                              />
                              <label htmlFor="some_id" className="text-base md:text-lg/[30px]">I agree to receive text messages from Campaign Butler. By checking this box and providing your phone number, <a href="#" className="text-red-700">Read more...</a></label>
                          </div>
                          <button type="submit" className='w-fit px-6 bg-red-600 flex items-center rounded-md text-lg mt-5'>Launch My Campaign <i className="ri-arrow-right-up-line ri-2x"></i></button>
                      </form>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Form