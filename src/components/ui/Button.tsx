import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button";
}

export function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-4 rounded-xl font-display font-semibold transition-all duration-200 uppercase tracking-widest text-sm hover:-translate-y-1";
  
  const variants = {
    primary: "bg-primary text-white shadow-[0_4px_14px_0_rgba(45,106,79,0.39)] hover:shadow-[0_6px_20px_rgba(45,106,79,0.23)] hover:bg-primary-dark",
    secondary: "bg-earth text-white shadow-lg hover:bg-[#7a5234]",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
