import { cn } from '../../lib/utils';

export default function Button({ className, ghost, full, sm, ...props }) {
  return (
    <button
      className={cn(
        'whitespace-nowrap bg-[#7C6EE4] hover:bg-[#9f95e9] text-center text-[16px] px-5 py-2 text-white  transition-all',
        {
          'bg-transparent px-5 text-black ring-0 hover:bg-primary/10': ghost,
          ' py-2': sm,
          'w-full px-0': full,
        },
        className
      )}
      {...props}
    />
  );
}
