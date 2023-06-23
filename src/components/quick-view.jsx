import { Dialog } from '@headlessui/react';
import { cn } from 'lib/utils';
import { useEffect } from 'react';

export default function QuickView({ isOpen, setIsOpen }) {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel
        className={cn(
          ' fixed inset-0 z-20 grid place-content-center m-auto overflow-y-scroll'
        )}
      >
        <div className='relative grid grid-cols-2 p-6 bg-white '>
          <div className='h-full'>
            <img
              src='https://images.unsplash.com/photo-1687410940869-fd728009a1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
              className='w-full h-full'
            />
          </div>
          <div
            onClick={() => setIsOpen(false)}
            className='absolute grid text-white bg-black hover:bg-black/70 w-7 h-7 place-content-center right-2 top-2'
          >
            x
          </div>
        </div>
      </Dialog.Panel>

      <div className='fixed inset-0 z-10 bg-black/80' />
    </Dialog>
  );
}
