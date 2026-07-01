export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  size?: 'small' | 'md' | 'lg'
  variant?: 'primary' | 'outlinePrimary' | 'secondary' | 'outlineSecondary'
  className?: string
  disabled?: boolean;
}
