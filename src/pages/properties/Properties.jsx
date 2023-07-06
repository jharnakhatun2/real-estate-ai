import { useEffect, useState } from "react";
// import Loading from "ui/loading/Loading";
import PropertiesCard from "./propertiesCard";
import { fetchProducts } from "api/ai";
import Loading from "ui/loading/Loading";
import useTitle from "hook/useTitle";
import DisplayModal from "./DisplayModal";

export default function Properties() {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [propertyData, setPropertyData] = useState(null);
  useTitle("Properties");
  useEffect(() => {
    setIsLoading(true)
    fetchProducts()
      .then((data) => {
        console.log(data.data);
        setProductData(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto pt-20 md:pt-24 lg:pt-28 pb-10 lg:pb-20 px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">       
          {productData &&
            productData?.map((product) => <PropertiesCard 
            key={product._id} 
            product={product}
            setPropertyData={setPropertyData}
            ></PropertiesCard>)}
        </div>
        {
          propertyData &&
          <DisplayModal 
          propertyData={propertyData}
          ></DisplayModal>
        }
        
      </div>
    </div>
  );
}
