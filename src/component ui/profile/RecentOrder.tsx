type OrderItemProps = {
  orderNumber: string
  status: "قيد التنفيذ" | "مكتمل" | "ملغي"
  total: string
}

function OrderItem({
  orderNumber,
  status,
  total,
}: OrderItemProps) {
  const statusStyles = {
    "قيد التنفيذ":
      "bg-yellow-100 text-yellow-700",
    مكتمل:
      "bg-green-100 text-green-700",
    ملغي:
      "bg-red-100 text-red-700",
  }

  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-zinc-100
        p-4
      "
    >
      <div>
        <h3 className="font-semibold text-zinc-900">
          طلب #{orderNumber}
        </h3>

        <p className="mt-1 text-sm text-zinc-500">
          {total}
        </p>
      </div>

      <span
        className={`
          rounded-full
          px-3
          py-1
          text-sm
          font-medium
          ${statusStyles[status]}
        `}
      >
        {status}
      </span>
    </div>
  )
}

export default function RecentOrders() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-zinc-100
        bg-white
        p-6
        shadow-sm
      "
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">
          آخر الطلبات
        </h2>

        <button className="font-medium text-black">
          عرض الكل
        </button>
      </div>

      <div className="mt-6 space-y-4">
        <OrderItem
          orderNumber="1024"
          status="قيد التنفيذ"
          total="250 ر.س"
        />

        <OrderItem
          orderNumber="1025"
          status="مكتمل"
          total="540 ر.س"
        />

        <OrderItem
          orderNumber="1026"
          status="ملغي"
          total="120 ر.س"
        />
      </div>
    </div>
  )
}