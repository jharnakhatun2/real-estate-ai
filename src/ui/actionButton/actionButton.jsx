export default function ActionButton({ children }) {
  return (
    <button className="inline-flex items-center bg-primary text-white w-full md:w-auto text-md px-8 py-3 rounded-sm shadow hover:bg-gradient-to-r hover:from-blue-500 hover:to-[#7C6EE4] transition">
      {children}{" "}
      <svg
        className="w-4 h-4 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        ></path>
      </svg>
    </button>
  );
}
