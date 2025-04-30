import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  label: string;
  mobile?: boolean;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, label, mobile, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  if (mobile) {
    return (
      <Link
        to={to}
        className={`block py-2 text-base ${
          isActive
            ? 'text-blue-800 font-medium'
            : 'text-gray-700 hover:text-blue-800'
        }`}
        onClick={onClick}
      >
        {label}
      </Link>
    );
  }
  
  return (
    <Link
      to={to}
      className={`relative font-medium text-base transition-colors ${
        isActive ? 'text-blue-800' : 'text-gray-700 hover:text-blue-800'
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-800 rounded" />
      )}
    </Link>
  );
};