import React from 'react';
import { Brain, Zap, GitBranch, BarChart, Check, Play, Code, Mic, Github, Twitter} from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// Define the props interface
interface HomepageProps {
  onGetStarted: () => void;
}

// Feature card component
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

// Pricing plan card
const PlanCard = ({
  title,
  price,
  features,
  isPopular = false,
  onGetStarted
}: {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  onGetStarted: () => void;
}) => {
  return (
    <div className={`bg-gray-900 rounded-lg p-8 flex flex-col ${isPopular ? 'border border-blue-600 relative' : ''}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-400">/month</span>
      </div>
      <div className="flex-grow">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={20} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={onGetStarted}
        className={`mt-8 py-3 px-6 rounded-md font-medium transition ${isPopular
          ? 'bg-blue-600 text-white hover:bg-blue-500'
          : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
      >
        Get started
      </button>
    </div>
  );
};

// Update the component to use the interface
const Homepage: React.FC<HomepageProps> = ({ onGetStarted }) => {
  const features = [
    {
      icon: <Brain size={24} />,
      title: "Advanced Recognition",
      description: "State-of-the-art voice recognition trained on programming commands"
    },
    {
      icon: <Code size={24} />,
      title: "Multi-Language Support",
      description: "Works with Python, JavaScript, Java, and many more languages"
    },
    {
      icon: <GitBranch size={24} />,
      title: "Custom Commands",
      description: "Create and customize your own voice commands"
    },
    {
      icon: <BarChart size={24} />,
      title: "Performance Analysis",
      description: "Real-time performance insights and optimization recommendations."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
{/* Navbar */}
<nav className="flex justify-between items-center py-4 px-8 border-b border-gray-800">
  <div className="flex items-center gap-2">
    <img className="w-20 object-contain" src="./VoxIDE_Logo.png" alt="VoxIDE Logo" />
    <a href="/" className="text-2xl font-bold text-purple-400">VoxIDE</a>
  </div>
  <div className="flex items-center space-x-6">
    <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
    <a href="#docs" className="text-gray-300 hover:text-white transition">Meet</a>
    <a
      href="#try"
      className="ml-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition"
    >
      Try for free
    </a>
  </div>
</nav>



      {/* Hero Section */}
      <div className="flex items-center justify-between py-20 px-8 lg:px-16">
        <div className="flex w-full pr-0 lg:pr-12">
          <div className='w-1/2'>
            <h1 className="flex justify-center text-5xl lg:text-6xl font-bold text-purple-400 mb-6">VoxIDE</h1>
            <h6 className='flex justify-center text-l text-purple-300'>'Code with your voice. Build hands-free. Welcome to VoxIDE.'</h6>
            <p className="text-xl mb-8">
              Effortlessly edit code using your voice with advanced audio commands.
              No need to type—just open a file and start speaking your instructions.
              Code faster, smarter, and hands-free with voice-powered development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onGetStarted}
                className="px-6 py-3 bg-blue-600 text-white text-center rounded-md hover:bg-blue-500 transition flex items-center justify-center"
              >
                Get Started <span className="ml-2">→</span>
              </button>
              <a href="#how" className="px-6 py-3 border border-gray-700 text-white text-center rounded-md hover:border-gray-500 transition">
                See how it works
              </a>
            </div>
          </div>
          <div className='w-1/2'>
          <DotLottieReact
            className='w-full h-auto'
            src="https://lottie.host/e5317963-0d06-4856-b34a-2bde5a0a3b5e/Yrl3W6vsrQ.lottie"
            loop
            autoplay
          />
          </div>
        </div>
        <div className="hidden lg:block w-1/2">
          <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
            <img
              src="/api/placeholder/600/400"
              alt="Code editor showing colorful syntax highlighting"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Demo Video Section */}
      <section id="demo" className="container mx-auto px-6 py-20">
  <div className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl">
    <div className="aspect-video bg-slate-900">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/M7i5YU08m9I"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>

      

      {/* Features Section */}
      <div className="py-16 px-8" id="features">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Supercharge Your Development</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Powerful Features to Enhance Your Workflow
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
              alt="David Chen"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Aryan Mittal</h3>
            <p className="text-gray-400 text-sm mb-4">Tech Lead</p>
            <p className="text-gray-300">
              "VoiceCode has completely changed how I work. I can code faster and with less strain on my hands."
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
              alt="Sarah Miller"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Vinit Kumar Arora</h3>
            <p className="text-gray-400 text-sm mb-4">Tech Lead</p>
            <p className="text-gray-300">
              "The accuracy is impressive. It understands complex commands and rarely makes mistakes."
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
              alt="Tom Wilson"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Vidhan Gupta</h3>
            <p className="text-gray-400 text-sm mb-4">Tech Lead</p>
            <p className="text-gray-300">
              "Perfect for pair programming sessions. The whole team can follow along easily."
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Mic className="w-6 h-6 text-blue-400" />
                <span className="font-bold">VoxIDE</span>
              </div>
              <p className="text-gray-400">Transform your coding experience with the power of voice.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Features</a></li>
                <li><a href="#" className="hover:text-blue-400">Meet</a></li>
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
            <p>&copy; 2025 VoxIDE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;