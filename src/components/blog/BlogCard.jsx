import React from "react";

const BlogCard = ({ blog }) => {
  const { _id, image, title, content, author, date } = blog;
  return (
    <section>
      <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
        <img className="object-cover w-full lg:mx-6 lg:w-2/5 rounded-xl h-72 lg:h-96" src={image} alt="" />

        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
          <p className="text-sm uppercase">
            {" "}
            <span className="text-[#8879FB] font-bold">Author:</span> {author}
          </p>

          <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
            {title}
          </a>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">{content.slice(0, 350)}...</p>
          <p className="mt-3 text-xl font-semibold">{date}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
