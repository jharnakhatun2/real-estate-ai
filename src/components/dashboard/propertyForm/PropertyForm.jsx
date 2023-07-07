import { useState } from "react";
import DisplayBoard from "./DisplayBoard";
import Form from "./Form";
import useTitle from "hook/useTitle";

export default function PropertyForm() {
  const [propertyData, setPropertyData] = useState(null);
  useTitle('Dashboard');
  const [loading, setLoading] = useState(false);
  return (
    <div className="bg-[url('/assets/images/about.png')] bg-fixed">
      <div className="flex flex-col lg:flex-row pt-24 container mx-auto px-4 md:px-2 xl:px-0 gap-5">
        <div>
          <Form setPropertyData={setPropertyData} setLoading={setLoading} />
        </div>
        <div className="bg-indigo-50 w-full lg:w-[50%] overflow-y-auto h-[100%] sticky top-36 px-4 lg:px-0">
          <DisplayBoard loading={loading} propertyData={propertyData}/>
        </div>
      </div>
    </div>
  );
}
