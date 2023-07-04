import { PDFDownloadLink } from '@react-pdf/renderer';
import { savePropertyToDb } from 'api/ai';
import imageLoading from 'assets/Animation/image-3-loading.json';
import { AuthContext } from 'context/authProvider/AuthProvider';
import Lottie from "lottie-react";
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import PDFFile from 'ui/pdf/PDF';

export default function DisplayBoard({ propertyData, loading }) {
  const { createdText, imageUrl, valuationCost } = propertyData || {};
  const { user } = useContext(AuthContext);
  // splited text
  // const splitedText = createdText?.split(". ");

  const handleSaveProperty = () => {
    const data = {
      userName: user?.displayName,
      userEmail: user?.email,
      userImage: "https://i.pravatar.cc/400",
      propertyImage: imageUrl,
      description: createdText,
      createdAt: new Date().toJSON(),
      valuationCost,
    };
    // save to db
    savePropertyToDb(data)
      .then((data) => {
        console.log(data);
        if (data?.data.acknowledged) {
          toast.success("Data saved Successfully");
        }
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  }

  return (
    <div className={!createdText && !loading && "flex justify-center items-center h-screen border-dashed border-2 m-4 border-slate-300"}>
      <div className="p-4">
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
              (
                <div className="mt-4">
                  <p className="text-lg font-bold">{valuationCost}</p>
                  <p className="text-justify">{createdText}</p>
                </div>
              )
          }
          {/* {
            splitedText?.map((text, i) => (
              <p key={i} className="text-sm text-justify">{text}</p>
            ))
          } */}
          {/* save button */}
          {
            !loading && createdText && (
              <div className="flex mt-4 justify-center bg-white border divide-x rounded-lg rtl:flex-row-reverse">
                <button onClick={handleSaveProperty} className="px-4 py-3 w-full text-sm font-semibold text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 hover:bg-indigo-100">
                  Save Property
                </button>
                <button className="px-2 py-2 w-full text-sm font-semibold text-gray-600 transition-colors duration-200 sm:text-base sm:px-2 hover:bg-indigo-100">
                  Download as PDF
                </button>
              </div>
            )
          }
        </div>
        {/* generate pdf */}
        <div>
          <PDFDownloadLink document={<PDFFile
            image={imageUrl}
            text={createdText}
            valuationCost={valuationCost}
          />} fileName="example.pdf">
            {({ loading }) =>
              loading ? <button className="px-2 py-2 w-full text-sm font-semibold text-gray-600 transition-colors duration-200 sm:text-base sm:px-2 hover:bg-indigo-100">Loading document...</button> : <button className="px-2 py-2 w-full text-sm font-semibold text-gray-600 transition-colors duration-200 sm:text-base sm:px-2 hover:bg-indigo-100">Download now</button>
            }
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  )
}
