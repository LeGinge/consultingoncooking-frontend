import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'white';
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    fullWidth = false,
    className = '',
    ...props
}) => {
    const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-200 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-coc-green text-white hover:bg-green-600 shadow-lg hover:shadow-xl",
        secondary: "bg-coc-blue text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",
        outline: "border-2 border-coc-green text-coc-green hover:bg-green-50",
        white: "bg-white text-coc-green hover:bg-gray-50 shadow-md"
    };

    const width = fullWidth ? "w-full" : "";

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${width} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
