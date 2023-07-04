import buildingLoading from 'assets/Animation/building-loading.json';
import Lottie from "lottie-react";

export default function Loading() {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="lg:w-1/2">
        {/* lottie */}
        <Lottie className="aspect-square lg:aspect-auto p-40 lg:mt-0" animationData={buildingLoading} loop={true} />
      </div>
    </section>
  )
}