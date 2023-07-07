import  { useEffect, useState } from 'react';
import PropertiesCard from './propertiesCard';
import { fetchProducts } from 'api/ai';
import Loading from 'ui/loading/Loading';
import useTitle from 'hook/useTitle';
import DisplayModal from './DisplayModal';
import Pagination from './Pagination';

export default function Properties() {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [propertyData, setPropertyData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 12;

  useTitle('Properties');

  useEffect(() => {
    setIsLoading(true);
    fetchProducts()
      .then((data) => {
        setProductData(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const pageCount = Math.ceil(productData.length / productsPerPage);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = productData.slice(startIndex, endIndex);

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto pt-20 md:pt-24 lg:pt-28 pb-10 lg:pb-20 px-5 md:px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {displayedProducts.map((product) => (
            <PropertiesCard
              key={product._id}
              product={product}
              setPropertyData={setPropertyData}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          pageCount={pageCount}
          onPageChange={handlePageChange}
        />
        {propertyData && <DisplayModal propertyData={propertyData} />}
      </div>
    </div>
  );
}