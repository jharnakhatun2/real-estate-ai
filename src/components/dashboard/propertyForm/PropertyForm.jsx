import { useState } from "react";
import DisplayBoard from "./DisplayBoard";
import Form from "./Form";

export default function PropertyForm() {
  const [propertyData, setPropertyData] = useState(null);
  return (
    <div className="bg-[url('/assets/images/about.png')] bg-fixed">
      <div className="flex flex-col lg:flex-row pt-28 px-5 md:px-10 lg:px-20 gap-5">
        <div>
          <Form setPropertyData={setPropertyData}/>
        </div>
        <div className="bg-gray-200 w-full lg:w-[50%] overflow-y-auto h-[100%] sticky top-32 px-4 lg:px-0">
          <DisplayBoard propertyData={propertyData}/>
        </div>
      </div>
    </div>
  );
}
