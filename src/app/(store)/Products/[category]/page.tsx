import ProductsGridSection from "@/src/component ui/product/ProductsGridSection";

export default async function ProductsByCategoryPage({ params }: { params: Promise<{ category: string }> }) {
      const  {category}  = await params;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="px-6 py-8 my-4 flex items-center justify-between bg-white shadow-sm rounded-3xl">
          <h1 className="text-3xl font-bold capitalize text-zinc-900">
          {category}
        </h1>
        </div>
       <ProductsGridSection category={category}/>
      </div>
    </div>
  )
}





