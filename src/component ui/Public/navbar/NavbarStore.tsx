"use client";

import {
  Navbar,
  NavbarToggle,
  NavbarCollapse,
} from "flowbite-react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogInIcon, LogOutIcon } from "lucide-react";
import { logoutUser } from "@/src/features/auth/authAction";
import { useAppDispatch, useAppSelector } from "@/src/lib/store/hooks";
import IconButton from "./metaComponents/IconBar";
import SearchBar from "./metaComponents/SearchBar";
import NavLink from "./metaComponents/NavLink";
import { Button } from "../../ui/Button";
import logo from '@/public/logo.png'
import Image from "next/image";

export default function NavBar() {
  const { token } = useAppSelector((state) => state.auth);
  const { totalItems } = useAppSelector((state) => state.cart);
  const { wishList } = useAppSelector((state) => state.wishList);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    await dispatch(logoutUser());
    router.push("/");
  };





  return (
    <header
      className="
      py-3
        sticky top-0 z-50
        bg-white/80
        backdrop-blur-xl
        border-b border-zinc-100
      "
    >
      <Navbar className="max-w-[90vw] mx-auto rounded-none border-none bg-transparent p-0" fluid>
        <div className="flex w-full items-center justify-between gap-4">
          <Image src={logo} alt='logo' width={45}  />
          {/* Left */}
          <div className="flex items-center gap-10">
            {/* Desktop Links */}
            <nav className="hidden lg:flex items-center gap-7">
              <NavLink label="Home" href="/" />
              <NavLink label="Profile" href="/profile" />
              <NavLink label="About" />
            </nav>
          </div>

          {/* Search */}
          <div className=" md:flex flex-1 max-w-xl">
            <SearchBar />
          </div>

{/* Actions */}
<div className="flex items-center gap-3">
  <Link href="/wishlist">
    <IconButton icon="❤️" badge={wishList.length} />
  </Link>

  <Link href="/cart">
    <IconButton icon="🛒" badge={totalItems} />
  </Link>

  <div className="lg:hidden">
    <NavbarToggle />
  </div>

  <div className="hidden lg:flex items-center gap-3 ml-3">
    {token ? (
      <Button
        variant="outlinePrimary"
        onClick={handleLogout}
        className="flex items-center gap-2"
      >
        <LogOutIcon className="w-4 h-4" />
        <span>Logout</span>
      </Button>
    ) : (
      <Link href="/login">
        <Button
          variant="outlinePrimary"
          className="flex items-center gap-2"
        >
          <LogInIcon className="w-4 h-4" />
          <span>Login</span>
        </Button>
      </Link>
    )}
  </div>
</div>
        </div>

        {/* NavbarCollapse */}
        <NavbarCollapse className="lg:hidden">
  <div className="flex flex-col gap-4 py-4">
    {/* Navigation Links */}
    <div className="flex flex-col gap-2">
      <NavLink label="Home" href="/" />
      <NavLink label="Profile" href="/profile" />
      <NavLink label="About" href="/about" />
    </div>

    {/* Auth Button */}
    <div className="pt-2 border-t">
      {token ? (
        <Button
          variant="outlinePrimary"
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2"
        >
          <LogOutIcon className="w-4 h-4" />
          <span>Logout</span>
        </Button>
      ) : (
        <Link href="/login" className="block">
          <Button
            variant="outlinePrimary"
            className="w-full flex items-center justify-center gap-2"
          >
            <LogInIcon className="w-4 h-4" />
            <span>Login</span>
          </Button>
        </Link>
      )}
    </div>
  </div>
</NavbarCollapse>
      </Navbar>
    </header>
  );
}