import Image from "next/image";
import { Button } from "../ui/Button";
import userImage from '@/public/img/user.png'
import { UserInfoProps } from "@/src/types/profile";

export default function ProfileInfo({user}:UserInfoProps){
  const userData_Image = user.image
    return(
        <div className="rounded-3xl border border-olive-100 bg-white p-5 shadow-sm sm:p-6">
  <div className="flex items-center gap-4">
    <Image
  src={userData_Image ? userData_Image : userImage}
  alt="صورة المستخدم"
  width={64}
  height={64}
  className="rounded-full object-cover"
/>
    {/*
       <Image
      src={userImage }
      alt="user"
      className="w-20 h-20 rounded-full"
    />
     */}
 

    <div>
      <h2 className="text-xl font-bold text-olive-950">{user.firstName} {user.lastName}</h2>
      <p className="mt-1 text-sm text-olive-600">{user.email}</p>
      <p className="text-sm text-olive-600">{user.phone}</p>
    </div>
  </div>

  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
    <input
      className="h-12 min-w-0 rounded-2xl border border-olive-200 bg-olive-50/50 px-4 text-right text-sm text-olive-950 outline-none transition placeholder:text-olive-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
      placeholder="الاسم الأول"
    />

    <input
      className="h-12 min-w-0 rounded-2xl border border-olive-200 bg-olive-50/50 px-4 text-right text-sm text-olive-950 outline-none transition placeholder:text-olive-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
      placeholder="اسم العائلة"
    />

    <input
      className="h-12 min-w-0 rounded-2xl border border-olive-200 bg-olive-50/50 px-4 text-right text-sm text-olive-950 outline-none transition placeholder:text-olive-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
      placeholder="البريد الإلكتروني"
    />

    <input
      className="h-12 min-w-0 rounded-2xl border border-olive-200 bg-olive-50/50 px-4 text-right text-sm text-olive-950 outline-none transition placeholder:text-olive-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
      placeholder="رقم الهاتف"
    />
  </div>

 <Button variant={'primary'} className="!mt-6 !w-full !rounded-2xl !font-semibold shadow-sm sm:!w-auto">
 حفظ التغييرات
 </Button>
</div>
    )
}