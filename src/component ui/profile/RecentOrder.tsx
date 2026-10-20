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
      "border border-orange-100 bg-orange-50 text-orange-800",
    مكتمل:
      "border border-olive-100 bg-olive-50 text-olive-800",
    ملغي:
      "border border-red-100 bg-red-50 text-red-700",
  }

  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-olive-100 p-4
      "
    >
      <div>
        <h3 className="font-semibold text-zinc-900">
          طلب #{orderNumber}
        </h3>

        <p className="mt-1 text-sm text-olive-600">
          {total}
        </p>
      </div>

      <span
        className={`
          rounded-full px-3 py-1 text-xs font-semibold sm:text-sm
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
        border-olive-100
        bg-white
        p-6
        shadow-sm
      "
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-olive-950">
          آخر الطلبات
        </h2>

        <button className="shrink-0 font-medium text-orange-700 transition hover:text-orange-800">
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