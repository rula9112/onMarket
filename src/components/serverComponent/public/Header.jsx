
import NavBar from "@/components/serverComponent/public/NavBar";
import logo from "@/img/FullLogo_Transparent.png"

export default function Header(){
    return(
    <nav className={`fixed top-0 w-full transition-all duration-300 z-50 `}>
        <NavBar logo={logo}/>
        </nav>
       
    )
}