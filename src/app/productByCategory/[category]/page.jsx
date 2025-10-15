import Product from "@/components/clientComponents/product";
import ErrorComponent from "@/components/LaodingComponents/ErrorComponent";

export default async function ProductByCategory({ params: { category } }) {
  try {
    const res = await fetch(`https://dummyjson.com/products/category/${category}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch categories');
    const data = await res.json();

    return (
      <div className="py-8 my-10 text-center">
        <div className="py-8 bg-gray-50 w-full">
          <span className="text-2xl font-medium">{category}</span>
        </div>

        <div className="sections mt-9 px-8 grid grid-cols-2 md:grid-cols-4 max-[350px]:grid-cols-1 gap-3">
          {Array.isArray(data.products) && data.products.length > 0 ? (
            data.products.map((item, index) => <Product key={index} item={item} />)
          ) : (
            <div>لا توجد بيانات لعرضها</div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    return <ErrorComponent />;
  }
}
