'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white relative">
      {/* Interactive Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-3xl opacity-30"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
            top: '10%',
            left: '10%'
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 blur-3xl opacity-30"
          style={{
            transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px)`,
            bottom: '10%',
            right: '10%'
          }}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className={`text-center space-y-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            
            {/* Main Title */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-medium mb-6">
                  ✨ EAST MEETS WEST ✨
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white animate-gradient-x">
                  DESTINY
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 opacity-80">
                  算命学 × MBTI
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Ancient wisdom meets modern psychology.
                <br />
                <span className="text-gray-500">古代の叡智と現代心理学の融合</span>
              </p>
            </div>

            {/* Feature Cards - Modern Glassmorphism */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-16">
              <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-4">🌏</div>
                <h3 className="font-bold text-lg mb-2">Global</h3>
                <p className="text-sm text-gray-400">
                  Born anywhere<br />世界中どこでも
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-4">🧬</div>
                <h3 className="font-bold text-lg mb-2">MBTI</h3>
                <p className="text-sm text-gray-400">
                  16 personalities<br />16の性格タイプ
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="font-bold text-lg mb-2">Precise</h3>
                <p className="text-sm text-gray-400">
                  AI-powered<br />AI分析
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="font-bold text-lg mb-2">Instant</h3>
                <p className="text-sm text-gray-400">
                  Results in 1min<br />1分で結果
                </p>
              </div>
            </div>

            {/* CTA Button - Modern Style */}
            <div className="mt-16 space-y-6">
              <Link
                href="/diagnosis"
                className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden rounded-full bg-white text-black font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Start Your Journey
                </span>
                <svg className="relative z-10 w-5 h-5 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <p className="text-sm text-gray-500">
                100% Free • No Sign-up • 3M+ Users
              </p>
            </div>

            {/* Social Proof */}
            <div className="mt-20 flex flex-wrap items-center justify-center gap-8 opacity-50">
              <div className="text-center">
                <div className="text-2xl font-bold">3M+</div>
                <div className="text-xs text-gray-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-xs text-gray-400">User Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-xs text-gray-400">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-xs text-gray-400">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Optimized Version */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
}