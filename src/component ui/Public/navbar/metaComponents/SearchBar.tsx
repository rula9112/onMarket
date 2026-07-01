export default function SearchBar() {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="ابحث عن المنتجات..."
        className="
          w-full
          h-14
          rounded-2xl
          shadow-inner
          border border-zinc-200
          px-14
          text-sm
          outline-none
          focus:border-black
          focus:bg-white
          transition-all
        "
      />

      <div
        className="
          absolute
          top-1/2 left-5
          -translate-y-1/2
          text-zinc-400
        "
      >
        🔍
      </div>
    </div>
  )
}