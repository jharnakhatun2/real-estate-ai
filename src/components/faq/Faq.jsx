import React from "react";
import Lottie from "lottie-react";
import FaqAnimation from "../../assets/Animation/faq.json";

const Faq = () => {
  return (
    <section className="mt-40 dark:text-[#fff]">
      <div className="grid grid-cols-1 lg:grid-cols-2 px-10">
        <div className="-mt-8 sm:mt-32">
          <div className="">
            <Lottie animationData={FaqAnimation} loop={true}></Lottie>
          </div>
        </div>

        <div className="">
          <h2 className="text-start mb-8 text-4xl font-bold mt-8">Frequently asked questions</h2>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300  rounded-box mb-5 ">
            <div className="collapse-title text-xl font-medium bg-gradient-to-r from-[#8879FB] to-[#7e22ce]">
              What is a real estate AI product?
            </div>
            <div className="collapse-content dark:text-[#000] ">
              <p className="text-start">
                A real estate AI product is a software application that utilizes artificial intelligence technology to
                enhance various aspects of the real estate industry, such as property valuation, market analysis,
                property management, and customer service.
              </p>
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300  rounded-box mb-5 ">
            <div className="collapse-title text-xl font-medium bg-gradient-to-r from-[#8879FB] to-[#7e22ce]">
              How does a real estate AI product determine property values?
            </div>
            <div className="collapse-content dark:text-[#000]">
              <p className="text-start">
                A real estate AI product determines property values by analyzing a wide range of data, including
                property characteristics, location, recent sales data, market trends, and comparable properties. It uses
                machine learning algorithms to generate accurate and data-driven property valuations.
              </p>
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300  rounded-box mb-5 ">
            <div className="collapse-title text-xl font-medium bg-gradient-to-r from-[#8879FB] to-[#7e22ce]">
              Can a real estate AI product predict future property market trends?
            </div>
            <div className="collapse-content dark:text-[#000]">
              <p className="text-start">
                Yes, a real estate AI product can predict future property market trends by analyzing historical data,
                market indicators, economic factors, and other relevant information. It uses predictive analytics
                algorithms to provide insights and forecasts regarding property price changes, supply and demand, and
                investment opportunities.
              </p>
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300  rounded-box mb-5 ">
            <div className="collapse-title text-xl font-medium bg-gradient-to-r from-[#8879FB] to-[#7e22ce]">
              How can a real estate AI product assist property buyers?
            </div>
            <div className="collapse-content dark:text-[#000]">
              <p className="text-start">
                A real estate AI product can assist property buyers by providing personalized property recommendations
                based on their preferences and requirements. It can also help with property searches, virtual property
                tours, mortgage pre-approval, and answering inquiries through chatbot interfaces.
              </p>
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300  rounded-box mb-5 ">
            <div className="collapse-title text-xl font-medium bg-gradient-to-r from-[#8879FB] to-[#7e22ce]">
              What are the benefits of using a real estate AI product for property sellers?
            </div>
            <div className="collapse-content dark:text-[#000]">
              <p className="text-start">
                Using a real estate AI product can benefit property sellers in various ways. It can provide accurate
                property valuations, suggest optimal listing prices, create compelling property descriptions, and
                identify potential buyers through data analysis. It can also help with marketing strategies and automate
                tasks such as scheduling property showings.
              </p>
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300  rounded-box mb-5 ">
            <div className="collapse-title text-xl font-medium bg-gradient-to-r from-[#8879FB] to-[#7e22ce]">
              Does a real estate AI product replace the need for real estate agents?
            </div>
            <div className="collapse-content dark:text-[#000]">
              <p className="text-start">
                No, a real estate AI product does not replace the need for real estate agents. Instead, it complements
                their expertise by providing valuable data-driven insights and automating certain tasks. Real estate
                agents play a crucial role in negotiations, building relationships, and offering personalized advice and
                support to clients.
              </p>
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300  rounded-box ">
            <div className="collapse-title text-xl font-medium bg-gradient-to-r from-[#8879FB] to-[#7e22ce]">
              How accurate are the property valuations generated by a real estate AI product?
            </div>
            <div className="collapse-content dark:text-[#000]">
              <p className="text-start">
                The accuracy of property valuations generated by a real estate AI product depends on the quality and
                availability of data, as well as the sophistication of the AI algorithms used. Reputable AI products
                strive for high accuracy by continuously improving their algorithms and validating results against
                real-world data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
