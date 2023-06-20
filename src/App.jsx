import './App.css';
import Navbar from './components/Navbar';
import Modal from './components/modal';
import FeaturedProperties from './features/featured-properties';

function App() {
  return (
    <main>
      <Navbar />
      <FeaturedProperties />
      <Modal />
    </main>
  );
}

export default App;
