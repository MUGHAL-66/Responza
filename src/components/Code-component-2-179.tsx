import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowRight, 
  CheckCircle,
  User,
  Users,
  Building,
  Mail,
  Eye,
  EyeOff,
  Google,
  Github,
  Linkedin,
  Zap,
  Shield,
  Clock,
  Star,
  Crown,
  Sparkles,
  Target,
  Lock,
  Globe
} from 'lucide-react';

interface GetStartedPageProps {
  onNavigate: (page: 'landing' | 'student' | 'teacher' | 'admin' | 'features' | 'surveys' | 'analytics' | 'pricing' | 'about' | 'contact' | 'get-started') => void;
}

export default function GetStartedPage({ onNavigate }: GetStartedPageProps) {
  const [accountType, setAccountType] = useState<'individual' | 'team' | 'enterprise'>('individual');
  const [showPassword, setShowPassword] = useState(false);

  const accountTypes = [
    {
      id: 'individual' as const,
      icon: User,
      title: 'Individual',
      description: 'Perfect for personal projects and small surveys',
      features: ['Up to 3 surveys', '100 responses/month', 'Basic analytics'],
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'team' as const,
      icon: Users,
      title: 'Team',
      description: 'Great for teams and growing businesses',
      features: ['Unlimited surveys', '5,000 responses/month', 'Team collaboration'],
      gradient: 'from-green-500 to-teal-500',
      popular: true
    },
    {
      id: 'enterprise' as const,
      icon: Building,
      title: 'Enterprise',
      description: 'For large organizations with custom needs',
      features: ['Unlimited everything', 'Custom integrations', 'Dedicated support'],
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in under 2 minutes'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Enterprise-grade security from day one'
    },
    {
      icon: Clock,
      title: '14-Day Free Trial',
      description: 'Full access to all premium features'
    },
    {
      icon: Star,
      title: 'No Credit Card',
      description: 'Start free, upgrade when ready'
    }
  ];

  const steps = [
    {
      step: 1,
      title: 'Create Account',
      description: 'Sign up with email or social login'
    },
    {
      step: 2,
      title: 'Choose Plan',
      description: 'Select the plan that fits your needs'
    },
    {
      step: 3,
      title: 'Create Survey',
      description: 'Use templates or start from scratch'
    },
    {
      step: 4,
      title: 'Collect Responses',
      description: 'Share and start gathering insights'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechCorp',
      quote: 'Setup was incredibly easy. We were collecting responses within minutes!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b48c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc1NzU3NjcxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Research Director',
      company: 'DataLab',
      quote: 'The most intuitive survey platform I\'ve ever used. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTc1NzY3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
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
              <button onClick={() => onNavigate('features')} className="text-gray-700 hover:text-purple-600 transition-colors">Features</button>
              <button onClick={() => onNavigate('surveys')} className="text-gray-700 hover:text-purple-600 transition-colors">Surveys</button>
              <button onClick={() => onNavigate('analytics')} className="text-gray-700 hover:text-purple-600 transition-colors">Analytics</button>
              <button onClick={() => onNavigate('pricing')} className="text-gray-700 hover:text-purple-600 transition-colors">Pricing</button>
              <button onClick={() => onNavigate('about')} className="text-gray-700 hover:text-purple-600 transition-colors">About</button>
              <button onClick={() => onNavigate('contact')} className="text-gray-700 hover:text-purple-600 transition-colors">Contact</button>
            </div>
            <div className="text-sm text-gray-600">
              Already have an account? 
              <button className="text-purple-600 hover:text-purple-700 font-medium ml-1">Sign In</button>
            </div>
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
              <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Start Your Journey</span>
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Start creating surveys in 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> under 2 minutes</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Join thousands of teams already using Responza to collect insights and make data-driven decisions. 
              No credit card required for your free trial.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Account Type Selection */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full shadow-lg">
                  <Target className="w-4 h-4 text-purple-600 mr-2" />
                  <span className="text-sm font-medium text-purple-700">Choose Your Plan</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Select what fits your needs
                </h2>
                <p className="text-xl text-gray-600">
                  Choose the account type that matches your requirements. You can always upgrade later.
                </p>
              </div>
              
              <div className="space-y-4">
                {accountTypes.map((type) => (
                  <Card 
                    key={type.id}
                    className={`border-2 cursor-pointer transition-all duration-300 rounded-2xl ${
                      accountType === type.id 
                        ? 'border-purple-300 bg-purple-50 shadow-lg' 
                        : 'border-gray-200 hover:border-purple-200 hover:shadow-md'
                    } ${type.popular ? 'ring-2 ring-purple-100' : ''}`}
                    onClick={() => setAccountType(type.id)}
                  >
                    {type.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1">
                          <Crown className="w-3 h-3 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${type.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <type.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                          <p className="text-gray-600 mb-4">{type.description}</p>
                          <div className="space-y-2">
                            {type.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Column - Signup Form */}
            <div className="lg:sticky lg:top-8">
              <Card className="border-0 shadow-2xl rounded-3xl bg-white">
                <CardHeader className="text-center py-8 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-t-3xl">
                  <CardTitle className="text-2xl font-bold">Create Your Account</CardTitle>
                  <p className="text-purple-100">Start your free trial today</p>
                </CardHeader>
                
                <CardContent className="p-8 space-y-6">
                  {/* Social Login */}
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full py-3 border-2 border-gray-300 hover:border-gray-400 rounded-xl"
                    >
                      <Google className="w-5 h-5 mr-3" />
                      Continue with Google
                    </Button>
                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        variant="outline" 
                        className="py-3 border-2 border-gray-300 hover:border-gray-400 rounded-xl"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        GitHub
                      </Button>
                      <Button 
                        variant="outline" 
                        className="py-3 border-2 border-gray-300 hover:border-gray-400 rounded-xl"
                      >
                        <Linkedin className="w-5 h-5 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">Or continue with email</span>
                    </div>
                  </div>
                  
                  {/* Email Form */}
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input 
                          type="text" 
                          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input 
                          type="text" 
                          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input 
                          type="email" 
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input 
                          type={showPassword ? 'text' : 'password'}
                          className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                          placeholder="Create a strong password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1" />
                      <label className="text-sm text-gray-600 leading-relaxed">
                        I agree to the <a href="#" className="text-purple-600 hover:text-purple-700 underline">Terms of Service</a> and{' '}
                        <a href="#" className="text-purple-600 hover:text-purple-700 underline">Privacy Policy</a>
                      </label>
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Start Free Trial
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                  
                  <div className="text-center space-y-2">
                    <p className="text-sm text-gray-600">
                      No credit card required • 14-day free trial
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Shield className="w-4 h-4" />
                        <span>SSL Secured</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Globe className="w-4 h-4" />
                        <span>GDPR Compliant</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg mb-6">
              <Zap className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Simple Process</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Get started in 4 easy steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined onboarding process gets you up and running quickly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-6 group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 -translate-y-1/2"></div>
                  )}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full shadow-lg mb-6">
              <Star className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Success Stories</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Join thousands of happy users
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what others are saying about their experience getting started with Responza.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 group">
                <CardContent className="p-8 space-y-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden ring-4 ring-purple-100">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-purple-600">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-white mb-8">
            Ready to transform your data collection?
          </h2>
          <p className="text-2xl text-purple-100 mb-12">
            Join over 50,000 users who trust Responza for their survey needs.
          </p>
          <div className="space-y-6">
            <Button 
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-12 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-xl"
            >
              Start Your Free Trial Now
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <p className="text-purple-100">No credit card required • 14-day free trial • Cancel anytime</p>
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