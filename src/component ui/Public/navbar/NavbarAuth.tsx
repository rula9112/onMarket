import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function NavbarAuth() {
  return (
    <header className="sticky top-0 z-50 border-b border-olive-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="OnMarket home" className="flex items-center gap-3">
          <Image src={logo} alt="" width={44} height={44} priority />
          <span className="text-lg font-extrabold tracking-tight text-olive-950">
            ONMARKET
          </span>
        </Link>

        <Link
          href="/"
          dir="rtl"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-olive-200 px-4 text-sm font-semibold text-olive-800 transition hover:border-orange-400 hover:bg-orange-50 hover:text-orange-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          العودة إلى المتجر
        </Link>
        </div>
    </header>
  );
}