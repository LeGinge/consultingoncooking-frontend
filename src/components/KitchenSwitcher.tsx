import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function KitchenSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKitchen, setActiveKitchen] = useState('k1');

    // Mock data
    const kitchens = [
        { id: 'k1', name: 'Home Kitchen - Dubai', role: 'owner' as const },
        { id: 'k2', name: 'Mom\'s Kitchen', role: 'editor' as const, expiresAt: '2026-02-14' },
        { id: 'k3', name: 'Vacation Villa', role: 'viewer' as const, expiresAt: '2026-02-20' }
    ];

    const active = kitchens.find(k => k.id === activeKitchen);
    const owned = kitchens.filter(k => ['owner', 'co-owner'].includes(k.role));
    const shared = kitchens.filter(k => ['editor', 'viewer'].includes(k.role));

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-steel-300 rounded-lg hover:bg-steel-50 transition"
            >
                <span className="text-xl">🏡</span>
                <div className="text-left">
                    <div className="font-semibold text-steel-900 text-sm">{active?.name}</div>
                    <div className="text-xs text-steel-500 capitalize">{active?.role}</div>
                </div>
                <ChevronDownIcon className="w-4 h-4 text-steel-400" />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-steel-200 py-2 z-50">
                    <div className="px-4 py-2 text-xs font-semibold text-steel-500 uppercase tracking-wide">
                        My Kitchens
                    </div>
                    {owned.map(kitchen => (
                        <button
                            key={kitchen.id}
                            onClick={() => {
                                setActiveKitchen(kitchen.id);
                                setIsOpen(false);
                            }}
                            className="w-full text-left px-4 py-3 hover:bg-steel-50 flex justify-between items-center"
                        >
                            <div>
                                <div className="font-medium text-steel-900">{kitchen.name}</div>
                                <div className="text-xs text-steel-500 capitalize">{kitchen.role}</div>
                            </div>
                            {activeKitchen === kitchen.id && (
                                <span className="text-coc-green text-xl">✓</span>
                            )}
                        </button>
                    ))}

                    {shared.length > 0 && (
                        <>
                            <div className="border-t border-steel-200 my-2"></div>
                            <div className="px-4 py-2 text-xs font-semibold text-steel-500 uppercase tracking-wide">
                                Shared With Me
                            </div>
                            {shared.map(kitchen => (
                                <button
                                    key={kitchen.id}
                                    onClick={() => {
                                        setActiveKitchen(kitchen.id);
                                        setIsOpen(false);
                                    }}
                                    className="w-full text-left px-4 py-3 hover:bg-steel-50"
                                >
                                    <div className="font-medium text-steel-900">{kitchen.name}</div>
                                    <div className="text-xs text-steel-500">
                                        {kitchen.role} • {kitchen.expiresAt && `Expires ${new Date(kitchen.expiresAt).toLocaleDateString()}`}
                                    </div>
                                </button>
                            ))}
                        </>
                    )}

                    <div className="border-t border-steel-200 mt-2"></div>
                    <button className="w-full text-left px-4 py-3 text-coc-blue font-semibold hover:bg-blue-50">
                        + Create New Kitchen
                    </button>
                </div>
            )}
        </div>
    );
}
