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
    <div className="flex min-h-80 w-full items-center justify-center py-6">
   <div className="flex min-h-[300px] w-full max-w-xl flex-col items-center justify-center rounded-3xl border border-orange-100 bg-gradient-to-b from-orange-50 to-white p-6 text-center shadow-sm sm:p-8">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-orange-100 bg-white text-orange-500 shadow-sm ring-8 ring-orange-50">
        <AlertTriangle className="h-8 w-8" />
      </div>

      <h2 className="mb-2 text-xl font-bold text-olive-950">
        Sorry !
      </h2>

      <p className="mb-6 max-w-md text-sm leading-7 text-olive-600 sm:text-base">
        {message}
      </p>
<Button 
  variant='primary' 
  onClick={handleHelpButton} 
  className="flex items-center gap-2 !rounded-2xl !font-semibold shadow-sm"
>
  <RefreshCw 
    size={18} 
    className={`transition-transform duration-300 group-hover:rotate-180 cursor-pointer`} />

  <span>{HelpButton}</span>
</Button>

   
    </div>
    </div>
 
  );
}