import React from 'react';
import { Mic, Code, Brain, Settings, Play, FileCode, Users, ChevronRight, Github, Twitter } from 'lucide-react';

function Homepage({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mic className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold">VoxIDE</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#demo" className="hover:text-blue-400 transition-colors">Demo</a>
            <a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-medium transition-colors">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-7xl font-bold mb-8">
        VoxIDE
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
        Effortlessly edit code using your voice with advanced audio commands.
No need to type—just open a file and start speaking your instructions.
Code faster, smarter, and hands-free with voice-powered development.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
        <button
        onClick={onGetStarted}
        className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
        >
        <span>Get Started Free</span>
        <ChevronRight className="w-5 h-5" />
        </button>

          <button className="bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
            <Play className="w-5 h-5" />
            <span>Watch Demo</span>
          </button>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="container mx-auto px-6 py-20">
        <div className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="aspect-video bg-slate-900 flex items-center justify-center">
            <Play className="w-20 h-20 text-blue-400 opacity-50" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Powerful Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Brain className="w-8 h-8 text-blue-400" />}
            title="Advanced Recognition"
            description="State-of-the-art voice recognition trained on programming commands"
          />
          <FeatureCard
            icon={<Code className="w-8 h-8 text-blue-400" />}
            title="Multi-Language Support"
            description="Works with Python, JavaScript, Java, and many more languages"
          />
          <FeatureCard
            icon={<FileCode className="w-8 h-8 text-blue-400" />}
            title="Smart Navigation"
            description="Quickly navigate between files and code sections"
          />
          <FeatureCard
            icon={<Settings className="w-8 h-8 text-blue-400" />}
            title="Custom Commands"
            description="Create and customize your own voice commands"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">What Developers Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=150"
            name="David Chen"
            role="Senior Developer"
            quote="VoiceCode has completely changed how I work. I can code faster and with less strain on my hands."
          />
          <TestimonialCard
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
            name="Sarah Miller"
            role="Full Stack Engineer"
            quote="The accuracy is impressive. It understands complex commands and rarely makes mistakes."
          />
          <TestimonialCard
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
            name="Tom Wilson"
            role="Tech Lead"
            quote="Perfect for pair programming sessions. The whole team can follow along easily."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Mic className="w-6 h-6 text-blue-400" />
                <span className="font-bold">VoiceCode</span>
              </div>
              <p className="text-gray-400">Transform your coding experience with the power of voice.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Features</a></li>
                <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">About</a></li>
                <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 VoiceCode. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-slate-800 p-6 rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function TestimonialCard({ image, name, role, quote }: { image: string; name: string; role: string; quote: string }) {
  return (
    <div className="bg-slate-800 p-6 rounded-lg">
      <div className="flex items-center space-x-4 mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-300 italic">&ldquo;{quote}&rdquo;</p>
    </div>
  );
}

export default Homepage;