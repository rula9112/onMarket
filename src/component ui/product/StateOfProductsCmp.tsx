
import {  SkeletonProps } from "@/src/types/Product";

export  function SkeletonLoading({ variant = 'normal', className = '' }: SkeletonProps) {
const imgHeight = variant === 'compact' ? 'h-40' : 'h-64';
return (
<div className={`group overflow-hidden rounded-3xl border border-olive-100 bg-white shadow-sm ${className}`}>
<div className={`relative overflow-hidden ${imgHeight}`}>
<div className="h-full w-full animate-pulse bg-olive-100" />
</div>

<div className="p-4">
<div className="mb-3 h-5 w-3/4 animate-pulse rounded bg-olive-100" />
<div className="flex items-center gap-2 mt-3">
<div className="h-6 w-1/3 animate-pulse rounded bg-olive-100" />
<div className="ml-auto h-4 w-1/4 animate-pulse rounded bg-olive-100" />
</div>

<div className="mt-4 flex gap-2">
<div className="h-9 flex-1 animate-pulse rounded bg-olive-100" />
<div className="h-9 w-32 animate-pulse rounded bg-olive-100" />
</div>
</div>
</div>
);
}
