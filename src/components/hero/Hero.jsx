import { Link } from "react-router-dom";
import ActionButton from "ui/actionButton/actionButton";

export default function Hero() {
  return (
    <section className="bg-[url('https://i.ibb.co/Ws1sSyj/New-Project-8.png')] bg-no-repeat bg-cover bg-center py-8 lg:py-20">
      <div className="container mx-auto px-5 md:px-10 lg:px-5 pt-12">
        <div className="flex flex-wrap flex-col-reverse md:flex-row">
          <div className="w-full sm:w-8/12 mb-10">
            <div className="container mx-auto h-full">
              <header className="container lg:flex mt-10 items-center h-full lg:mt-0">
                <div className="w-full">
                  <h2 className="text-sm lg:text-xl uppercase text-primary font-semibold">
                    Ai in Real Estate
                  </h2>
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                    Unlock the Future of{" "}
                    <span className="text-primary block">Real Estate</span> with
                    AI
                  </h1>
                  <div className="w-20 h-2 bg-indigo-500 my-4" />
                  <p className="text-md lg:text-xl mb-10 w-3/4">
                    Welcome to Real Estate Genius. Accurate real estate
                    valuation at your fingertips. Harness the power of AI for
                    instant property assessments and informed decisions.
                    Discover the future of real estate valuation with our
                    advanced AI technology.
                  </p>
                  <div className="block md:flex lg:flex gap-5 w-[70%] md:w-full lg:w-full">
                    <Link to="/dashboard">
                      <ActionButton>Create Property</ActionButton>
                    </Link>
                    <Link to="/properties">
                      <button className="hover:bg-[#ddd9ff] mt-3 md:mt-0 lg:mt-0  text-primary border-2 w-full md:w-auto text-md px-8 py-3 rounded-sm transition">
                        Existing Properties
                      </button>
                    </Link>
                  </div>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
