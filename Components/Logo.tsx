import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 48, color = "currentColor" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M100 165C100 165 30 115 30 70C30 45 50 30 70 30C85 30 95 40 100 50" 
        stroke={color} 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M100 50C105 40 115 30 130 30C140 30 155 35 165 50C165 50 155 65 145 75C140 80 138 85 140 92C142 100 150 105 150 115C150 125 140 135 130 145C125 150 110 158 100 165" 
        stroke={color} 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M135 90C138 90 142 93 142 98C142 103 138 106 135 106" 
        stroke={color} 
        strokeWidth="3" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;
