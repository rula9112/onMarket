import { useAppSelector } from "@/src/lib/store/hooks";
import { StatCardProps } from "@/src/types/profile"

function StatCard({ title, value }: StatCardProps) {
  return (
    <div
      className="
        rounded-2xl border border-olive-100 bg-white p-4 shadow-sm
        transition-all hover:-translate-y-0.5 hover:border-orange-100 hover:shadow-md sm:p-5
      "
    >
      <p className="mb-2 text-sm text-olive-600">
        {title}
      </p>

      <h3 className="text-2xl font-bold text-olive-950">
        {value}
      </h3>
    </div>
  )
}

export default function StatsCards() {
    const { wishList } = useAppSelector((state) => state.wishList);
    const { totalItems } = useAppSelector((state) => state.cart);
    
  return (
<div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
  <div className="rounded-2xl border border-olive-100 bg-white p-4 shadow-sm sm:p-5">
    <p className="text-sm text-olive-600">الطلبات</p>
    <h2 className="mt-2 text-2xl font-bold text-olive-950">24</h2>
  </div>

  <div className="rounded-2xl border border-olive-100 bg-white p-4 shadow-sm sm:p-5">
    <p className="text-sm text-olive-600">المفضلة</p>
    <h2 className="mt-2 text-2xl font-bold text-olive-950">{wishList.length}</h2>
  </div>

  <div className="rounded-2xl border border-olive-100 bg-white p-4 shadow-sm sm:p-5">
    <p className="text-sm text-olive-600">العناوين</p>
    <h2 className="mt-2 text-2xl font-bold text-olive-950">3</h2>
  </div>

  <div className="rounded-2xl border border-olive-100 bg-white p-4 shadow-sm sm:p-5">
    <p className="text-sm text-olive-600">عناصر السلة</p>
    <h2 className="mt-2 text-2xl font-bold text-olive-950">{totalItems}</h2>
  </div>
</div>
  )
}