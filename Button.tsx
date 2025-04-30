import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const getVariantClasses = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return 'bg-blue-800 hover:bg-blue-900 text-white';
    case 'secondary':
      return 'bg-teal-600 hover:bg-teal-700 text-white';
    case 'outline':
      return 'bg-transparent border border-blue-800 text-blue-800 hover:bg-blue-50';
    case 'text':
      return 'bg-transparent text-blue-800 hover:bg-blue-50';
    default:
      return 'bg-blue-800 hover:bg-blue-900 text-white';
  }
};

const getSizeClasses = (size: ButtonSize) => {
  switch (size) {
    case 'sm':
      return 'text-sm px-3 py-1';
    case 'lg':
      return 'text-base px-6 py-3';
    default:
      return 'text-sm px-4 py-2';
  }
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  className = '',
  onClick,
  type = 'button',
}) => {
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);
  
  return (
    <button
      type={type}
      className={`
        rounded-md font-medium transition-colors duration-200
        ${variantClasses}
        ${sizeClasses}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
        ${icon ? 'flex items-center justify-center' : ''}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
};

export default Button;