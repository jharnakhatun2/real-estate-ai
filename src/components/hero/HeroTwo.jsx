export default function HeroTwo() {
  return (
    <div className="w-full bg-center bg-cover h-[38rem] bg-white" style={{ backgroundImage: 'url("../src/assets/bg/black-white.jpg")'}}>
      <div className="flex items-center w-full h-full container mx-auto px-2 md:px-0">
        {/* hero text */}
        <div className="w-full space-y-4">
          <div>
            <h1 className="text-4xl font-medium text-white">Discover <span className="block"><span className="block md:inline">a place</span> you will love to live</span></h1>
          </div>
          {/* search inputs */}
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" className="w-full md:w-2/4 border-none" placeholder="Enter a location to search here" />
            <button type="button" className="bg-indigo-500 py-2 px-14 text-white font-semibold" >Search</button>
          </div>
          <div>
            <p className="text-white">We have listed over 100+ property in our database.</p>
          </div>
          {/* new section */}
          <div className="w-full md:w-5/6">
            <h2 className="text-white mb-4">What are you looking for?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {/* housing */}
              <div className="bg-white p-10 rounded-sm shadow-lg">
                <p>Housing</p>
              </div>
              {/* Booking */}
              <div className="bg-white p-10 rounded-sm shadow-lg">
                <p>Booking</p>
              </div>
              {/* renovation */}
              <div className="bg-white p-10 rounded-sm shadow-lg">
                <p>Renovation</p>
              </div>
              {/* House plan */}
              <div className="bg-white p-10 rounded-sm shadow-lg">
                <p>House Plan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}