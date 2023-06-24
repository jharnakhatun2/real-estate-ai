import DisplayBoard from "./DisplayBoard";
import Form from "./Form";

export default function PropertyForm() {
  return (
    <div className="bg-[url('/assets/images/about.png')] bg-fixed">
      <div className="flex flex-col lg:flex-row pt-28 px-5 md:px-10 lg:px-20 gap-5">
        <div>
          <Form />
        </div>
        <div className="bg-indigo-700 w-full lg:w-[50%] overflow-y-auto h-[100%] sticky top-32 px-4 lg:px-0">
          <DisplayBoard/>
        </div>
      </div>
    </div>
  );
}
