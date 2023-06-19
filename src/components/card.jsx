import { BsHousesFill, BsBoundingBoxCircles, BsFire } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { FaBed, FaShower } from 'react-icons/fa';
export default function Heading() {
  return (
    <div className={'grid grid-rows-2'}>
      <div className='mb-6 overflow-hidden h-72 group'>
        <img
          className='object-cover w-full h-full transition-all duration-1000 group-hover:scale-110'
          src='https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80'
          alt=''
        />
      </div>
      <div className='space-y-3'>
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
