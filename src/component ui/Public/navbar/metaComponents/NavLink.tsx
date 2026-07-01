import Link from "next/link"

type NavLinkProps = {
  label: string,
  href?:string
}

export default function NavLink({
  label,href
}: NavLinkProps) {
  let hrefValue 
  href ? hrefValue = href: hrefValue ='/'
  return (
    <Link href={hrefValue}>
     <button
      className="
        text-zinc-600
        font-medium
        hover:text-black
        transition
        relative
      "
    >
      {label}
    </button>
    </Link>
   
  )
}