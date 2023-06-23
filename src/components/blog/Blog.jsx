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
          <h1 className="text-3xl font-bold mb-10">From Our Blog</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog}></BlogCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
