"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Heart,
  LogIn,
  LogOut,
  Menu,
  ShoppingCart,
  UserRound,
  X,
} from "lucide-react";
import { logoutUser } from "@/src/features/auth/authAction";
import { useAppDispatch, useAppSelector } from "@/src/lib/store/hooks";
import SearchBar from "./metaComponents/SearchBar";
import logo from "@/public/logo.png";

const navigationLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "حسابي", href: "/profile" },
];

export default function NavbarStore() {
  const { token } = useAppSelector((state) => state.auth);
  const { totalItems } = useAppSelector((state) => state.cart);
  const { wishList } = useAppSelector((state) => state.wishList);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    await dispatch(logoutUser());
    setIsMenuOpen(false);
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-olive-100 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center gap-3 md:gap-5">
          <Link href="/" aria-label="OnMarket home" className="shrink-0">
            <Image src={logo} alt="OnMarket" width={48} height={48} priority />
          </Link>

          <nav aria-label="التنقل الرئيسي" className="hidden shrink-0 items-center gap-6 lg:flex">
            {navigationLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-semibold text-olive-700 transition hover:text-orange-700"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden min-w-0 flex-1 md:block">
            <SearchBar />
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
            <Link
              href="/wishlist"
              aria-label={`المفضلة، ${wishList.length} منتجات`}
              className="relative inline-flex size-10 items-center justify-center rounded-lg text-olive-700 transition hover:bg-orange-50 hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              <Heart aria-hidden="true" className="size-5" />
              {wishList.length > 0 && (
                <span className="absolute -right-1 -top-1 flex min-w-5 items-center justify-center rounded-full bg-orange-600 px-1 text-xs font-bold leading-5 text-white">
                  {wishList.length}
                </span>
              )}
            </Link>

            <Link
              href="/cart"
              aria-label={`السلة، ${totalItems} منتجات`}
              className="relative inline-flex size-10 items-center justify-center rounded-lg text-olive-700 transition hover:bg-orange-50 hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              <ShoppingCart aria-hidden="true" className="size-5" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex min-w-5 items-center justify-center rounded-full bg-orange-600 px-1 text-xs font-bold leading-5 text-white">
                  {totalItems}
                </span>
              )}
            </Link>

            {token ? (
              <button
                type="button"
                onClick={handleLogout}
                className="hidden min-h-10 items-center gap-2 rounded-lg border border-olive-200 px-3 text-sm font-semibold text-olive-800 transition hover:border-orange-400 hover:bg-orange-50 hover:text-orange-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 lg:inline-flex"
              >
                <LogOut aria-hidden="true" className="size-4" />
                تسجيل الخروج
              </button>
            ) : (
              <Link
                href="/login"
                className="hidden min-h-10 items-center gap-2 rounded-lg bg-orange-600 px-4 text-sm font-semibold text-white transition hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 lg:inline-flex"
              >
                <LogIn aria-hidden="true" className="size-4" />
                تسجيل الدخول
              </Link>
            )}

            <button
              type="button"
              aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={isMenuOpen}
              aria-controls="store-mobile-menu"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex size-10 items-center justify-center rounded-lg text-olive-800 transition hover:bg-olive-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 lg:hidden"
            >
              {isMenuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
            </button>
          </div>
        </div>

        <div className="pb-3 md:hidden">
          <SearchBar />
        </div>

        {isMenuOpen && (
          <div id="store-mobile-menu" className="border-t border-olive-100 py-3 lg:hidden">
            <nav aria-label="التنقل الرئيسي للجوال" className="flex flex-col">
              {navigationLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex min-h-11 items-center gap-3 rounded-md px-3 text-sm font-semibold text-olive-800 transition hover:bg-orange-50 hover:text-orange-800"
                >
                  {href === "/profile" && <UserRound aria-hidden="true" className="size-4" />}
                  {label}
                </Link>
              ))}
              {token ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex min-h-11 items-center gap-3 rounded-md px-3 text-right text-sm font-semibold text-olive-800 transition hover:bg-orange-50 hover:text-orange-800"
                >
                  <LogOut aria-hidden="true" className="size-4" />
                  تسجيل الخروج
                </button>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 flex min-h-11 items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 text-sm font-semibold text-white transition hover:bg-orange-700"
                >
                  <LogIn aria-hidden="true" className="size-4" />
                  تسجيل الدخول
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}