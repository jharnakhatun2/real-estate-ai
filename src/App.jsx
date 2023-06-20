import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/routes/Routes";

function App() {
  return (
    // <main className="text-3xl">
    //   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo earum eaque soluta dicta sapiente odio! Quas,
    //   incidunt reprehenderit nam ex nisi consequuntur, iste possimus dolore totam aspernatur hic, ut doloremque.
    // </main>
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
