// @/src/component ui/SearchBar.tsx (أو المسار الصحيح للملف)
'use client';

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams.toString());

    if (value) params.set("q", value);
    else params.delete("q");

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="ابحث عن المنتجات..."
        className="
          w-full
          h-14
          rounded-2xl
          shadow-inner
          border border-zinc-200
          px-14
          text-sm
          outline-none
          focus:border-black
          focus:bg-white
          transition-all
        "
        onChange={handleChange}
      />
      <div
        className="
          absolute
          top-1/2 left-5
          -translate-y-1/2
          text-zinc-400
        "
      >
        🔍
      </div>
    </div>
  );
}

export default function SearchBar() {
  return (
    <Suspense fallback={<div className="text-zinc-500">جاري تحميل شريط البحث...</div>}>
      <SearchContent />
    </Suspense>
  );
}