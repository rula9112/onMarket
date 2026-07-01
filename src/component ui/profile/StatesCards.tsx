import { useAppSelector } from "@/src/lib/store/hooks";
import { StatCardProps } from "@/src/types/profile"

function StatCard({ title, value }: StatCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-5
        shadow-sm
        transition-all
        hover:shadow-md
      "
    >
      <p className="mb-2 text-sm text-gray-500">
        {title}
      </p>

      <h3 className="text-2xl font-bold text-gray-900">
        {value}
      </h3>
    </div>
  )
}

export default function StatsCards() {
    const { wishList } = useAppSelector((state) => state.wishList);
    const { totalItems } = useAppSelector((state) => state.cart);
    
  return (
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <div className="bg-white rounded-2xl p-5 shadow-sm">
    <p className="text-gray-500">Orders</p>
    <h2 className="text-2xl font-bold">24</h2>
  </div>

  <div className="bg-white rounded-2xl p-5 shadow-sm">
    <p className="text-gray-500">Wishlist</p>
    <h2 className="text-2xl font-bold">{wishList.length}</h2>
  </div>

  <div className="bg-white rounded-2xl p-5 shadow-sm">
    <p className="text-gray-500">Addresses</p>
    <h2 className="text-2xl font-bold">3</h2>
  </div>

  <div className="bg-white rounded-2xl p-5 shadow-sm">
    <p className="text-gray-500">Cart Items</p>
    <h2 className="text-2xl font-bold">{totalItems}</h2>
  </div>
</div>
  )
}