// app/(auth)/layout.tsx

import NavBarAuth from "@/src/component ui/Public/navbar/NavbarAuth";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBarAuth />
      <main>{children}</main>
    
    </div>
  );
}
