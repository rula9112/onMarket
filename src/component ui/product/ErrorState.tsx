// components/ErrorState.tsx
'use client'
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "../ui/Button";
import { useRouter } from "next/navigation";



interface ErrorStateProps {
  message?: string;
  HelpButton?: string
}

export default function ErrorState({
  message = "حدث خطأ أثناء تحميل البيانات",
  HelpButton = "onRetry",
}: ErrorStateProps) {

  const router = useRouter();

  const handleHelpButton = () => {
    if (HelpButton == 'onRetry') {
     window.location.reload();  
    }
    else{
      router.push("/");
    }

  };
  return (
    <div className="w-full h-96 flex justify-center items-center">
   <div className="flex min-h-[300px] w-1/3  flex-col items-center justify-center rounded-xl border border-orange-200 bg-orange-50 p-8 text-center">
      <AlertTriangle className="mb-4 h-14 w-14 text-orange-500" />

      <h2 className="mb-2 text-xl font-semibold text-gray-800">
        Sorry !
      </h2>

      <p className="mb-6 max-w-md text-gray-600">
        {message}
      </p>
<Button 
  variant='primary' 
  onClick={handleHelpButton} 
  className="flex items-center group"
>
  <RefreshCw 
    size={18} 
    className={`mr-2 transition-transform duration-300 group-hover:rotate-180 cursor-pointer`} />

  <span>{HelpButton}</span>
</Button>

   
    </div>
    </div>
 
  );
}