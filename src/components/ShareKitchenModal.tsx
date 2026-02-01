import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

type Props = {
    kitchenName: string;
    onClose: () => void;
};

export default function ShareKitchenModal({ kitchenName, onClose }: Props) {
    const [method, setMethod] = useState<'email' | 'whatsapp' | 'telegram'>('email');
    const [contact, setContact] = useState('');
    const [role, setRole] = useState<'co-owner' | 'editor' | 'viewer'>('editor');
    const [duration, setDuration] = useState<'permanent' | 'limited'>('permanent');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleShare = () => {
        // TODO: Backend integration
        const invite = {
            contact,
            method,
            role,
            duration,
            start_date: duration === 'limited' ? startDate : null,
            end_date: duration === 'limited' ? endDate : null
        };
        console.log('Sharing kitchen:', invite);

        // Generate share link/message based on method
        if (method === 'whatsapp') {
            const message = `Join my kitchen "${kitchenName}" on Consulting on Cooking: https://consultingoncooking.com/invite/ABC123`;
            window.open(`https://wa.me/${contact}?text=${encodeURIComponent(message)}`);
        } else if (method === 'telegram') {
            const message = `Join my kitchen "${kitchenName}" on Consulting on Cooking: https://consultingoncooking.com/invite/ABC123`;
            window.open(`https://t.me/share/url?url=https://consultingoncooking.com/invite/ABC123&text=${encodeURIComponent(message)}`);
        } else {
            // Email - will use Resend API
            alert(`Invitation email sent to ${contact}`);
        }

        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-lg w-full p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-steel-900">
                        Share "{kitchenName}"
                    </h2>
                    <button onClick={onClose} className="text-steel-400 hover:text-steel-600">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Invite Method */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-steel-700 mb-3">
                        Invite via
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                        {(['email', 'whatsapp', 'telegram'] as const).map(m => (
                            <button
                                key={m}
                                onClick={() => setMethod(m)}
                                className={`px-4 py-3 rounded-lg border-2 font-semibold capitalize transition ${method === m
                                        ? 'border-coc-blue bg-blue-50 text-coc-blue'
                                        : 'border-steel-200 text-steel-600 hover:border-steel-300'
                                    }`}
                            >
                                {m === 'whatsapp' && '📱 WhatsApp'}
                                {m === 'telegram' && '✈️ Telegram'}
                                {m === 'email' && '📧 Email'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Contact Input */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-steel-700 mb-2">
                        {method === 'email' ? 'Email Address' : 'Phone Number'}
                    </label>
                    <input
                        type={method === 'email' ? 'email' : 'tel'}
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder={method === 'email' ? 'friend@example.com' : '+971 50 123 4567'}
                        className="w-full px-4 py-2 border border-steel-300 rounded-lg focus:ring-2 focus:ring-coc-blue focus:border-transparent"
                    />
                </div>

                {/* Access Level */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-steel-700 mb-2">
                        Access Level
                    </label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value as any)}
                        className="w-full px-4 py-2 border border-steel-300 rounded-lg focus:ring-2 focus:ring-coc-blue"
                    >
                        <option value="co-owner">Co-Owner (Full access, can share)</option>
                        <option value="editor">Editor (Add/edit items)</option>
                        <option value="viewer">Viewer (Read-only)</option>
                    </select>
                </div>

                {/* Duration */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-steel-700 mb-3">
                        Duration
                    </label>
                    <div className="space-y-3">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                checked={duration === 'permanent'}
                                onChange={() => setDuration('permanent')}
                                className="w-4 h-4 text-coc-blue"
                            />
                            <span className="ml-2 text-steel-900">Permanent</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                checked={duration === 'limited'}
                                onChange={() => setDuration('limited')}
                                className="w-4 h-4 text-coc-blue"
                            />
                            <span className="ml-2 text-steel-900">Time-limited</span>
                        </label>
                    </div>

                    {duration === 'limited' && (
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-xs text-steel-600 mb-1">From</label>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="w-full px-3 py-2 border border-steel-300 rounded-lg text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-steel-600 mb-1">Until</label>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="w-full px-3 py-2 border border-steel-300 rounded-lg text-sm"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-3 border border-steel-300 rounded-lg text-steel-700 font-semibold hover:bg-steel-50"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleShare}
                        disabled={!contact}
                        className="flex-1 px-4 py-3 bg-coc-green text-white rounded-lg font-semibold hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Send Invitation
                    </button>
                </div>
            </div>
        </div>
    );
}
