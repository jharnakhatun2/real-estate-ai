export default function DisplayboardButton({children}) {
  return (
    <div>
        <a
            href="#_"
            className="relative px-5 py-2.5 overflow-hidden group bg-[#7C6EE4] hover:bg-gradient-to-r hover:from-[#7C6EE4] hover:to-[#9f95e9] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#9f95e9] transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease" />
            <span className="relative">{children}</span>
          </a>
    </div>
  )
}
