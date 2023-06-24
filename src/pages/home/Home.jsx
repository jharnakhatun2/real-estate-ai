import Contact from 'components/contact/Contact';
import Hero from 'components/hero/Hero';
import Modal from 'components/modal';
import SearchLoader from 'components/ui/Search-Loader';
import FeaturedProperties from 'features/featured-properties';

export default function Home() {
  return (
    <main>
      <Hero />
      <SearchLoader />
      <Contact />
      <FeaturedProperties />
      <Modal />
    </main>
  );
}
