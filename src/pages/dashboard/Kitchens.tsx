import { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import ShareKitchenModal from '../../components/ShareKitchenModal';

type Kitchen = {
    id: string;
    name: string;
    location?: string;
    created_at: string;
    role: 'owner' | 'co-owner';
    sharedWith: number;
    pendingInvites: number;
};

type SharedKitchen = {
    id: string;
    name: string;
    owner: string;
    role: 'editor' | 'viewer';
    expiresAt?: string;
};

export default function Kitchens() {
    const [showShareModal, setShowShareModal] = useState(false);
    const [selectedKitchen, setSelectedKitchen] = useState<Kitchen | null>(null);

    const myKitchens: Kitchen[] = [
        {
            id: 'k1',
            name: 'Home Kitchen',
            location: 'Dubai, UAE',
            created_at: '2024-01-01',
            role: 'owner',
            sharedWith: 2,
            pendingInvites: 1
        }
    ];

    const sharedKitchens: SharedKitchen[] = [
        {
            id: 'k2',
            name: 'Mom\'s Kitchen',
            owner: 'Mom',
            role: 'editor',
            expiresAt: '2026-02-14'
        },
        {
            id: 'k3',
            name: 'Vacation Villa - Bali',
            owner: 'Airbnb Host',
            role: 'viewer',
            expiresAt: '2026-02-20'
        }
    ];

    return (
        <DashboardLayout>
            <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-steel-900">My Kitchens</h1>
                    <button className="bg-coc-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
                        + Create Kitchen
                    </button>
                </div>

                {/* Kitchens I Own */}
                <section className="mb-12">
                    <h2 className="text-xl font-semibold text-steel-900 mb-4">Kitchens I Own</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {myKitchens.map(kitchen => (
                            <div key={kitchen.id} className="bg-white rounded-lg border border-steel-200 p-6 hover:shadow-lg transition">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-steel-900">{kitchen.name}</h3>
                                        {kitchen.location && (
                                            <div className="text-steel-500 text-sm mt-1">{kitchen.location}</div>
                                        )}
                                    </div>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                                        {kitchen.role}
                                    </span>
                                </div>

                                <div className="space-y-2 text-sm text-steel-600 mb-4">
                                    <div>👥 Shared with {kitchen.sharedWith} {kitchen.sharedWith === 1 ? 'person' : 'people'}</div>
                                    {kitchen.pendingInvites > 0 && (
                                        <div className="text-orange-600">
                                            ⏳ {kitchen.pendingInvites} pending {kitchen.pendingInvites === 1 ? 'invitation' : 'invitations'}
                                        </div>
                                    )}
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => {
                                            setSelectedKitchen(kitchen);
                                            setShowShareModal(true);
                                        }}
                                        className="flex-1 bg-coc-blue text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-semibold transition"
                                    >
                                        Share Kitchen
                                    </button>
                                    <button className="px-4 py-2 border border-steel-300 rounded-lg hover:bg-steel-50 text-steel-700 font-medium">
                                        Manage
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Shared With Me */}
                <section>
                    <h2 className="text-xl font-semibold text-steel-900 mb-4">Shared With Me</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {sharedKitchens.map(kitchen => (
                            <div key={kitchen.id} className="bg-white rounded-lg border border-steel-200 p-6 hover:shadow-lg transition">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-steel-900">{kitchen.name}</h3>
                                        <div className="text-steel-500 text-sm mt-1">Shared by {kitchen.owner}</div>
                                    </div>
                                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full capitalize">
                                        {kitchen.role}
                                    </span>
                                </div>

                                {kitchen.expiresAt && (
                                    <div className="text-sm text-orange-600 mb-4 flex items-center gap-2">
                                        ⏰ Access expires {new Date(kitchen.expiresAt).toLocaleDateString()}
                                    </div>
                                )}

                                <button className="w-full px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 font-medium">
                                    Leave Kitchen
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Share Modal */}
            {showShareModal && selectedKitchen && (
                <ShareKitchenModal
                    kitchenName={selectedKitchen.name}
                    onClose={() => {
                        setShowShareModal(false);
                        setSelectedKitchen(null);
                    }}
                />
            )}
        </DashboardLayout>
    );
}
