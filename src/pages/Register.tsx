import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/UI/Button';
import { Input } from '../components/UI/Input';
import logo from '../assets/COC-Logo.png';

const Register: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '' });
    const [agreed, setAgreed] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        console.log('Register attempt:', formData);

        // Call backend API to send email
        try {
            await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: formData.name, email: formData.email }),
            });
        } catch (error) {
            console.error('Failed to send email:', error);
            // Continue flow even if email fails - it's a non-blocking enhancement
        }

        setSubmitted(true);
        setLoading(false);
    };

    if (submitted) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-steel-50 px-4">
                <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-steel-100 p-8 text-center animate-fade-in">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl animate-bounce-slow">🎉</div>
                    <h1 className="text-3xl font-heading font-bold text-steel-900 mb-4">Welcome to the Kitchen!</h1>
                    <p className="text-steel-600 mb-8 leading-relaxed">
                        Your account has been created. Start chatting with Coen now to begin your cooking journey.
                    </p>

                    <div className="space-y-4">
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                            <Button fullWidth className="bg-[#25D366] hover:bg-[#128C7E] mb-3 border-none shadow-md text-white font-bold h-14 rounded-xl">
                                Continue on WhatsApp
                            </Button>
                        </a>
                        <a href="https://t.me/ConsultingOnCookingBot" target="_blank" rel="noopener noreferrer">
                            <Button fullWidth className="bg-[#0088cc] hover:bg-[#0077b5] border-none shadow-md text-white font-bold h-14 rounded-xl">
                                Continue on Telegram
                            </Button>
                        </a>
                    </div>

                    <Link to="/" className="block mt-8 text-steel-400 hover:text-steel-600 text-sm font-medium transition-colors">
                        Return to Homepage
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-steel-50 px-4 py-8 hero-background">
            <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 relative z-10">
                <div className="text-center mb-8">
                    <Link to="/">
                        <img src={logo} alt="Consulting on Cooking" className="h-12 mx-auto mb-4" />
                    </Link>
                    <h1 className="text-2xl font-heading font-bold text-steel-900">Start Your Cooking Journey</h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <Input
                        label="Full Name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                    <Input
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                    <Input
                        label="Phone (Optional)"
                        placeholder="For WhatsApp connection"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <Input
                        label="Password"
                        type="password"
                        value={formData.password}
                        onChange={e => setFormData({ ...formData, password: e.target.value })}
                        required
                    />

                    <div className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            id="terms"
                            className="mt-1 w-4 h-4 text-coc-green rounded border-gray-300 focus:ring-coc-green"
                            checked={agreed}
                            onChange={e => setAgreed(e.target.checked)}
                            required
                        />
                        <label htmlFor="terms" className="text-sm text-steel-600 leading-tight">
                            I agree to the <a href="#" className="text-coc-blue hover:underline">Terms of Service</a> and <a href="#" className="text-coc-blue hover:underline">Privacy Policy</a>
                        </label>
                    </div>

                    <Button type="submit" fullWidth className="py-4 text-lg font-bold shadow-lg shadow-coc-blue/20" disabled={!agreed || loading} variant="primary">
                        {loading ? 'Creating Account...' : 'Create Account'}
                    </Button>
                </form>

                <div className="mt-8 text-center text-steel-500 text-sm">
                    Already have an account?{' '}
                    <Link to="/login" className="text-coc-blue font-bold hover:underline">
                        Log in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
