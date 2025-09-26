import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  CheckCircle, 
  BarChart3, 
  Shield, 
  Users, 
  ArrowRight, 
  Zap,
  Target,
  Settings,
  Globe,
  Clock,
  Lock,
  Smartphone,
  Download,
  Mail,
  Palette,
  Code,
  TrendingUp,
  Database
} from 'lucide-react';

interface FeaturesPageProps {
  onNavigate: (page: 'landing' | 'student' | 'teacher' | 'admin' | 'features' | 'surveys' | 'analytics' | 'pricing' | 'about' | 'contact') => void;
}

export default function FeaturesPage({ onNavigate }: FeaturesPageProps) {
  const features = [
    {
      icon: CheckCircle,
      title: "Drag-and-Drop Builder",
      description: "Create professional surveys with our intuitive visual builder. No coding required.",
      image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtJTIwYnVpbGRlciUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTc1NzYyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-blue-500 to-purple-500",
      benefits: ["Visual form designer", "Pre-built templates", "Custom branding", "Logic branching"]
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track responses as they come in with powerful analytics and beautiful visualizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwdGltZSUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTc1MDY1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-green-500 to-teal-500",
      benefits: ["Live response tracking", "Interactive charts", "Export capabilities", "Trend analysis"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Your data is protected with enterprise-grade security, compliance, and privacy controls.",
      image: "https://images.unsplash.com/photo-1597781914467-a5b93258e748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBkYXRhJTIwZW5jcnlwdGlvbnxlbnwxfHx8fDE3NTc1NzYyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-red-500 to-pink-500",
      benefits: ["End-to-end encryption", "GDPR compliance", "Role-based access", "Audit trails"]
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Collaborate seamlessly with your team using role-based access and real-time features.",
      image: "https://images.unsplash.com/photo-1557425631-f132f06f4aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTc0OTUwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-yellow-500 to-orange-500",
      benefits: ["Multi-user access", "Permission controls", "Comment system", "Version history"]
    }
  ];

  const additionalFeatures = [
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Surveys look perfect on any device with responsive design"
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Create surveys in 50+ languages with automatic translation"
    },
    {
      icon: Mail,
      title: "Email Integration",
      description: "Send surveys via email with custom invitations and reminders"
    },
    {
      icon: Download,
      title: "Data Export",
      description: "Export results to Excel, PDF, or integrate with your tools"
    },
    {
      icon: Palette,
      title: "Custom Branding",
      description: "Add your logo, colors, and branding to match your identity"
    },
    {
      icon: Code,
      title: "API Access",
      description: "Integrate with your existing systems using our REST API"
    },
    {
      icon: Clock,
      title: "Schedule Surveys",
      description: "Automatically send surveys at the perfect time"
    },
    {
      icon: Lock,
      title: "Password Protection",
      description: "Secure your surveys with passwords and access controls"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => onNavigate('landing')}
              className="flex items-center space-x-2"
            >
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                <h1 className="text-2xl font-bold">Responza</h1>
              </div>
            </button>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => onNavigate('landing')} className="text-gray-700 hover:text-purple-600 transition-colors">Home</button>
              <button onClick={() => onNavigate('features')} className="text-purple-600 font-semibold">Features</button>
              <button onClick={() => onNavigate('surveys')} className="text-gray-700 hover:text-purple-600 transition-colors">Surveys</button>
              <button onClick={() => onNavigate('analytics')} className="text-gray-700 hover:text-purple-600 transition-colors">Analytics</button>
              <button onClick={() => onNavigate('pricing')} className="text-gray-700 hover:text-purple-600 transition-colors">Pricing</button>
              <button onClick={() => onNavigate('about')} className="text-gray-700 hover:text-purple-600 transition-colors">About</button>
              <button onClick={() => onNavigate('contact')} className="text-gray-700 hover:text-purple-600 transition-colors">Contact</button>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-6">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-24">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl animate-pulse [animation-delay:2s]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg mb-6">
              <Zap className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Powerful Survey Features</span>
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Everything you need to create 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> amazing surveys</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              From drag-and-drop building to advanced analytics, Responza provides all the tools 
              you need to collect insights that drive real results.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              Explore All Features
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {features.map((feature, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">{feature.title}</h2>
                    <p className="text-xl text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                  
                  <div className="space-y-4">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className={`border-2 rounded-xl px-6 py-3 group hover:bg-gradient-to-r ${feature.gradient} hover:text-white hover:border-transparent transition-all duration-300`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative">
                    <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                      <ImageWithFallback
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-20 blur-xl`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg mb-6">
              <Target className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">More Features</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              And so much more...
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover additional features that make Responza the most comprehensive survey platform available.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="p-6 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white/80 backdrop-blur-sm hover:scale-105 group">
                <CardContent className="p-0 text-center space-y-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-6 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h2 className="text-5xl font-bold mb-6">Trusted by thousands worldwide</h2>
            <p className="text-2xl text-purple-100">See why teams choose Responza for their survey needs</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-purple-100">Uptime</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">50M+</div>
              <div className="text-purple-100">Responses Collected</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">15K+</div>
              <div className="text-purple-100">Happy Customers</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-purple-100">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Ready to get started?
          </h2>
          <p className="text-2xl text-gray-600 mb-12">
            Join thousands of teams already using Responza to collect better insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onNavigate('contact')}
              className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                <h3 className="text-2xl font-bold">Responza</h3>
              </div>
              <p className="text-gray-400">The ultimate survey platform for modern teams.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold">Product</h4>
              <div className="space-y-2 text-gray-400">
                <button onClick={() => onNavigate('features')} className="block hover:text-white transition-colors">Features</button>
                <button onClick={() => onNavigate('pricing')} className="block hover:text-white transition-colors">Pricing</button>
                <button onClick={() => onNavigate('surveys')} className="block hover:text-white transition-colors">Templates</button>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold">Company</h4>
              <div className="space-y-2 text-gray-400">
                <button onClick={() => onNavigate('about')} className="block hover:text-white transition-colors">About</button>
                <button onClick={() => onNavigate('contact')} className="block hover:text-white transition-colors">Contact</button>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold">Support</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Help Center</a>
                <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Responza. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}