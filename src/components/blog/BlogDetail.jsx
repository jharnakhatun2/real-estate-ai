import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function BlogDetail() {
  const [blog, setBlog] = useState({});
  const { _id } = useParams();
  console.log(blog)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/blogsData.json');
        const data = await response.json();

        // Assuming the blogs are stored in an array in the JSON file
        const selectedBlog = data.find(blog => blog._id === _id);

        if (selectedBlog) {
          setBlog(selectedBlog);
        } else {
          console.error('Blog not found');
          // Handle the case when the blog is not found, e.g., display an error message or redirect
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchData();
  }, [_id]);

  return (
    <div className="bg-gray-100 py-12 md:py-16 px-6 md:px-5">
      <div className="max-w-screen-xl mx-auto ">
        {/* header ends here */}
        <main className="mt-10">
          <div
            className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
            style={{ height: "24em" }}
          >
            <img
              src={blog?.image}
              className="absolute left-0 top-0 w-full h-full z-0 object-cover"
            />
          </div>
          <div className="flex items-center justify-between w-full max-w-screen-md mx-auto py-1 md:py-5 lg:py-5">
          <div className="flex items-center">
            <div className="rounded-full w-6 h-6 md:w-8 md:h-8 overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="bg-white"
                viewBox="0 0 576 512"
              >
                <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.6 483.2 483.9 512 448.5 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5H575.8zM288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM256 320C211.8 320 176 355.8 176 400C176 408.8 183.2 416 192 416H384C392.8 416 400 408.8 400 400C400 355.8 364.2 320 320 320H256z" />
              </svg>
            </div>
            <p className="ml-2 text-primary font-bold line-clamp-1">{blog?.author}</p>
          </div>
          <p>Date: <span className="font-semibold">{blog?.date}</span></p>
          </div>
          <div className=" text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
            <h2 className="text-[21px] md:text-2xl lg:text-2xl text-gray-800 font-semibold mb-2">
            {blog?.title}
            </h2>
            <p className="text-[16px]">
              {blog?.content}
            </p>
          </div>
        </main>
        {/* main ends here */}
      </div>
    </div>
  );
}
