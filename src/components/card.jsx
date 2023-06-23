import { AiOutlineSearch } from 'react-icons/ai';
import { BsBoundingBoxCircles, BsFire, BsHousesFill } from 'react-icons/bs';
import { FaBed, FaShower } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import IconBtn from './ui/Icon-Btn';
import Tag from './ui/Tag';
import QuickView from './quick-view';
import { useState } from 'react';
export default function Heading() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={
        'flex group card flex-col relative shadow transition-all hover:rounded-none duration-500 rounded-lg overflow-hidden'
      }
    >
      <div className='relative mb-6 overflow-hidden h-72 group image-container'>
        <img
          className='object-cover object-bottom w-full h-full transition-all duration-1000 ease-out delay-100 hover:brightness-75 hover:scale-105'
          src='https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=421&q=80'
          alt=''
        />
        <div className='absolute z-10 flex gap-2 bottom-3 right-3'>
          <IconBtn>
            <AiOutlineSearch onClick={() => setIsOpen(true)} />
          </IconBtn>
        </div>
      </div>
      <div className='pb-5 pl-5 space-y-3 transition-all duration-1000 delay-150'>
        <p className='flex items-center gap-2 text-sm font-semibold tracking-wider text-primary'>
          <BsHousesFill />
          Apartment
        </p>
        <p className='tracking-wider text-slate-800'>Apollo Family House</p>
        <p className='flex items-center gap-1 text-sm tracking-wider text-slate-500'>
          <MdLocationOn className='text-primary' /> 2305 Tree Frog Lane
          Overlandpk
        </p>
        <div className='flex items-center gap-3 text-sm text-slate-500'>
          {data.map((el) => (
            <p key={el.value} className='flex items-center gap-3 my-3'>
              {el.icon} {el.value}
            </p>
          ))}
        </div>
        <h4 className='flex items-center gap-3 text-2xl font-bold text-primary'>
          $12000{' '}
          <span className='text-base font-normal text-slate-400'>
            (1 month)
          </span>
        </h4>
      </div>
      <div className='absolute flex gap-2 top-3 left-3'>
        <Tag secondary>For Rent</Tag>
        <Tag primary>Featured</Tag>
      </div>
      <QuickView isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

const data = [
  {
    icon: <FaBed />,
    value: 7,
  },
  {
    icon: <FaShower />,
    value: 5,
  },
  {
    icon: <BsBoundingBoxCircles />,
    value: '1200 sqft',
  },
  {
    icon: <BsFire />,
    value: 'Yes',
  },
];
