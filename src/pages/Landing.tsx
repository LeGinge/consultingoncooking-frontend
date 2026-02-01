import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ChatButton } from '../components/ChatButton';
import { Button } from '../components/UI/Button';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
    return (
        <div className="min-h-screen font-sans text-gray-800">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 to-white">
                <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Learn to Cook with <span className="text-coc-green">Confidence</span>
                        </h1>
                        <p className="text-xl text-gray-600">
                            AI-powered cooking guidance, expert creator videos, and step-by-step help whenever you need it.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/register">
                                <Button variant="primary" className="px-8 py-4 text-lg">Start Cooking Free</Button>
                            </Link>
                            <Button variant="outline" className="px-8 py-4 text-lg">Watch Demo</Button>
                        </div>
                    </div>
                    <div className="relative">
                        {/* Placeholder for Hero Image */}
                        <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-400 font-medium">Cooking Scene Hero Visual</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-16">How It Works</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Discover Recipes", desc: "Browse thousands of creator videos", icon: "📖" },
                            { title: "Cook with Coen", desc: "AI guidance adapts to your kitchen", icon: "🤖" },
                            { title: "Build Your Skills", desc: "Save favorites and track progress", icon: "🍳" }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform">
                                <div className="text-5xl mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16">Everything You Need</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {['Creator Video Library', 'AI Cooking Assistant', 'Multi-Kitchen Support',
                            'Ingredient Tracking', 'Device-Aware Recipes', 'Family Sharing'].map((feature, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-coc-green text-xl font-bold">✓</div>
                                    <span className="font-semibold text-lg">{feature}</span>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* Creator CTA */}
            <section id="creators" className="py-20 px-4 bg-coc-green text-white">
                <div className="container mx-auto text-center max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Are You A Food Creator?</h2>
                    <p className="text-xl mb-8 opacity-90">Share your recipes, grow your audience, and earn from your content while helping others learn to cook.</p>
                    <Button variant="white" className="px-8 py-4 text-lg text-coc-green font-bold">Join as Creator</Button>
                </div>
            </section>

            <Footer />
            <ChatButton />
        </div>
    );
};

export default Landing;
