import WishListTable from "@/src/component ui/wishlist/WishListTable";

   export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-olive-50">
      <div
        className="
          max-w-7xl
          mx-auto
          px-4 md:px-8
          py-6
        "
      >
        {/* Header */}
        <div className="p-6 flex items-center justify-between bg-white shadow-sm rounded-3xl">
          <div>
            <h1
              className="
                text-3xl md:text-4xl
                font-bold
                text-zinc-900
              "
            >
              المفضلة
            </h1>

            <p className="mt-2 text-zinc-500">
              المنتجات التي قمت بحفظها
            </p>
          </div>

          <div
            className="
              hidden md:flex
              items-center
              justify-center
              w-14 h-14
              rounded-2xl
              bg-orange-50
              shadow-sm
            "
          >
            ❤️
          </div>
        </div>

        {/* Products */}
      

          <WishListTable />
      
      </div>
    </div>
  )
}
