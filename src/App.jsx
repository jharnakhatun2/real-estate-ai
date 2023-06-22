import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    <Toaster />
    </>
  );
}

export default App;
