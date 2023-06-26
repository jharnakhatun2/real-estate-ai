export default function HeroTwo() {
  return (
    <div className="w-full bg-center bg-cover h-[38rem]" style={{ backgroundImage: 'url("../src/assets/bg/black-white.jpg")'}}>
      <div className="flex items-center w-full h-full bg-gray-900/40 container mx-auto px-2 md:px-0">
        {/* hero text */}
        <div className="w-full space-y-4">
          <div>
            <h1 className="text-4xl font-medium text-white">Discover <span className="block"><span className="block md:inline">a place</span> you will love to live</span></h1>
          </div>
          {/* search inputs */}
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" className="w-full md:w-2/4 border md:border-none" placeholder="Enter a location to search here" />
            <button type="button" className="bg-indigo-500 py-2 px-14 text-white font-semibold" >Search</button>
          </div>
          <div>
            <p className="text-white">We have listed over 100+ property in our database.</p>
          </div>
          <div className="w-full md:w-5/6">
            <h2 className="text-white mb-4">What are you looking for?</h2>
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4 text-center">
              {/* housing */}
              <div className="bg-white p-10 rounded-sm shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <p>Housing</p>
              </div>
              {/* Booking */}
              <div className="bg-white p-10 rounded-sm shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <p>Booking</p>
              </div>
              {/* renovation */}
              <div className="bg-white p-10 rounded-sm shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <p>Renovation</p>
              </div>
              {/* House plan */}
              <div className="bg-white p-10 rounded-sm shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <p>House Plan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}