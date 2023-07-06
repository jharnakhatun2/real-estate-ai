import React from "react";

const ReviewCard = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      <div className="border-2 rounded">
        <div className="flex justify-start ml-5 gap-6 mt-6">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-[#8879FB] ring-offset-base-100 ring-offset-2">
              <img alt="" />
            </div>
          </div>
          <h2>
            By <span className="text-xl font-semibold"> User one</span>
          </h2>
        </div>
        <p className="mt-5 ml-5 mb-10 font-semibold w-full">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, ratione.
        </p>
      </div>
      <div className="border-2 rounded">
        <div className="flex justify-start ml-5 gap-6 mt-6">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-[#8879FB] ring-offset-base-100 ring-offset-2">
              <img alt="" />
            </div>
          </div>
          <h2>
            By <span className="text-xl font-semibold"> User one</span>
          </h2>
        </div>
        <p className="mt-5 ml-5 mb-10 font-semibold w-full">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, ratione.
        </p>
      </div>
      <div className="border-2 rounded">
        <div className="flex justify-start ml-5 gap-6 mt-6">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-[#8879FB] ring-offset-base-100 ring-offset-2">
              <img alt="" />
            </div>
          </div>
          <h2>
            By <span className="text-xl font-semibold"> User one</span>
          </h2>
        </div>
        <p className="mt-5 ml-5 mb-10 font-semibold w-full">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, ratione.
        </p>
      </div>
    </section>
  );
};

export default ReviewCard;
