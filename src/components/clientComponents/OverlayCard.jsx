"use client";

import Slider from "react-slick";
import { useGetAllProductsQuery } from "../../../redux/productAPI";
import { useRouter } from 'next/navigation';
import ErrorComponent from "../LaodingComponents/ErrorComponent";
import { CardLoading } from "../LaodingComponents/Loading";

export default  function OverlayCard(){
        const {data,error , isLoading} = useGetAllProductsQuery(`?limit=8&skip=1`)
        const router = useRouter();

     var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 4,
      };
      const goToDetailsPage = (id) => {
        router.push(`/product/${id}`); 
      };

      
  if (isLoading) return (<CardLoading />);
  if (error) return <ErrorComponent />

    return(

    <div className="max-w-7xl mx-auto py-8" >
      <Slider {...settings}>
        {data?.products.map((item) => (
          <div key={item.id} className="px-4" onClick={()=>{goToDetailsPage(item.id)}}>
            <div className="card w-70 bg-white shadow-lg relative h-[20vw]">
              <div 
                className="absolute inset-0 bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${item.image || item.thumbnail || 'https://via.placeholder.com/320x160'})` }}
              >
              </div>
              <div className="absolute inset-0 card-overlay flex flex-col justify-end p-6 text-white bg-black bg-opacity-30">
                <h3 className="font-bold text-xl">{item.title}</h3>
                <p className="text-sm mt-1">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>    )
}