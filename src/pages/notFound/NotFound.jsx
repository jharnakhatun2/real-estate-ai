/* eslint-disable react/no-unescaped-entities */
import { useNavigate, useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  console.log("🚀 ~ file: NotFound.jsx:5 ~ NotFound ~ error:", error);

  const navigate = useNavigate();
  const goBack = () => {
    history.back();
  };
  
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2 text-center md:text-left">
            <h1 className="mt-3 text-2xl text-center lg:text-left font-semibold text-gray-800 dark:text-white md:text-3xl">An error has occurred</h1>
          <p className="mt-4 text-xl text-gray-500 text-center lg:text-left dark:text-gray-400">
            <em>{error.statusText || error.message}</em>
          </p>
            <div className="flex justify-center lg:justify-start items-center mt-6 gap-x-3">
            <button onClick={goBack} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-sm gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <span>Go back</span>
              </button>
            <button onClick={() => navigate('/')} className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-indigo-500 rounded-sm shrink-0 sm:w-auto hover:bg-indigo-600 dark:hover:bg-indigo-500 dark:bg-indigo-600">
                Take me home
              </button>
            </div>
          </div>
          <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <img className="w-full lg:mx-auto" src="https://merakiui.com/images/components/illustration.svg" alt="404" />
          </div>
        </div>
      </section>
  )
}