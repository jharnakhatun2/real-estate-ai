// export default function Contact() {
//   return (
//     <section>
//       <h1>contact page</h1>
//     </section>
//   );
// }

import React from "react";
import Lottie from "lottie-react";
import contact2 from "../../assets/Animation/contact.json";

const Contact = () => {
  return (
    <div className="mb-20 lg:mb-5">
      <div>
        <div className="flex justify-center items-center w-screen  h-screen rounded-none bg-white mb-60 lg:mb-10">
          <div className="container mx-auto my-4 px-4 ">
            <h1 className="text-center text-3xl font-bold mb-8 text-slate-600">
              Contact <span className="text-[#007BFF]">us</span>
            </h1>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 p-8  md:px-5  lg:w-5/6 lg:pl-20 lg:pr-20 mx-auto shadow-2xl dark:shadow-none bg-transparent">
              <div className="flex flex-col mt-5">
                {/* Animation */}
                <div>
                  <Lottie className="w-full" animationData={contact2} loop={true}></Lottie>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form action="https://formspree.io/f/xyyaroov" method="POST">
                  <div className="grid grid-cols-1 gap-3 mt-5 md:grid-cols-2">
                    <div>
                      <label className="label">
                        <span className="label-text]">Name</span>
                      </label>
                      <input
                        className="w-full border-2  border-[#007BFF]  text-gray-900  mt-0 p-3 rounded-full focus:outline-none focus:border-[#007BFF]"
                        type="text"
                        name="name"
                      />
                    </div>

                    <div>
                      <label className="label">
                        <span className="label-text]">Email</span>
                      </label>
                      <input
                        className="w-full  border-2  border-[#007BFF]  text-gray-900  p-3 rounded-full focus:outline-none focus:border-[#007BFF]"
                        type="email"
                        name="email"
                      />
                    </div>

                    <div>
                      <label className="label">
                        <span className="label-text]">Subject / Issues</span>
                      </label>
                      <input
                        className="w-full   border-2  border-[#007BFF]  text-gray-900  p-3 rounded-full focus:outline-none focus:border-[#007BFF]"
                        type="text"
                        name="about"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div>
                      <label className="label">
                        <span className="label-text]">Mobile number</span>
                      </label>
                      <input
                        className="w-full  border-2  border-[#007BFF] text-gray-900  p-3 rounded-full focus:outline-none focus:border-[#007BFF]"
                        type="text"
                        name="number"
                        placeholder="Number"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text">Message</span>
                    </label>
                    <div className="">
                      <textarea
                        name="message"
                        placeholder="Message"
                        required
                        className="w-full h-32 text-gray-900  border-2  border-[#007BFF]  p-3 rounded focus:outline-none focus:border-[#007BFF]"
                      ></textarea>
                    </div>
                  </div>

                  <div className="my-2 w-full ">
                    <button
                      type="submit"
                      className="uppercase text-sm font-bold tracking-wide bg-[#007BFF] text-gray-100 p-5 lg:p-3 rounded-full w-full
                      focus:outline-none focus:shadow-outline mt-6 lg:mt-0 lg:ml-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Map section  */}

        <div className="grid grid-cols-1 sm:mt-80 md:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26563757.189793322!2d-117.08887662264134!3d35.63644908958879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1687335759171!5m2!1sen!2sbd"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
