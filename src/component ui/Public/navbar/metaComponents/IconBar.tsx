type IconButtonProps = {
  icon: string
  badge: number
}

export default function IconButton({
  icon,
  badge,
}: IconButtonProps) {
  return (
    <button
      className="
        relative
        w-12 h-12
        rounded-2xl
        bg-red-100
        hover:bg-zinc-200
        transition
        flex items-center justify-center
        text-lg
      "
    >
      {icon}

      {badge > 0 ?  (
        <span
          className="
            absolute
            -top-1 -right-1
            min-w-[20px]
            h-5
            px-1
            rounded-full
            bg-orange-900
            text-white
            text-xs
            flex items-center justify-center
          "
        >
          {badge}
        </span>
      ):
      (<></>)
      }
    </button>
  )
}