export default function MobileBottomNav() {
  return (
    <div
      className="
        md:hidden
        fixed bottom-0 left-0 right-0
        bg-white/90
        backdrop-blur-xl
        border-t border-zinc-200
        px-4 py-3
        z-50
      " >
      <div className="flex items-center justify-around">
        {/* <BottomItem icon="🏠" label="الرئيسية" />
        <BottomItem icon="❤️" label="المفضلة" />
        <BottomItem icon="🛒" label="السلة" />
        <BottomItem icon="👤" label="حسابي" /> */}
      </div>
    </div>
  )
}