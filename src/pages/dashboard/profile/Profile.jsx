export default function Profile() {
  return (
    <section className="border text-gray-200 bg-gradient-to-r from-[#60a5fa] to-[#60a5fa] ... mx-auto rounded-3xl border-none p-20 m-10 mt-20 w-3/4">
      <div className="block md:flex gap-4 w-3/4 mx-auto">
        <div className="">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-[#0056D6] ring-offset-base-100 ring-offset-2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBRdmz3LadjgP_7giopi8RU6TJQgE-9IZaYXSJYWHuFv3ty1vbrgMiiU6XqdhxXyFqJqU&usqp=CAU" />
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-xl font-semibold">Name: MD. Atikur Rahman</h1>
          <h1 className="text-xl font-semibold">Email: atik@gmail.com</h1>
          <h1 className="text-xl font-semibold">Role: User</h1>
        </div>
      </div>
    </section>
  );
}
