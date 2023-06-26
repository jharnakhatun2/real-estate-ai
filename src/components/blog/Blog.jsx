import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/public/blogsData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <section className="mt-12 mb-20">
      <div className="mx-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-10">
            From Our <span className="text-[#8879FB]">Blog</span>{" "}
          </h1>
        </div>
        <div className="">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog}></BlogCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
