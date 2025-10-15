"use client"
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import CountCart from "../../clientComponents/CountCart";
import { usePathname } from 'next/navigation';
import Image from "next/image";

export default function NavBar({ logo }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`transition duration-75 ${scrolled ? 'bg-white bg-opacity-85 backdrop-blur-sm shadow-[0_0_.5rem_#eee]' : 'bg-transparent'}`}>
      <Navbar fluid rounded className="bg-transparent">
        <NavbarBrand as={Link} href={"/"}>
         <Image src={logo} alt="Logo" width={75} height={75} />      
         {/*<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-orange-500">OnMarket</span>
      */ }   </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="/" active={pathname === '/'} className={pathname === '/' ? 'active-link' : ''}>
            Home
          </NavbarLink>
          <NavbarLink as={Link} href="/cart" className={`relative p-1 ${pathname === '/cart' ? 'active-link' : ''}`} active={pathname === '/cart'}>
            <CountCart />
            <span className="absolute z-20">
              Cart
            </span>
          </NavbarLink>
          <NavbarLink href="#">Services</NavbarLink>
          <NavbarLink href="#">Pricing</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
