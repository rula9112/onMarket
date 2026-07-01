// components/ui/PrimaryButton.tsx
import { ButtonProps } from "@/src/types/button"

export function Button({
  children,
  onClick,
  size = 'md',
  variant = 'primary',
  className = '',
   disabled = false,
  ...props
}: ButtonProps) {
  const sizeClasses = {
    small: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg'
  }

  const variantClasses = {
    primary: 'bg-orange-500 text-white font-medium hover:bg-orange-800 focus:ring-orange-300',
    outlinePrimary: 'border-2 border-orange-500 text-orange-500 font-medium hover:bg-orange-50 focus:ring-orange-300',
    secondary: 'bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 focus:ring-gray-300',
    outlineSecondary: 'border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 focus:ring-gray-300'
  }

  return (
    <button 
      className={`
        rounded-2xl
        transition
        focus:outline-none
        focus:ring-2
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
       disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}