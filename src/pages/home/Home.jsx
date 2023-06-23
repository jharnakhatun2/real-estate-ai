import Contact from 'components/contact/Contact';
import Hero from 'components/hero/Hero';
import FeaturedProperties from 'features/featured-properties';

export default function Home() {
  return (
    <main>
      <Hero />
      <Contact />
      <FeaturedProperties />
    </main>
  );
}
