// @/src/component ui/product/SearchResults.tsx
"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SearchResultAPI } from "@/src/lib/api/Products";
import ProductGrid from "./ProductGrid";
import ErrorState from "./ErrorState";

// نوع مبسط للنتيجة (عدّله حسب API الخاص بك)
type SearchResult = {
  products: any[];
};
function SearchContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";

  const [data, setData] = useState<SearchResult | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!q) {
      setData(null);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await SearchResultAPI(q);
        setData(result);
      } catch {
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [q]);

  if (!q) return <div className="text-zinc-500">لا يوجد بحث حاليًا</div>;
  if (loading) return <div className="text-zinc-500">جاري التحميل...</div>;
  if (!data) return <ErrorState message="لا توجد نتائج" />;

  return (
    <div>
      <h2 className="my-4 text-2xl md:text-3xl font-bold text-gray-900">
        نتيجة البحث
      </h2>
      <ProductGrid products={data.products} />
    </div>
  );
}

export default function SearchResults() {
  return (
    <Suspense fallback={<div className="text-zinc-500">جاري تحميل نتائج البحث...</div>}>
      <SearchContent />
    </Suspense>
  );
}