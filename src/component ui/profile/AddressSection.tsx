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
      className="bg-white rounded-2xl border border-gray-200 shadow p-5"
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
         <h3 className="font-semibold">
         {title} Address
        </h3>
          {isDefault && (
          <span
            className="
              rounded-full
              bg-orange-200 border border-orange-400
              px-3
              py-2
              text-xs
              font-medium
              text-orange-800
            "
          >
            الافتراضي
          </span>
        )}
        </div>
      
        <div className="space-x-2">
          <button className="py-2 px-3 border border-gray-500 text-gray-500 rounded-xl">Edit</button>
          <button className=" py-2 px-3 border border-orange-400 text-orange-400 rounded-xl">
            Delete
          </button>
        </div>
      </div>

      <p className="mt-3 text-gray-600">
        {address.address}
      </p>
           
    </div>
  )
}
export default function AddressSection(user:UserInfoProps) {
  console.log(user)
  return (
<div className="space-y-4">
 <Button variant={'outlinePrimary'} className="bg-white">
  + Add New Address
  </Button>  
  

<AddressCard  title={'Address 1'} address={user.user.address} isDefault={true} />         

</div>
  )
}