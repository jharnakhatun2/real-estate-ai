import { Dialog } from '@headlessui/react';
import { cn } from 'lib/utils';
import { useEffect } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillTagsFill } from 'react-icons/bs';

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
        <div className='relative grid max-w-5xl grid-cols-2 gap-10 p-6 mt-32 bg-white '>
          <div className='h-full'>
            <img
              src='https://images.unsplash.com/photo-1687410940869-fd728009a1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
              className='w-full h-full'
            />
          </div>
          <div>
            {/* description section start */}
            <p className=' text-indigo-500 text-[15px] leading-7'>Condos</p>
            <p className=' text-gray-700 text-[20px] font-bold leading-loose'>
              Luxury Condos Infront of the street of Green Park
            </p>
            <p className=' flex items-center gap-2 text-zinc-500 text-[15px] leading-7'>
              <HiLocationMarker className='text-indigo-500' />
              2305 Tree Frog Lane Overlandpk, MO 66210
            </p>
            <p className=' text-neutral-400 text-[12px]  leading-7'>
              ( 100 People Recommended )
            </p>
            <div className=' text-gray-700 text-[20px]  leading-9'>
              $5600 - $8300/ mo
            </div>
            {Array.from(Array(3)).map((_) => (
              <div key={_} className='flex items-center gap-3'>
                <BsFillTagsFill className='text-indigo-500' />
                <p className=' text-zinc-900 text-[15px] '>Special Price</p>
                <p className=' text-zinc-500 text-[15px] '>
                  Get extra 19% off (price inclusive of discount)
                </p>
              </div>
            ))}
            <div className='h-px my-6 bg-zinc-500' />
            <div className=' text-zinc-500 text-[14px]  leading-normal'>
              Rooms: 5 Beds: 3 Bathrooms: 2 Garage: 1 Area: 1100 Sqft
            </div>
            <p className=' my-5 text-gray-700 text-[20px] font-bold leading-7'>
              Description
            </p>
            <div className='leading-7 text-zinc-500'>
              Bibendum purus aenean mus aenean eu interdum nonummy ipsum ad
              consequat. Dui eros donec faucibus convallis tempus rutrum id
              donec mus hymenaeos placerat congue curae mauris turpis gravida
              viverra consequat consequat gravida luctus.
            </div>
            {/* description section end */}
          </div>
          <div
            onClick={() => setIsOpen(false)}
            className='absolute grid text-white bg-black cursor-pointer hover:bg-black/70 w-7 h-7 place-content-center right-2 top-2'
          >
            x
          </div>
        </div>
      </Dialog.Panel>

      <div className='fixed inset-0 z-10 bg-black/80' />
    </Dialog>
  );
}
