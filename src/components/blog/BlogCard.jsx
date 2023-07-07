import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  const { _id, image, title, content, author, date } = blog;
  return (
    <section>
      <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
        <img
          className="object-cover w-full lg:mx-6 lg:w-2/5 rounded-xl h-72 lg:h-52"
          src={image}
          alt=""
        />

        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
          <p className="text-sm uppercase">
            {" "}
            <span className="text-[#8879FB] font-bold">Author:</span> {author}
          </p>

          <a
            href="#"
            className="block mt-3 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
          >
            {title}
          </a>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            {content.slice(0, 350)}...
          </p>
          <div className="flex justify-between items-center">
            <p className="mt-3 text-xl font-semibold">{date}</p>
            <Link to={`/blog/${_id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="bi bi-box-arrow-in-right text-primary"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  fillRule="evenodd"
                  d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                />{" "}
                <path
                  fillRule="evenodd"
                  d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />{" "}
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
