import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ChatButton } from '../components/ChatButton';
import { Button } from '../components/UI/Button';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
    return (
        <div className="min-h-screen font-sans text-steel-800 bg-steel-50">
            <Navbar />

            {/* Hero Section */}
            <section className="hero-background min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">
                <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/50 text-coc-blue-dark font-medium text-sm shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-coc-blue animate-pulse"></span>
                            AI-Powered Culinary Intelligence
                        </div>

                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-steel-900 leading-[1.1] tracking-tight">
                            Master the Art of <span className="text-transparent bg-clip-text bg-gradient-to-r from-coc-blue to-coc-green">Professional</span> Cooking
                        </h1>

                        <p className="text-xl text-steel-600 leading-relaxed max-w-xl">
                            Instant access to expert guidance, precision techniques, and a 24/7 AI sous chef that adapts to your kitchen.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link to="/register">
                                <Button variant="primary" className="px-8 py-4 text-lg w-full sm:w-auto shadow-lg shadow-coc-blue/25 hover:shadow-coc-blue/40 transition-all transform hover:-translate-y-1">
                                    Start Cooking Free
                                </Button>
                            </Link>
                            <Button variant="white" className="px-8 py-4 text-lg w-full sm:w-auto border border-steel-200 hover:bg-steel-50 transition-colors">
                                View Demo
                            </Button>
                        </div>

                        <div className="pt-8 flex items-center gap-4 text-sm text-steel-500">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-steel-200"></div>
                                ))}
                            </div>
                            <p>Joined by <span className="font-bold text-steel-900">10,000+</span> creators</p>
                        </div>
                    </div>

                    {/* Hero Visual Card */}
                    <div className="relative hidden lg:block">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-coc-blue/20 to-coc-green/20 rounded-[32px] blur-2xl transform rotate-3"></div>
                        <div className="glass-card rounded-[32px] p-6 relative transform transition-transform hover:scale-[1.01] duration-500">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-steel-100 relative">
                                {/* Using one of the uploaded steel backgrounds as a fallback/texture */}
                                <div className="absolute inset-0 bg-[url('/assets/steel-bg-2.jpg')] bg-cover opacity-50 mix-blend-overlay"></div>
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-steel-100 to-steel-200">
                                    <div className="text-center p-8">
                                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl mx-auto mb-6 text-4xl">
                                            🍳
                                        </div>
                                        <h3 className="text-2xl font-bold text-steel-800 mb-2">Interactive Kitchen</h3>
                                        <p className="text-steel-500">Voice-guided steps & real-time adaptability</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Cards */}
                            <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-steel-100 flex items-center gap-4 animate-bounce-slow">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl">🥗</div>
                                <div>
                                    <p className="text-xs text-steel-500 font-bold uppercase tracking-wider">Calories</p>
                                    <p className="text-lg font-bold text-steel-900">320 kcal</p>
                                </div>
                            </div>

                            <div className="absolute -top-8 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-steel-100 flex items-center gap-4 animate-bounce-slow delay-150">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl">⏱️</div>
                                <div>
                                    <p className="text-xs text-steel-500 font-bold uppercase tracking-wider">Prep Time</p>
                                    <p className="text-lg font-bold text-steel-900">15 mins</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-24 px-6 bg-white relative">
                <div className="container mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <h2 className="text-4xl font-heading font-bold text-steel-900 mb-6">The Future of Home Cooking</h2>
                        <p className="text-lg text-steel-600">Combine the wisdom of professional chefs with the precision of AI technology.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Voice Control", desc: "Hands-free navigation while your hands are busy chopping.", icon: "🎙️", color: "bg-blue-50 text-blue-600" },
                            { title: "Smart Substitutions", desc: "Missing an ingredient? AI suggests the perfect alternative instantly.", icon: "🔄", color: "bg-green-50 text-green-600" },
                            { title: "Skill Tracking", desc: "Monitor your progress as you master new techniques.", icon: "📈", color: "bg-purple-50 text-purple-600" }
                        ].map((feature, i) => (
                            <div key={i} className="group p-8 rounded-3xl bg-steel-50 hover:bg-white border border-transparent hover:border-steel-100 hover:shadow-xl transition-all duration-300">
                                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-steel-900 mb-3">{feature.title}</h3>
                                <p className="text-steel-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Recipes (Carousel style from Demo) */}
            <section className="py-24 px-6 bg-steel-50 overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-steel-900 mb-2">Popular This Week</h2>
                            <p className="text-steel-500">Trending recipes from top creators</p>
                        </div>
                        <Button variant="outline" className="hidden md:block">View All Recipes</Button>
                    </div>

                    <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="min-w-[300px] bg-white rounded-2xl shadow-sm border border-steel-100 overflow-hidden snap-center hover:shadow-md transition-shadow">
                                <div className="h-48 bg-steel-200 relative">
                                    <div className={`absolute inset-0 bg-[url('/assets/steel-bg-${(i % 4) + 1}.jpg')] bg-cover opacity-80`}></div>
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-steel-700">
                                        25 min
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-lg text-steel-900 mb-2">Rustic Steel Pan Pizza</h3>
                                    <div className="flex items-center justify-between text-sm text-steel-500">
                                        <span>Intermediate</span>
                                        <div className="flex items-center">
                                            <span className="text-yellow-400 mr-1">★</span> 4.9
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Creator CTA */}
            <section id="creators" className="py-32 px-6 relative overflow-hidden bg-steel-900">
                {/* Abstract shapes */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-coc-blue/20 to-transparent"></div>

                <div className="container mx-auto relative z-10 text-center max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
                        Share Your Craft with the World
                    </h2>
                    <p className="text-xl text-steel-300 mb-10 leading-relaxed">
                        Join a community of passionate food creators. Monetize your best recipes and help millions cook better.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button variant="primary" className="px-10 py-5 text-lg shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                            Apply as Creator
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
            <ChatButton />
        </div>
    );
};

export default Landing;
