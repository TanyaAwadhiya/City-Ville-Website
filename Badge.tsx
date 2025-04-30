import React from 'react';

type BadgeType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  children: React.ReactNode;
  type?: BadgeType;
  size?: BadgeSize;
  className?: string;
}

const getBadgeColors = (type: BadgeType) => {
  switch (type) {
    case 'primary':
      return 'bg-blue-100 text-blue-800';
    case 'success':
      return 'bg-green-100 text-green-800';
    case 'warning':
      return 'bg-amber-100 text-amber-800';
    case 'error':
      return 'bg-red-100 text-red-800';
    case 'info':
      return 'bg-cyan-100 text-cyan-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getBadgeSize = (size: BadgeSize) => {
  switch (size) {
    case 'sm':
      return 'text-xs px-2 py-0.5';
    case 'lg':
      return 'text-sm px-3 py-1';
    default:
      return 'text-xs px-2.5 py-0.5';
  }
};

const Badge: React.FC<BadgeProps> = ({
  children,
  type = 'default',
  size = 'md',
  className = '',
}) => {
  const colorClasses = getBadgeColors(type);
  const sizeClasses = getBadgeSize(size);
  
  return (
    <span
      className={`
        inline-block rounded-full font-medium
        ${colorClasses}
        ${sizeClasses}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;