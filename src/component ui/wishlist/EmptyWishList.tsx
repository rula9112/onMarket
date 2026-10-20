import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "../ui/Button";

export default function EmptyWishlist() {
  return (
    <div
      className="
        flex flex-col items-center justify-center rounded-3xl border border-dashed
        border-olive-200 bg-gradient-to-b from-olive-50/80 to-white px-5 py-12
        text-center sm:py-16 md:py-20
      "
    >
      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-orange-100 bg-white text-red-400 shadow-sm ring-8 ring-olive-50 sm:h-28 sm:w-28">
        <Heart className="h-11 w-11 fill-current sm:h-12 sm:w-12" strokeWidth={1.5} />
      </div>

      <h2 className="mt-8 text-2xl font-bold text-olive-950 sm:text-3xl">
        لا توجد منتجات بالمفضلة
      </h2>

      <p className="mt-3 max-w-md text-sm leading-6 text-olive-600 sm:text-base">
        قم بحفظ المنتجات التي تعجبك لتعود إليها لاحقًا بسهولة
      </p>

      <Link href={'/'} className="mt-7 w-full sm:w-auto">
        <Button
          variant="primary"
          className="!mt-0 !w-full !rounded-2xl !px-8 !font-semibold shadow-sm sm:!w-auto"
        >
          استكشاف المنتجات
        </Button>
      </Link>
    </div>
  )
}