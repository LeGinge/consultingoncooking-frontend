import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-steel-50 border-t border-steel-200 py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-sm text-steel-500 font-medium">
                        © {new Date().getFullYear()} Consulting on Cooking. All rights reserved.
                    </div>

                    <div className="flex gap-8 flex-wrap justify-center">
                        <Link to="/about" className="text-steel-500 hover:text-coc-blue text-sm font-medium transition-colors">About</Link>
                        <Link to="/contact" className="text-steel-500 hover:text-coc-blue text-sm font-medium transition-colors">Contact</Link>
                        <Link to="/privacy" className="text-steel-500 hover:text-coc-blue text-sm font-medium transition-colors">Privacy</Link>
                        <Link to="/terms" className="text-steel-500 hover:text-coc-blue text-sm font-medium transition-colors">Terms</Link>
                    </div>

                    <div className="flex gap-4">
                        {/* Social Placeholders */}
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full bg-steel-200 hover:bg-steel-300 transition-colors cursor-pointer"></div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
