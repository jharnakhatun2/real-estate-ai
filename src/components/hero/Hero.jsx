import buildingImage from "assets/bg/buildings.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto px-2 md:px-4 xl:px-0 pt-12">
      <div className="flex flex-wrap flex-col-reverse md:flex-row">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full">
            <header className="container lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <div className="text-2xl font-bold">
                  AI In Real Estate<span className="text-indigo-500">.</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold">Unlock the Future of <span className="text-indigo-500 block">Real Estate</span> with AI</h1>
                <div className="w-20 h-2 bg-indigo-500 my-4" />
                <p className="text-xl mb-10">Welcome to Real Estate Genius. Accurate real estate valuation at your fingertips. Harness the power of AI for instant property assessments and informed decisions. Discover the future of real estate valuation with our advanced AI technology.</p>
                <button onClick={()=> navigate("/dashboard")} className="bg-indigo-500 text-white w-full md:w-auto text-xl font-semibold px-8 py-2 rounded-sm shadow">
                  Create Listing
                </button>
              </div>
            </header>
          </div>
        </div>
        <img src={buildingImage} alt="Building" className="w-full h-48 mt-12 md:-mt-8 object-cover sm:h-screen sm:w-4/12" />
      </div>
    </section>
  )
}