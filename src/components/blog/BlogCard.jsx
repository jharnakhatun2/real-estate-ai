import React from "react";

const BlogCard = ({ blog }) => {
  const { _id, image, title, description, date } = blog;
  return (
    <section>
      <div>
        <img className="relative z-10 object-cover w-full rounded-md h-96" src={image} alt="" />

        <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
          <h2 className="font-semibold text-gray-800  dark:text-white md:text-xl">{title}</h2>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">{description.slice(0, 350)}...</p>

          <p className="mt-3 text-md text-[#8879FB]">{date}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
