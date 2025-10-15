import ProductDetails from "@/components/clientComponents/ProductDetails";

function page({ params: { id } }) {
  return (
    <>
      <section className="font-['Poppins'] flex items-center justify-center bg-opacity-20 h-[90vh] my-10">
        <ProductDetails id={id} />
      </section>
    </>
  );
}

export default page;
