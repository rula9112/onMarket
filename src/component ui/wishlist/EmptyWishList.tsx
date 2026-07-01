import Link from "next/link";
import { Button } from "../ui/Button";

export default function EmptyWishlist() {
  return (
    <div
      className="
        flex flex-col
        items-center
        justify-center
        py-24
      "
    >
      <div
        className="
          w-32 h-32
          rounded-full
          bg-red-200
          shadow-sm
          flex items-center justify-center
          text-6xl
        "
      >
        ❤️
      </div>

      <h2
        className="
          mt-8
          text-3xl
          font-bold
          text-zinc-900
        "
      >
        لا توجد منتجات بالمفضلة
      </h2>

      <p
        className="
          mt-3
          text-zinc-500
          text-center
          max-w-md
        "
      >
        قم بحفظ المنتجات التي تعجبك لتعود إليها لاحقًا بسهولة
      </p>

      <Link href={'/'}>
       <Button
      variant='primary'
        className="mt-8 w-50"
      >
        استكشاف المنتجات
      </Button>
      </Link>
     
    </div>
  )
}