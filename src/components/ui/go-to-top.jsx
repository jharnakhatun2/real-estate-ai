import { useEffect, useRef } from 'react';

export default function GoToTop() {
  const goToTopRef = useRef(null);
  useEffect(() => {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 700 ||
        document.documentElement.scrollTop > 700
      ) {
        goToTopRef.current.classList.remove('hidden');
      } else {
        goToTopRef.current.classList.add('hidden');
      }
    };

    return () => {};
  }, []);

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <button
        onClick={goToTop}
        ref={goToTopRef}
        title='Go To Top'
        className='fixed z-50 hidden p-4 text-lg font-semibold text-white transition-colors duration-300 border-0 rounded-full shadow-md bg-primary bottom-10 right-10 w-14 h-14 hover:bg-primary/80'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-6 h-6'
        >
          <path d='M12 4l8 8h-6v8h-4v-8H4l8-8z' />
        </svg>
        <span className='sr-only'>Go to top</span>
      </button>
    </>
  );
}
