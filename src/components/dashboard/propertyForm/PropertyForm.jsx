import { useState } from "react";
import DisplayBoard from "./DisplayBoard";
import Form from "./Form";
import useTitle from "hook/useTitle";

export default function PropertyForm() {
  const [propertyData, setPropertyData] = useState(null);
  useTitle('Dashboard');
  return (
    <div className="bg-[url('/assets/images/about.png')] bg-fixed">
      <div className="flex flex-col lg:flex-row pt-24 container mx-auto px-2 md:px-2 gap-5">
        <div>
          <Form setPropertyData={setPropertyData}/>
        </div>
        <div className="bg-indigo-50 w-full lg:w-[50%] overflow-y-auto h-[100%] sticky top-36 px-4 lg:px-0">
          <DisplayBoard propertyData={propertyData}/>
        </div>
      </div>
    </div>
  );
}
