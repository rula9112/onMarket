
'use client'


import { useRouter, useSearchParams } from "next/navigation";


export default function SearchBar() {


 const router = useRouter();
  const searchParams = useSearchParams();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams.toString());


    if (value) params.set("q", value);
    else params.delete("q");


    router.push(`?${params.toString()}`);
  };


  return( <div className="relative w-full">
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
    </div> );


  }