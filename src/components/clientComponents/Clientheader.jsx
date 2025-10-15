'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ListOrdered, LogOut, MessagesSquare, Settings, ShoppingCart, User } from "lucide-react";

export default function ClientHeader({ initialScroll }) {
  const [scrolled, setScrolled] = useState(initialScroll);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const user = false; 

  return (
    <header
      className={`h-16 sm:h-24 flex items-center transition-all duration-300 ${
        scrolled > 50
          ? "bg-orange-300 bg-opacity-50 border-b-1 border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="uppercase text-gray-800 dark:text-white font-black text-xl">
          Watch.ME
        </div>
        <div className="flex items-center">
          <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
            <Link href={"/cart"}>cart</Link>

            <Link href={"/"} className="py-2 px-6 flex">
              Home
            </Link>
            <Link href="#" className="py-2 px-6 flex">
              Category
            </Link>

            {!user ? (
              <>
                <HoverCard openDelay={0} closeDelay={0}>
                  <HoverCardTrigger className="flex items-center cursor-pointer">
                    <User size={20} /> Sign in
                  </HoverCardTrigger>
                  <HoverCardContent>
                    Welcome MultiStore
                    <button className="w-full mt-3 rounded-full btn btn-primary" size={"sm"}>
                      <Link href={"/login"}>Sign In</Link>
                    </button>
                    <p className="mt-3 text-center">____ OR ____</p>
                    <button className="w-full mt-3 rounded-full btn btn-primary" size={"sm"}>
                      <Link href={"/signup"}>sign Up</Link>
                    </button>
                  </HoverCardContent>
                </HoverCard>
              </>
            ) : (
              <>
                <HoverCard openDelay={0} closeDelay={0}>
                  <HoverCardTrigger className="flex items-center cursor-pointer">
                    <User size={20} /> Rula
                  </HoverCardTrigger>
                  <HoverCardContent>
                    Hello Rula
                    <hr className="my-3" />
                    <div className="flex flex-col">
                      <Link href={""} className="flex gap-1">
                        <Settings />Setting
                      </Link>
                      <Link href={""} className="flex gap-1">
                        <ListOrdered />My Orders
                      </Link>
                      <hr className="my-3" />
                      <Link href={""} className="flex gap-1">
                        <MessagesSquare />Messages
                      </Link>
                      <hr className="my-3" />
                      <Link href={""} className="flex gap-1">
                        <LogOut />Logout
                      </Link>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <Link href={"./../cart"} className="flex gap-1">
                  <ShoppingCart /> My Cart
                </Link>
              </>
            )}
          </nav>

          <button className="lg:hidden flex flex-col ml-4">
            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
