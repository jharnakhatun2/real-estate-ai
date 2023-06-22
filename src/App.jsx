import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Modal from './components/modal';
import FeaturedProperties from './features/featured-properties';

function App() {
  return (
    <main>
      <Navbar />
      <FeaturedProperties />
      <Modal />
      <Footer />
    </main>
  );
}

export default App;
