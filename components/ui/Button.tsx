interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button',
  disabled = false
}: ButtonProps) {
  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  )
}
