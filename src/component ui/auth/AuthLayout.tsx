import { AuthLayoutProps } from "@/src/types/Auth";
import Image from "next/image";
import banner from "./../../../public/img/shopOrangeSm.jpg"

export default function AuthLayout({
  children,
  title,
  subtitle,
}: AuthLayoutProps) {
  return (
    <div className="w-2/3 mx-auto ">
      <div
        className="
        bg-white rounded-3xl shadow-sm
          grid
          lg:grid-cols-2
          overflow-hidden
        "
      >
        {/* Left Side */}
        <div
          className="
            hidden lg:flex
            relative
            overflow-hidden
            bg-black/95
            rounded-tl-3xl
            rounded-bl-3xl
          "
        >
          <Image
            src={banner}
            alt="banner"
            className="
              absolute inset-0
              w-full h-full
              object-cover
              opacity-60
            "
          />

          <div
            className="
              relative z-10
              flex flex-col
              justify-end
              p-14
              text-white
            "
          >
            <h2
              className="
                text-5xl
                font-bold
                leading-tight
              "
            >
              تسوق بأفضل تجربة عصرية
            </h2>

            <p className="mt-5 text-lg text-zinc-300">
              منتجات مميزة، عروض حصرية وتجربة استخدام احترافية
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="
            flex
            items-center
            justify-center
            px-5
            py-10
          "
        >
          <div className="w-full max-w-md ">
            <div className="my-5">
              <h1
                className="
                text-center
                  text-3xl
                  font-bold
                  orange-zinc-900
                "
              >
                {title}
              </h1>

              <p className="mt-3 text-zinc-500 text-center">
                {subtitle}
              </p>
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  )
}