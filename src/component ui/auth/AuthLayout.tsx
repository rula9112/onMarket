import { AuthLayoutProps } from "@/src/types/Auth";
import Image from "next/image";
import banner from "./../../../public/img/shopOrangeSm.jpg"

export default function AuthLayout({
  children,
  title,
  subtitle,
}: AuthLayoutProps) {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="grid overflow-hidden rounded-3xl border border-olive-100 bg-white shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative hidden min-h-[620px] overflow-hidden bg-olive-950 lg:flex">
          <Image
            src={banner}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-olive-950/90 via-olive-950/15 to-transparent" />
          <div className="relative z-10 flex flex-col justify-end p-10 text-white xl:p-14">
            <span className="mb-4 w-fit rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] backdrop-blur-sm">
              ONMARKET
            </span>
            <h2 className="text-4xl font-bold leading-tight xl:text-5xl">
              تسوق بأفضل تجربة عصرية
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-white/80 xl:text-lg">
              منتجات مميزة، عروض حصرية وتجربة استخدام احترافية
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center px-5 py-8 sm:px-10 sm:py-12 lg:px-12 xl:px-16">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <p className="mb-3 text-center text-xs font-semibold tracking-[0.2em] text-orange-700 lg:text-left">
                ONMARKET
              </p>
              <h1 className="text-center text-3xl font-bold tracking-tight text-olive-950 sm:text-4xl lg:text-left">
                {title}
              </h1>
              <p className="mt-3 text-center text-sm leading-6 text-olive-600 sm:text-base lg:text-left">
                {subtitle}
              </p>
              <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-orange-500 lg:mx-0" />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}