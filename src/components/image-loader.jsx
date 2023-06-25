import { Suspense, lazy, useEffect, useState } from 'react';
import LoaderLottie from './ui/loader';
const Image = lazy(() => import('./image'));

export default function ImageLoader() {
  const [img, setImg] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) =>
        setTimeout(() => {
          setImg(data[0]);
        }, 1000)
      );

    return () => {};
  }, []);

  return (
    <Suspense fallback={<LoaderLottie />}>
      <Image />
    </Suspense>
  );
  // <div className='mx-auto duration-75 bg-gray-500 w-96 aspect-video animate-pulse rounded-2xl' />
}
