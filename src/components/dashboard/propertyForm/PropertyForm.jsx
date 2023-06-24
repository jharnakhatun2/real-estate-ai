import Form from "./Form";

export default function PropertyForm() {
  return (
    <div className="bg-[url('/assets/images/about.png')] bg-fixed">
      <div className="flex flex-col lg:flex-row pt-28 px-5 md:px-10 lg:px-20">
        <div>
          <Form />
        </div>
        <div className="w-full lg:w-[40%] overflow-y-auto h-[100%] sticky top-32 px-4 lg:px-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </div>
  );
}
