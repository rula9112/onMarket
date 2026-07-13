"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SearchResultAPI } from "@/src/lib/api/Products";
import ProductGrid from "./ProductGrid";
import ErrorState from "./ErrorState";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!q) {
      setData(null);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      const result = await SearchResultAPI(q);
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, [q]);

  if (!q) return <div>no thing</div>;
  if (loading) return <div>loading...</div>;
  if (!data) return <ErrorState message="no data found" />;

  return(
    <div>
         <h2 className=" my-4 text-2xl md:text-3xl font-bold text-gray-900">
         Search Result
        </h2>
  <ProductGrid products={data.products} />
    </div>
  )
  
}