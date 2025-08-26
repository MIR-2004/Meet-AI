"use client";

import React, { useState, useEffect } from 'react';
import { MessageSquare, Video, Brain, Users, Zap, ArrowRight, Play, CheckCircle, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const HomeView = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "Smart AI Assistant",
      description: "Advanced AI that understands context and provides intelligent insights during meetings"
    },
    {
      icon: Video,
      title: "Seamless Video Integration", 
      description: "Crystal-clear video calls with real-time AI analysis and support"
    },
    {
      icon: MessageSquare,
      title: "Intelligent Chat",
      description: "Get instant answers and explanations while staying focused on your meeting"
    },
    {
      icon: Users,
      title: "Collaborative Experience",
      description: "Enhanced team collaboration with AI-powered meeting facilitation"
    }
  ];

  const testimonials = [
    { 
      name: "Sarah Chen", 
      role: "Product Manager", 
      company: "TechCorp", 
      rating: 5, 
      text: "Meet-AI transformed our meetings. The AI insights are incredibly valuable." 
    },
    { 
      name: "David Rodriguez", 
      role: "CEO", 
      company: "StartupX", 
      rating: 5, 
      text: "Game-changer for remote teams. Our productivity increased by 40%." 
    },
    { 
      name: "Emily Watson", 
      role: "Designer", 
      company: "Creative Co", 
      rating: 5, 
      text: "The AI understands context better than any tool I've used before." 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-green-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl animate-pulse"
          style={{ 
            left: `${mousePosition.x * 0.01}%`, 
            top: `${mousePosition.y * 0.01}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-600/15 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-ping" style={{ animationDuration: '6s' }} />
      </div>

      {/* Navigation */}
      <nav className={`relative z-10 p-6 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center gap-2 px-2 pt-2">
          <Image src="/logo.svg" height={36} width={36} alt="Meet.AI" />
          <p className="text-2xl font-semibold">Meet.AI</p>
        </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-emerald-300 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-emerald-300 transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-emerald-300 transition-colors">Reviews</a>
            <button className="bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-2 rounded-full hover:scale-105 transition-transform">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Meet with
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
                {' '}AI Magic
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your meetings with intelligent AI assistance. Get real-time insights, 
              instant answers, and seamless collaboration like never before.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <button className="group bg-gradient-to-r from-emerald-500 to-green-500 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <span>Start Free Meeting</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border border-emerald-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-400/10 transition-all duration-300 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-emerald-400 mb-2">50K+</div>
              <div className="text-gray-300">Meetings Enhanced</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-gray-300">User Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-teal-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how Meet-AI revolutionizes your meeting experience with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105 cursor-pointer ${
                    activeFeature === index ? 'ring-2 ring-emerald-400' : ''
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Choose Your Plan</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start free and scale with your team. No hidden fees, cancel anytime.
            </p>
            <div className="inline-flex items-center mt-8 bg-white/10 backdrop-blur-lg rounded-full p-2 border border-white/20">
              <span className="text-gray-300 px-4">You are on the </span>
              <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Free</span>
              <span className="text-gray-300 px-4"> plan</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Monthly Plan */}
            <div className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:scale-105 transition-all duration-500 hover:border-emerald-400/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Monthly</h3>
                <p className="text-gray-400 mb-6">For teams getting started</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold">$29</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
              </div>
              
              <button className="w-full bg-white/10 border border-emerald-400 text-emerald-400 py-3 rounded-xl font-semibold mb-8 hover:bg-emerald-400/10 transition-all duration-300 group-hover:scale-105">
                Upgrade
              </button>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-emerald-300">FEATURES</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">Unlimited meetings</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">Unlimited agents</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Yearly Plan - Best Value */}
            <div className="group relative bg-gradient-to-br from-emerald-600/20 to-green-600/20 backdrop-blur-lg rounded-3xl p-8 border-2 border-emerald-400 hover:scale-105 transition-all duration-500 transform hover:rotate-1">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Best value
                </span>
              </div>
              
              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold mb-2 text-emerald-300">Yearly</h3>
                <p className="text-gray-300 mb-6">For teams that need to scale</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold">$259</span>
                  <span className="text-gray-400 ml-2">/year</span>
                </div>
                <div className="text-sm text-emerald-400 mt-2">Save $89 per year!</div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 rounded-xl font-semibold mb-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25">
                Upgrade
              </button>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-emerald-300">FEATURES</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-white">Unlimited meetings</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-white">Unlimited agents</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-white">2 months free</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:scale-105 transition-all duration-500 hover:border-emerald-400/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-400 mb-6">For teams with special requests</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold">$999</span>
                  <span className="text-gray-400 ml-2">/year</span>
                </div>
              </div>
              
              <button className="w-full bg-white/10 border border-emerald-400 text-emerald-400 py-3 rounded-xl font-semibold mb-8 hover:bg-emerald-400/10 transition-all duration-300 group-hover:scale-105">
                Upgrade
              </button>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-emerald-300">FEATURES</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">2 months free</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">Unlimited meetings</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">Unlimited agents</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">Dedicated Discord Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Usage Stats */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-center mb-8">Current Usage</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Agents</span>
                    <span className="text-emerald-400 font-semibold">2/5</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full animate-pulse" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Meetings</span>
                    <span className="text-emerald-400 font-semibold">3/5</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6">
                <button className="bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                  Upgrade to unlock more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-800/30 to-green-800/30 rounded-3xl p-12 border border-emerald-400/30 backdrop-blur-lg hover:border-emerald-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-400/20">
            <h2 className="text-5xl font-bold mb-6 animate-pulse">Ready to Transform Your Meetings?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your journey with AI-powered meetings today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group bg-gradient-to-r from-emerald-500 to-green-500 px-10 py-4 rounded-full text-lg font-semibold hover:scale-110 hover:from-emerald-400 hover:to-green-400 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-emerald-400/30">
                <span>Get Started Free</span>
                <Zap className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              </button>
              <div className="flex items-center space-x-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 animate-pulse" />
                <span>Free forever plan available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">What Users Say</h2>
            <p className="text-xl text-gray-300">Join thousands of satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-8 border border-emerald-800/20 hover:scale-105 hover:border-emerald-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Image src="/logo.svg" height={36} width={36} alt="Meet.AI" />
            <span className="text-xl font-bold">Meet-AI</span>
          </div>
          <p className="text-gray-400">© 2025 Meet-AI. All rights reserved. Making meetings smarter, one conversation at a time.</p>
        </div>
      </footer>
    </div>
  );
};

