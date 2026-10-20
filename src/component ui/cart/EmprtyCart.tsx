import Link from "next/link";
import { Button } from "../ui/Button";

export default function EmptyCart() {
  return (
    <div
      className="
        flex flex-col items-center justify-center rounded-3xl border border-dashed
        border-olive-200 bg-gradient-to-b from-olive-50/80 to-white px-5 py-12
        text-center sm:py-16
      "
    >
      <div
        className="
          flex h-24 w-24 items-center justify-center rounded-full border
          border-orange-100 bg-white text-5xl shadow-sm ring-8 ring-olive-50
          sm:h-28 sm:w-28 sm:text-6xl
        "
      >
        🛒
      </div>

      <h2 className="mt-8 text-2xl font-bold text-olive-950 sm:text-3xl">
        السلة فارغة
      </h2>

      <p className="mt-3 max-w-sm text-sm leading-6 text-olive-600 sm:text-base">
        ابدأ بإضافة منتجاتك المفضلة
      </p>
      <Link href={'/'} className="mt-7 w-full sm:w-auto">
        <Button className="!mt-0 !w-full !rounded-2xl !px-8 !font-semibold shadow-sm sm:!w-auto">
          متابعة التسوق
        </Button>
      </Link>
    </div>
  )
}
