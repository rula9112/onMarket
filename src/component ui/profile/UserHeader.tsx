import { UserInfoProps } from '@/src/types/profile'
import Image from 'next/image'

export default function UserHeader({user}:UserInfoProps) {
  const imgSrc = user.image;
  return (
    <div
      className="
        rounded-3xl border border-olive-100 bg-white p-5 shadow-sm sm:p-6
      "
    >
      <div
        className="
          flex
          items-center
          gap-4 sm:gap-5
          flex-wrap
        "
      >
        {/* Avatar */}
        <div
          className="
            w-24 h-24
            rounded-full
            overflow-hidden
            border-4 border-white bg-olive-100 shadow-sm ring-1 ring-olive-100
          "
        >
             {/* <Image
      src={{
        user.image ? user.image: userImage   }}
      alt="صورة المستخدم"
      className="w-20 h-20 rounded-full"
    /> */}
          <Image
            src={imgSrc}
            width={50}
            height={50}
            alt="صورة المستخدم"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1
            className="
              text-xl font-bold text-olive-950 sm:text-2xl
            "
          >
            {user.username}
                      </h1>

          <p className="mt-1 break-all text-sm text-olive-600 sm:text-base">
            {user.email}
          </p>
{/* 
          <div className="flex gap-3 mt-4 flex-wrap">
            <Badge text="عميل مميز" />
            <Badge text="12 طلب مكتمل" />
          </div> */}
        </div>
      </div>
    </div>
  )
}