import React from 'react';

export const ChatButton: React.FC = () => {
    return (
        <div className="fixed bottom-6 right-6 md:right-8 z-50 flex flex-col items-end gap-2 group">
            {/* Expanded Menu - shown on hover/focus */}
            <div className="hidden group-hover:flex flex-col gap-2 mb-2 transition-all duration-300 origin-bottom-right">
                <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg hover:bg-gray-50 border border-gray-100"
                >
                    <span className="font-medium text-sm">WhatsApp</span>
                </a>
                <a
                    href="https://t.me/ConsultingOnCookingBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg hover:bg-gray-50 border border-gray-100"
                >
                    <span className="font-medium text-sm">Telegram</span>
                </a>
            </div>

            {/* Main Button */}
            <button className="bg-coc-green text-white px-6 py-4 rounded-full shadow-xl hover:bg-green-600 transition-all flex items-center gap-2 font-bold text-lg animate-bounce-subtle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Chat to Coen
            </button>
        </div>
    );
};
