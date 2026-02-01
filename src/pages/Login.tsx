import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/UI/Button';
import { Input } from '../components/UI/Input';
import logo from '../assets/COC-Logo.png';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-8">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                    <Link to="/">
                        <img src={logo} alt="Consulting on Cooking" className="h-12 mx-auto mb-4" />
                    </Link>
                    <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
                    <p className="text-gray-500 mt-2">Sign in to access your kitchen</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <div className="space-y-1">
                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                        <div className="flex justify-end">
                            <a href="#" className="text-sm text-coc-green hover:underline">Forgot password?</a>
                        </div>
                    </div>

                    <Button type="submit" fullWidth className="py-3 text-lg">
                        Log In
                    </Button>
                </form>

                <div className="mt-8 text-center text-gray-500">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-coc-green font-semibold hover:underline">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
