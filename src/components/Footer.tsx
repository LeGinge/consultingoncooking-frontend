import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Consulting on Cooking. All rights reserved.
                    </div>

                    <div className="flex gap-6 flex-wrap justify-center">
                        <Link to="/about" className="text-gray-500 hover:text-coc-green text-sm">About</Link>
                        <Link to="/contact" className="text-gray-500 hover:text-coc-green text-sm">Contact</Link>
                        <Link to="/privacy" className="text-gray-500 hover:text-coc-green text-sm">Privacy</Link>
                        <Link to="/terms" className="text-gray-500 hover:text-coc-green text-sm">Terms</Link>
                    </div>

                    <div className="flex gap-4">
                        {/* Social Placeholders */}
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
