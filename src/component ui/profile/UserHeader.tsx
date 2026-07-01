import userImage from '@/public/img/user.png'
import { User } from '@/src/types/Auth'
import { UserInfoProps } from '@/src/types/profile'
import Image from 'next/image'

export default function UserHeader({user}:UserInfoProps) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        p-6
        border border-zinc-100
        shadow-sm
      "
    >
      <div
        className="
          flex
          items-center
          gap-5
          flex-wrap
        "
      >
        {/* Avatar */}
        <div
          className="
            w-24 h-24
            rounded-full
            overflow-hidden
            bg-zinc-100
          "
        >
             {/* <Image
      src={{
        user.image ? user.image: userImage   }}
      alt="user"
      className="w-20 h-20 rounded-full"
    /> */}
          <Image
            src={userImage}
            alt="user"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1
            className="
              text-2xl
              font-bold
              text-zinc-900
            "
          >
            {user.username}
                      </h1>

          <p className="mt-1 text-zinc-500">
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