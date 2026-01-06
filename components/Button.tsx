interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading,
  className,
  ...props
}: ButtonProps) {

  const variants = {
    primary: 'bg-primary text-white hover:bg-[#128E8C]',
    secondary: 'transparent border border-primary text-primary hover:bg-cyan-100 hover:text-[#11B1AE]',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors rounded-full focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} disabled={isLoading || props.disabled} {...props}>
      {isLoading ? (<span className="mr-2 animate-spin">🌀</span>) : null}
      {children}
    </button>
  )
}
