type SidebarItemProps = {
  label: string
  active?: boolean
}

function SidebarItem({
  label,
  active = false,
}: SidebarItemProps) {
  return (
    <button
      className={`
        flex
        w-full
        items-center
        justify-between
        rounded-2xl
        px-4
        py-3
        text-right
        transition-all

        ${
          active
            ? "bg-black text-white"
            : "text-zinc-700 hover:bg-zinc-100"
        }
      `}
    >
      <span className="font-medium">
        {label}
      </span>

      <span className="text-sm">
        ←
      </span>
    </button>
  )
}

export default function ProfileSidebar() {
  return (
    <div
      className="
        sticky
        top-6
        h-fit
        rounded-3xl
        border
        border-zinc-100
        bg-white
        p-5
        shadow-sm
      "
    >
      <div className="space-y-2">
        <SidebarItem
          label="الحساب الشخصي"
          active
        />

        <SidebarItem label="طلباتي" />
        <SidebarItem label="المفضلة" />
        <SidebarItem label="العناوين" />
        <SidebarItem label="طرق الدفع" />
        <SidebarItem label="الإعدادات" />
      </div>

      <button
        className="
          mt-8
          h-12
          w-full
          rounded-2xl
          bg-red-50
          font-medium
          text-red-500
          transition
          hover:bg-red-100
        "
      >
        تسجيل الخروج
      </button>
    </div>
  )
}