import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    className = '',
    id,
    ...props
}) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                id={inputId}
                className={`px-4 py-3 rounded-lg border focus:ring-2 focus:ring-coc-green focus:border-transparent outline-none transition-all ${error ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-coc-green'
                    }`}
                {...props}
            />
            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
};
