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
    <div className="my-4">
      <label className="text-sm font-semibold text-olive-800">
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
          h-12
          rounded-2xl
          border border-olive-200
          bg-olive-50/50
          px-4
          mt-2
          text-sm
          text-olive-950
          placeholder:text-olive-400
          outline-none
          transition
          hover:border-olive-300
          focus:border-orange-400
          focus:ring-4
          focus:ring-orange-100
        "
      />
    </div>
  );
}