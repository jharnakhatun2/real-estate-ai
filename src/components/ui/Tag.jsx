import { cn } from '../../lib/utils';

export default function Tag({ primary, secondary, children }) {
  return (
    <div
      className={cn('px-4 py-1.5 w-max text-sm', {
        'bg-slate-800 text-slate-50': secondary,
        'bg-primary text-white': primary,
      })}
    >
      {children}
    </div>
  );
}
