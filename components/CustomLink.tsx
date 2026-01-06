interface CustomAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export default function CustomLink({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  ...props
}: CustomAnchorProps) {

  const variants = {
    primary: 'bg-primary text-white hover:bg-[#128E8C]',
    secondary: 'bg-transparent border border-primary text-primary hover:bg-cyan-100 hover:text-[#11B1AE]',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors rounded-full focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

  const isExternal = href.startsWith('http');
  const externalProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  );
}
