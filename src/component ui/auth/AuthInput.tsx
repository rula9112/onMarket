import { AuthInputProps } from "@/src/types/Auth";

export default function AuthInput({
  type,
  label,
  placeholder,
  name,
  value,
  onChange,
}: AuthInputProps) {
  return (
    <div className="py-2 my-5">
      <label className="text-sm text-orange-500 font-semibold">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          h-8
          p-2
          mt-2
          backdrop-blur-sm
          border-b border-orange-400
          dark:border-gray-600
          text-sm
          placeholder-gray-500
          dark:placeholder-orange-400
          focus:outline-none
          focus:ring-2
          focus:ring-orange-500/50
          focus:border-transparent
          focus:rounded-3xl
          transition-all
          duration-300
          hover:shadow-md
        "
      />
    </div>
  );
}