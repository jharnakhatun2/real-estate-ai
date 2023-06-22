export default function IconBtn({ children }) {
  return (
    <div className='p-3 text-white duration-500 rounded cursor-pointer hover:bg-slate-600/100 bg-slate-600/70 translate-all'>
      {children}
    </div>
  );
}
