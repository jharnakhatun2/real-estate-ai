import Heading from '../components/ui/Heading';
import Card from '../components/card';

export default function FeaturedProperties() {
  return (
    <div className='p-2 md:p-10 lg:p-20'>
      <Heading>Featured Properties</Heading>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <Card />
      </div>
    </div>
  );
}
