import Image from "next/image";
import { Button } from "../ui/Button";
import userImage from '@/public/img/user.png'
import { UserInfoProps } from "@/src/types/profile";

export default function ProfileInfo({user}:UserInfoProps){
  const userData_Image = user.image
    return(
        <div className="bg-white rounded-2xl shadow-sm p-6">
  <div className="flex items-center gap-4">
     <Image
      src={
      userData_Image  ? userData_Image : userImage   }
      alt="user"
      className="w-20 h-20 rounded-full"
    /> 
    {/*
       <Image
      src={userImage }
      alt="user"
      className="w-20 h-20 rounded-full"
    />
     */}
 

    <div>
      <h2 className="text-xl font-bold">{user.firstName} {user.lastName}</h2>
      <p className="text-gray-500">{user.email}</p>
      <p className="text-gray-500">{user.phone}</p>
    </div>
  </div>

  <div className="mt-6 grid md:grid-cols-2 gap-4">
    <input
      className="border border-gray-200 shadow rounded-lg p-3"
      placeholder="First Name"
    />

    <input
      className="border border-gray-200 shadow rounded-lg p-3"
      placeholder="Last Name"
    />

    <input
      className="border border-gray-200 shadow rounded-lg p-3"
      placeholder="Email"
    />

    <input
      className="border border-gray-200 shadow rounded-lg p-3"
      placeholder="Phone"
    />
  </div>

 <Button variant={'primary'} className="mt-6">
 Save Changes
 </Button>
</div>
    )
}