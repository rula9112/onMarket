import { Spinner } from "flowbite-react";


export function CardLoading (){
    return(
          <div className="max-w-7xl mx-auto py-8" >
             <div className="animate-pulse bg-gray-300 rounded-md card w-1/4  shadow-lg relative h-[20vw]">
            <div className="h-56 bg-gray-400 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-400 mx-auto rounded w-5/6"></div>
          </div>
          </div>
    )
}

export function LoadingSpinner({customClass}){
    return (
        <div className={customClass}>
      <Spinner color="warning" aria-label="Warning spinner example" />
        </div>
    )
}