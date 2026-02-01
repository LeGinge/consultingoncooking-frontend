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
        <nav className="fixed top-4 left-4 right-4 z-50">
            <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg shadow-black/5 px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="Consulting on Cooking" className="h-10 w-auto" />
                    <span className="font-heading font-bold text-xl text-steel-800 tracking-tight hidden sm:block">
                        Consulting on <span className="text-coc-green">Cooking</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6">
                        {links.map(link => (
                            <a
                                key={link.label}
                                href={link.to}
                                className="text-steel-600 hover:text-coc-blue font-medium transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex gap-3">
                        <Link to="/login">
                            <Button variant="white" className="shadow-sm border border-steel-200 text-steel-700 hover:bg-steel-50">Log In</Button>
                        </Link>
                        <Link to="/register">
                            <Button variant="primary" className="shadow-md shadow-coc-blue/20">Get Started</Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-steel-600"
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
                <div className="absolute top-full left-0 right-0 mt-2 px-4 md:hidden">
                    <div className="bg-white/95 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl p-4 flex flex-col gap-4">
                        {links.map(link => (
                            <a
                                key={link.label}
                                href={link.to}
                                className="text-steel-600 font-medium py-2 border-b border-steel-100"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="flex flex-col gap-3 mt-2">
                            <Link to="/login" onClick={() => setIsOpen(false)}>
                                <Button variant="outline" fullWidth>Log In</Button>
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
