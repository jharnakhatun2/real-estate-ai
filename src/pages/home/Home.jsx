import Contact from 'components/contact/Contact';
import Hero from 'components/hero/Hero';
import ImageLoader from 'components/image-loader';
import Modal from 'components/modal';
import GoToTop from 'components/ui/go-to-top';
import FeaturedProperties from 'features/featured-properties';

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <SearchLoader /> */}
      <ImageLoader />
      <Contact />
      <FeaturedProperties />
      <GoToTop />
      <Modal />
    </main>
  );
}
