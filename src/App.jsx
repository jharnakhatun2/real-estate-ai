import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
<<<<<<< HEAD
    <>
    <RouterProvider router={router}/>
    <Toaster />
    </>
=======
    <div className="font-sen">
      <RouterProvider router={router} />
    </div>
>>>>>>> stage
  );
}

export default App;
