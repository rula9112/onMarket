import Footer from "@/src/component ui/Public/Footer";
import NavBar from "@/src/component ui/Public/navbar/NavbarStore";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
