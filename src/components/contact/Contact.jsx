const Contact = () => {
  return (
    <section>
      <div>
        <h1 className="text-2xl font-semibold text-center mb-8">
          Contact <span className="text-[#8879FB] font-bold text-3xl">us</span>{" "}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-5">
          <div className="mt-3">
            <iframe
              className="rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26563757.189793322!2d-117.08887662264134!3d35.63644908958879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1687335759171!5m2!1sen!2sbd"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <form action="https://formspree.io/f/xyyaroov" method="POST">
              <div className="grid grid-cols-1 gap-3  md:grid-cols-2">
                <div>
                  <label className="label">
                    <span className="label-text]">Name</span>
                  </label>
                  <input
                    className="w-full border  border-[#8879FB]  text-gray-900  mt-0 p-3 rounded-sm focus:outline-none focus:border-[#8879FB]"
                    type="text"
                    name="name"
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text]">Email</span>
                  </label>
                  <input
                    className="w-full  border  border-[#8879FB]  text-gray-900  p-3 rounded-sm focus:outline-none focus:border-[#8879FB]"
                    type="email"
                    name="email"
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text]">Subject / Issues</span>
                  </label>
                  <input
                    className="w-full   border  border-[#8879FB]  text-gray-900  p-3 rounded-sm focus:outline-none focus:border-[#8879FB]"
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
                    className="w-full  border  border-[#8879FB] text-gray-900  p-3 rounded-sm focus:outline-none focus:border-[#8879FB]"
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
                    className="w-full h-32 text-gray-900  border  border-[#8879FB]  p-3 rounded-sm focus:outline-none focus:border-[#8879FB]"
                  ></textarea>
                </div>
              </div>

              <div className="my-2 w-full ">
                <button
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide bg-[#8879FB] text-gray-100 p-5 lg:p-3 rounded-sm w-full
                      focus:outline-none focus:shadow-outline mt-6 lg:mt-0 lg:ml-0"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
