import { cn } from '../../lib/utils';

export default function Button({ className, ghost, full, sm, ...props }) {
  return (
    <button
      className={cn(
        'whitespace-nowrap rounded-full bg-primary px-16 py-3 text-center font-roboto font-semibold text-white ring-2 ring-primary/80 transition-all hover:bg-primary/80',
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
