import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/public/blogsData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <section className="bg-gray-100">
      <div className="container px-10 pt-20 md:pt-28 lg:pt-28 pb-20">
      <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-2xl lg:text-4xl font-bold tracking-tight text-gray-900 ">Our Blogs</h2>
      <div className="divider my-1 bg-primary h-[5px] w-[5%] "></div>
      <p className=" text-gray-600">Learn about the benefits, possibilities, and potential of using advanced language models to create compelling property listings. Stay ahead of the curve and unlock the future of property generation with OpenAI</p>
    </div>
    <div className="divider mt-0"></div>
        <div>
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
