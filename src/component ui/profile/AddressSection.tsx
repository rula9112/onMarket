import { AddressCardProps, UserInfoProps } from "@/src/types/profile"
import { Button } from "../ui/Button"

/******dummy array******** */


function AddressCard({
  title,
  address,
  isDefault = false,
}: AddressCardProps) {
  return (
    <div
      className="rounded-2xl border border-olive-100 bg-white p-4 shadow-sm sm:p-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
         <h3 className="font-semibold text-olive-950">
         {title}
        </h3>
          {isDefault && (
          <span
            className="
              rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5
              text-xs font-semibold text-orange-800
            "
          >
            الافتراضي
          </span>
        )}
        </div>
      
        <div className="flex gap-2">
          <button className="rounded-xl border border-olive-200 px-3 py-2 text-sm font-medium text-olive-700 transition hover:bg-olive-50">تعديل</button>
          <button className="rounded-xl border border-orange-200 px-3 py-2 text-sm font-medium text-orange-700 transition hover:bg-orange-50">
            حذف
          </button>
        </div>
      </div>

      <p className="mt-3 text-sm leading-7 text-olive-600">
        {address.address}
      </p>
           
    </div>
  )
}
export default function AddressSection(user:UserInfoProps) {
  console.log(user)
  return (
<div className="space-y-4">
 <Button variant={'outlinePrimary'} className="!rounded-2xl !bg-white">
  + إضافة عنوان جديد
  </Button>  
  

<AddressCard  title={'العنوان 1'} address={user.user.address} isDefault={true} />         

</div>
  )
}