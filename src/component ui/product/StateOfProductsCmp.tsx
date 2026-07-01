
import {  SkeletonProps } from "@/src/types/Product";

export  function SkeletonLoading({ variant = 'normal', className = '' }: SkeletonProps) {
const imgHeight = variant === 'compact' ? 'h-40' : 'h-64';
return (
<div className={`group bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100 ${className}`}>
<div className={`relative overflow-hidden ${imgHeight}`}>
<div className="w-full h-full bg-zinc-200 animate-pulse" />
</div>

<div className="p-4">
<div className="h-5 bg-zinc-200 rounded w-3/4 mb-3 animate-pulse" />
<div className="flex items-center gap-2 mt-3">
<div className="h-6 bg-zinc-200 rounded w-1/3 animate-pulse" />
<div className="h-4 bg-zinc-200 rounded w-1/4 ml-auto animate-pulse" />
</div>

<div className="mt-4 flex gap-2">
<div className="flex-1 h-9 bg-zinc-200 rounded animate-pulse" />
<div className="w-32 h-9 bg-zinc-200 rounded animate-pulse" />
</div>
</div>
</div>
);
}

