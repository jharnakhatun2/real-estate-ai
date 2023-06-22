import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/routes/Routes';

function App() {
  return (
    <div className="font-sen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
