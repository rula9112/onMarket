import OverlayCard from "../clientComponents/OverlayCard";
import RoundedCardSlider from "../clientComponents/RoundedCardSlider";

export default function CardSlider({componentToRender ,title}){

    return(
      <div className="max-w-7xl mx-auto shadow-[0_0_1rem_#eee] p-2 mt-2 rounded-md">
  {/*Header   */}
<div className="my-3 mx-4">
<h1 className="text-md font-bold sm:text-1xl lg:text-2xl mb-4">
  <span >{title}</span>
</h1>
</div>
  {/*Card Slider   */}
<div className="relative">
  {/*Slider Container   */}
  
  {componentToRender == "OverlayCard" && <OverlayCard />}
  {componentToRender == "RoundedCardSlider" && <RoundedCardSlider  />}

</div>
</div>

    )
    

}
