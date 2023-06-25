import image from '../assets/bg/real-estate-3.jpg';

export default function Image() {
  return (
    <>
      {' '}
      <img
        src={image}
        loading='lazy'
        className='mx-auto w-96 aspect-video '
        alt=''
      />
    </>
  );
}
