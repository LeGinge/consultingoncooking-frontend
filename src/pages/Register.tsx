import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/UI/Button';
import { Input } from '../components/UI/Input';
import logo from '../assets/COC-Logo.png';

const Register: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '' });
    const [agreed, setAgreed] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Register attempt:', formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center animate-fade-in">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">🎉</div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to the Kitchen!</h1>
                    <p className="text-gray-600 mb-8">
                        Your account has been created. Start chatting with Coen now to begin your cooking journey.
                    </p>

                    <div className="space-y-4">
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                            <Button fullWidth className="bg-[#25D366] hover:bg-[#128C7E] mb-3">
                                Continue on WhatsApp
                            </Button>
                        </a>
                        <a href="https://t.me/ConsultingOnCookingBot" target="_blank" rel="noopener noreferrer">
                            <Button fullWidth className="bg-[#0088cc] hover:bg-[#0077b5]">
                                Continue on Telegram
                            </Button>
                        </a>
                    </div>

                    <Link to="/" className="block mt-6 text-gray-500 hover:text-gray-700 text-sm">
                        Return to Homepage
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-8">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                    <Link to="/">
                        <img src={logo} alt="Consulting on Cooking" className="h-12 mx-auto mb-4" />
                    </Link>
                    <h1 className="text-2xl font-bold text-gray-900">Start Your Cooking Journey</h1>
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
                            className="mt-1"
                            checked={agreed}
                            onChange={e => setAgreed(e.target.checked)}
                            required
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600 leading-tight">
                            I agree to the <a href="#" className="text-coc-green hover:underline">Terms of Service</a> and <a href="#" className="text-coc-green hover:underline">Privacy Policy</a>
                        </label>
                    </div>

                    <Button type="submit" fullWidth className="py-3 text-lg" disabled={!agreed}>
                        Create Account
                    </Button>
                </form>

                <div className="mt-8 text-center text-gray-500">
                    Already have an account?{' '}
                    <Link to="/login" className="text-coc-green font-semibold hover:underline">
                        Log in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
