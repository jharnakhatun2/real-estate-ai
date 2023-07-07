import { Link } from "react-router-dom";
import ActionButton from "ui/actionButton/actionButton";

export default function Features() {
  return (
    <>
      {/* Container */}
      <div className="bg-gray-100">
        <div className="bg-gray-100 relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
          {/* Image Column */}
          <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <img
              className="h-full w-full object-cover"
              src={`/assets/images/posterAi.png`}
              alt="Winding mountain road"
            />
          </div>
          {/* Close Image Column */}
          {/* Text Column */}
          <div className="max-w-lg bg-white lg:max-w-2xl lg:z-10 lg:shadow-lg lg:absolute lg:top-0 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12 md:-mt-20">
            {/* Text Wrapper */}
            <div className="flex flex-col p-12 lg:px-16">
              <h1 className="text-2xl font-semibold lg:text-4xl">
              We generate poster for <br/> social media as well
              </h1>
              <p className="mt-4">
              We offer a skillful social media poster generator. Seamlessly create eye-catching posters for your property listings, complete with captivating visuals and engaging text. Enhance your online presence and attract potential buyers with professional-grade social media posters. 
              </p>
              {/* Button Container */}
              <div className="mt-8 w-[70%]">
                <Link to="/dashboard">
                  <ActionButton>Create Poster</ActionButton>
                </Link>
              </div>
            </div>
            {/* Close Text Wrapper */}
          </div>
          {/* Close Text Column */}
        </div>
      </div>
    </>
  );
}
