import Link from "next/link";
import { Button } from "../ui/Button";

export default function EmptyCart() {
  return (
    <div>
    <div
      className="
        flex flex-col
        items-center
        justify-center
        py-10
      "
    >
      <div
        className="
          w-28 h-28
          rounded-full
          bg-zinc-100
          flex items-center justify-center
          text-5xl
        "
      >
        🛒
      </div>

      <h2 className="mt-6 text-2xl font-bold">
        السلة فارغة
      </h2>

      <p className="mt-2 text-zinc-500">
        ابدأ بإضافة منتجاتك المفضلة
      </p>
{/* 
      <button
        className="
          mt-6
          px-6 py-3
          rounded-2xl
          bg-black
          text-white
        "
      >
        متابعة التسوق
      </button> */}
      <Link href={'/'}>
      <Button className="w-50 mt-6">
         متابعة التسوق
      </Button>
       </Link>
    </div>
    </div>

  )
}
