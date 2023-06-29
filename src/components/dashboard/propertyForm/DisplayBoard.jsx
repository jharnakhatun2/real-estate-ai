import imageLoading from 'assets/Animation/image-3-loading.json';
import Lottie from "lottie-react";

export default function DisplayBoard({ propertyData, loading }) {
  const { createdText, imageUrl } = propertyData || {};
  // splited texxt
  // const splitedText = createdText?.split(". ");
  return (
    <div className={!createdText && !loading && "flex justify-center items-center h-screen border-dashed border-2 m-4 border-slate-300"}>
      <div className="p-8">
        <div>
          {
            loading ?
              <div>
                <Lottie
                  className="aspect-square w-full p-4 -mt-10"
                  animationData={imageLoading}
                  loop={true} />
              </div>
              :
              <img className={`w-full aspect-square ${imageUrl || "hidden"} rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]`} src={imageUrl} alt="property" />
          }
        </div>
        {
          !createdText && !loading && (
            <div>
              <h2 className="text-center font-bold text-6xl text-slate-400">Generate Now</h2>
            </div>
          )
        }
        <div>
          {
            loading ?
              (
                <div className="w-full max-w-full mx-auto animate-pulse p-2 pb-4 -mt-20">
                  <h1 className="h-4 bg-gray-500 rounded-lg w-3/4"></h1>
                  <p className="w-5/6 h-4 mt-6 bg-gray-400/80 rounded-lg"></p>
                  <p className="w-full h-4 mt-4 bg-gray-400/80 rounded-lg"></p>
                  <p className="w-64 h-4 mt-4 bg-gray-400/80 rounded-lg"></p>
                  <p className="w-4/5 h-4 mt-4 bg-gray-400/80 rounded-lg"></p>
                  <p className="w-full h-4 mt-4 bg-gray-400/80 rounded-lg"></p>
                  <p className="w-5/6 h-4 mt-4 bg-gray-400/80 rounded-lg"></p>
                  <p className="w-11/12 h-4 mt-4 bg-gray-400/80 rounded-lg"></p>
                  <p className="w-full h-4 mt-4 bg-gray-400/80 rounded-lg"></p>
                </div>
              )
              :
              <p className="mt-4 text-justify">{createdText}</p>
            
          }
          {/* {
            splitedText?.map((text, i) => (
              <p key={i} className="text-sm text-justify">{text}</p>
            ))
          } */}
        </div>
      </div>
    </div>
  )
}
