export default function Hero() {
  return (
    <section className="hero-image flex items-center">
      <div className="container mx-auto px-2 md:px-0 space-y-3">
        {/* hero text */}
        <div>
          <h1 className="text-4xl font-medium text-white">Discover <span className="block">a place you will love to live</span></h1>
        </div>
        <div>
          <p className="text-white">We have listed over 100+ property in our database.</p>
        </div>
        {/* search inputs */}
        <div className="flex gap-4">
          <input type="text" className="w-2/4 border-none" placeholder="Enter a location to search here" />
          <button type="button" className="bg-indigo-500 px-14 text-white font-semibold" >Search</button>
        </div>
      </div>
    </section>
  )
}