import { MagnifyingGlass } from 'react-loader-spinner';

export default function SearchLoader() {
  return (
    <>
      <MagnifyingGlass
        visible={true}
        height='80'
        width='80'
        ariaLabel='MagnifyingGlass-loading'
        wrapperClass='mx-auto my-20 '
        glassColor='#c0efff'
        color='#7c6ee4'
      />
    </>
  );
}
