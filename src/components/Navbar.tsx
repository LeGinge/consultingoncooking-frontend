import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './UI/Button';
import logo from '../assets/COC-Logo.png';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { label: 'Features', to: '/#features' },
        { label: 'How It Works', to: '/#how-it-works' },
        { label: 'For Creators', to: '/#creators' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-40 border-b border-gray-100">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="Consulting on Cooking" className="h-10 md:h-12 w-auto" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6">
                        {links.map(link => (
                            <a
                                key={link.label}
                                href={link.to}
                                className="text-gray-600 hover:text-coc-green font-medium transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex gap-3">
                        <Link to="/login">
                            <Button variant="outline" className="px-5 py-2">Login</Button>
                        </Link>
                        <Link to="/register">
                            <Button variant="primary" className="px-5 py-2">Get Started</Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 p-4 shadow-xl absolute w-full left-0">
                    <div className="flex flex-col gap-4">
                        {links.map(link => (
                            <a
                                key={link.label}
                                href={link.to}
                                className="text-gray-600 font-medium py-2 border-b border-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="flex flex-col gap-2 mt-2">
                            <Link to="/login" onClick={() => setIsOpen(false)}>
                                <Button variant="outline" fullWidth>Login</Button>
                            </Link>
                            <Link to="/register" onClick={() => setIsOpen(false)}>
                                <Button variant="primary" fullWidth>Get Started</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
