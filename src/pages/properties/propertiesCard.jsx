export default function PropertiesCard({ product,setPropertyData }) {
  const { userName, description, propertyImage, valuationCost } = product;
  return (
    <div className="mx-auto w-full">
      <div className="shadow p-4 rounded-lg bg-white">
        <div className=" rounded-lg overflow-hidden h-52">
          <div className="relative transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
            <img
              src={propertyImage}
              className="object-cover object-center w-full h-56"
              alt=""
            />
            <div className="absolute transition-opacity duration-500 ease-linear opacity-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -ms-transform text-center">
              <div className="bg-primary text-white text-base px-8 py-4">
                Jharna
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="mt-5 inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
            {valuationCost}
          </p>
        </div>
        <div className="my-2">{description?.slice(0, 90) + "..."}</div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="rounded-full w-6 h-6 md:w-8 md:h-8 overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="bg-primary"
                viewBox="0 0 576 512"
              >
                <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.6 483.2 483.9 512 448.5 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5H575.8zM288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM256 320C211.8 320 176 355.8 176 400C176 408.8 183.2 416 192 416H384C392.8 416 400 408.8 400 400C400 355.8 364.2 320 320 320H256z" />
              </svg>
            </div>
            <p className="ml-2 text-gray-800 line-clamp-1">{userName}</p>
          </div>
          <div>
            {/* The button to open modal */}
            <label
              htmlFor="display-modal"
              className="bg-primary text-white text-sm py-[10px] px-[8px] rounded hover:bg-gradient-to-r hover:from-blue-500 hover:to-[#7C6EE4] transition"
              onClick={()=>setPropertyData(product)}
            >
              View Details
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
