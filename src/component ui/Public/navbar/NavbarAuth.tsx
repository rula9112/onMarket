"use client";

import {
  Navbar,
  NavbarToggle,
  NavbarCollapse,
} from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, LogInIcon, LogOutIcon } from "lucide-react";
import { logoutUser } from "@/src/features/auth/authAction";
import { useAppDispatch, useAppSelector } from "@/src/lib/store/hooks";
import SearchBar from "./metaComponents/SearchBar";
import NavLink from "./metaComponents/NavLink";
import Image from "next/image";
import logo from '@/public/logo.png' 
import { Button } from "../../ui/Button";
export default function NavBar() {
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    await dispatch(logoutUser());
    router.push("/");
  };
  return (
    <header className="py-3 sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
      <Navbar className="max-w-7xl mx-auto px-4 md:px-8 rounded-none border-none bg-transparent p-0" fluid>
        <div className="flex w-full items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-10">
            <nav className="flex items-center gap-7">
              <Link href={'/'}>
                <Image src={logo} alt={'logo'} width={45} height={45}/>
              </Link>
            </nav>
          </div>
          
              <Link
                  href="/">
                  <Button variant="outlinePrimary" className="flex gap-2">
                     <Home className="w-5 h-5" />
                  Home
                  </Button>
                </Link>
    
        </div>

  
      </Navbar>
    </header>
  );
}