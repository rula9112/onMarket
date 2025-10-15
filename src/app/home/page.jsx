import CardSlider from "@/components/serverComponent/CardSlider";
import Hero from "@/components/serverComponent/Hero";
import Offer from "@/components/serverComponent/Offer";
import Steps from "@/components/serverComponent/Steps";
import "../styleCardsSlider.css"

export default function Index(){
    return(
       
 <div className="dark:bg-gray-800 bg-white relative">

<Hero />


{/*---------------end hero----------------  */}

{/*---------------top products----------------  */}
{/*-------------------------------  */}

<CardSlider componentToRender={"OverlayCard"} title={"Top Products"} />

{/*--------------top products-----------------  */}
{/*-------------------------------  */}
{/*-------------------------------  */}

{/*-----------------------------------  */}
{/*--------------Brand--------------------  */}
<CardSlider componentToRender={"RoundedCardSlider"} title={"Brands"} />

{/*------------------------------------  */}
{/*-------------end brand--------------  */}
{/*------------------------------------  */}



{/*------------offer-------------------  */}
<Offer />
{/*-------------end offer------------------  */}



{/*---------------gallory----------------  */}
<productByCategory />


{/*---------------endgallory----------------  */}


{/*------------------- steps to Buy ------------------  */}

<Steps />
{/*-------------------End steps to Buy ------------------  */}




</div>


    )
}