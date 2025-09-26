import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, BarChart3, Shield, Users, ArrowRight, Play, Star, Zap, Globe, Clock, Award, TrendingUp, Target } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: 'landing' | 'student' | 'teacher' | 'admin' | 'features' | 'surveys' | 'analytics' | 'pricing' | 'about' | 'contact' | 'get-started') => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                <h1 className="text-2xl font-bold">Responza</h1>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => onNavigate('landing')} className="text-gray-700 hover:text-purple-600 transition-colors relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => onNavigate('features')} className="text-gray-700 hover:text-purple-600 transition-colors relative group">
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => onNavigate('surveys')} className="text-gray-700 hover:text-purple-600 transition-colors relative group">
                Surveys
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => onNavigate('analytics')} className="text-gray-700 hover:text-purple-600 transition-colors relative group">
                Analytics
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => onNavigate('pricing')} className="text-gray-700 hover:text-purple-600 transition-colors relative group">
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => onNavigate('about')} className="text-gray-700 hover:text-purple-600 transition-colors relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => onNavigate('contact')} className="text-gray-700 hover:text-purple-600 transition-colors relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>
            <Button 
              onClick={() => onNavigate('get-started')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl animate-pulse [animation-delay:2s]"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-10 blur-3xl animate-pulse [animation-delay:4s]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg">
                  <Zap className="w-4 h-4 text-purple-600 mr-2" />
                  <span className="text-sm font-medium text-purple-700">New: AI-Powered Survey Analytics</span>
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Create. Share. <br />
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                    Analyze Surveys.
                  </span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                  Transform how you collect insights with Responza's premium survey platform. 
                  Manage multiple forms, collect responses in real-time, and unlock powerful analytics 
                  that drive decisions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
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
                  className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-pink-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-gray-600">10,000+ users</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">4.9/5 rating</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="w-36 h-36 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 ring-4 ring-purple-100 hover:ring-purple-200">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1601509876296-aba16d4c10a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc1NzUzNzc0MHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Business team collaboration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-44 h-28 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 ring-4 ring-blue-100 hover:ring-blue-200">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwbW9kZXJufGVufDF8fHx8MTc1NzUwMjU4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Digital workspace"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="w-40 h-40 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 ring-4 ring-green-100 hover:ring-green-200">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NTc1MjAyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Data visualization"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-32 h-20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 ring-4 ring-pink-100 hover:ring-pink-200">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1654263736203-a289f57c0d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2ZXklMjBmb3JtcyUyMG1vYmlsZSUyMGRldmljZXxlbnwxfHx8fDE3NTc1NzQ3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Mobile surveys"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating Animation Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-80 animate-bounce shadow-lg"></div>
              <div className="absolute top-1/3 -left-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-80 animate-bounce [animation-delay:1s] shadow-lg"></div>
              <div className="absolute bottom-12 right-12 w-6 h-6 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-80 animate-bounce [animation-delay:2s] shadow-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2M+</div>
              <div className="text-gray-600">Surveys Created</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15M+</div>
              <div className="text-gray-600">Responses Collected</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg mb-6">
              <Target className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Powerful Features</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Everything you need to 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From creation to analysis, Responza provides all the tools you need in one powerful, 
              beautiful platform designed for modern teams.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white/80 backdrop-blur-sm hover:scale-105 group">
              <CardContent className="p-0 text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto group-hover:rotate-6 transition-transform duration-300">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Easy Form Builder</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create stunning surveys with our intuitive drag-and-drop builder. 
                  No coding required, just pure creativity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white/80 backdrop-blur-sm hover:scale-105 group">
              <CardContent className="p-0 text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto group-hover:rotate-6 transition-transform duration-300">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Real-time Analytics</h3>
                <p className="text-gray-600 leading-relaxed">
                  Track responses as they come in with powerful analytics and 
                  beautiful visualizations that tell your story.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white/80 backdrop-blur-sm hover:scale-105 group">
              <CardContent className="p-0 text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto group-hover:rotate-6 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Enterprise Security</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your data is protected with enterprise-grade security, 
                  compliance, and privacy controls you can trust.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white/80 backdrop-blur-sm hover:scale-105 group">
              <CardContent className="p-0 text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto group-hover:rotate-6 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Team Collaboration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Collaborate seamlessly with your team using role-based access 
                  and real-time collaboration features.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full shadow-lg mb-6">
              <Clock className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Simple Process</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in just three simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
              <div className="flex items-center justify-between px-32">
                <div className="w-40 h-1 bg-gradient-to-r from-purple-300 via-blue-300 to-green-300 rounded-full"></div>
                <div className="w-40 h-1 bg-gradient-to-r from-green-300 via-yellow-300 to-red-300 rounded-full"></div>
              </div>
            </div>
            
            <div className="text-center space-y-8 group">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-500">
                <span className="text-4xl font-bold text-white">1</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Create a Survey</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Build your survey using our easy-to-use form builder with multiple question types, 
                  custom branding, and advanced logic.
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-8 group">
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-500">
                <span className="text-4xl font-bold text-white">2</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">Share with Users</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Share your survey via link, email, social media, or embed it directly 
                  on your website with customizable themes.
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-8 group">
              <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-500">
                <span className="text-4xl font-bold text-white">3</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">Analyze Results</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  View real-time results and generate powerful insights with our 
                  advanced analytics tools and beautiful reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Perfect for every 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> industry</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by organizations worldwide across education, healthcare, business, and more
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white/80 backdrop-blur-sm group">
              <CardContent className="p-0 space-y-6">
                <div className="w-64 h-40 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1608986596619-eb50cc56831f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NTc1MjMyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Education"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                  <p className="text-gray-600">
                    Gather student feedback, assess learning outcomes, and improve educational experiences with tailored survey solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white/80 backdrop-blur-sm group">
              <CardContent className="p-0 space-y-6">
                <div className="w-64 h-40 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1629360021730-3d258452c425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzU3NDc5MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Business"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Business</h3>
                  <p className="text-gray-600">
                    Conduct market research, employee satisfaction surveys, and customer feedback collection to drive business growth.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white/80 backdrop-blur-sm group">
              <CardContent className="p-0 space-y-6">
                <div className="w-64 h-40 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1601509876296-aba16d4c10a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc1NzUzNzc0MHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Research"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Research</h3>
                  <p className="text-gray-600">
                    Conduct academic research, collect data for studies, and analyze results with advanced statistical tools.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-50 rounded-full shadow-lg mb-6">
              <Award className="w-4 h-4 text-yellow-600 mr-2" />
              <span className="text-sm font-medium text-yellow-700">Customer Love</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">What our users say</h2>
            <p className="text-xl text-gray-600">Trusted by educators and professionals worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 group">
              <CardContent className="p-0 space-y-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  "Responza has completely transformed how I collect feedback from my students. 
                  The analytics are incredible and the interface is so intuitive!"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-4 ring-purple-100">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1654929831461-5ec8ff4dfbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnRzJTIwc21pbGluZ3xlbnwxfHx8fDE3NTc1NzM3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Student testimonial"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Graduate Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 group">
              <CardContent className="p-0 space-y-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  "The best survey tool I've used in 20 years of teaching. Easy to create, 
                  beautiful results, and outstanding customer support!"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-4 ring-blue-100">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1584554376766-ac0f2c65e949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU3NTcyNjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Teacher testimonial"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Dr. Michael Chen</p>
                    <p className="text-sm text-gray-600">Professor of Computer Science</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-gradient-to-br from-green-50 to-teal-50 group">
              <CardContent className="p-0 space-y-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  "Perfect for managing multiple surveys across our organization. 
                  The enterprise features and security give us complete confidence."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center ring-4 ring-green-100">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Lisa Rodriguez</p>
                    <p className="text-sm text-gray-600">IT Administrator</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-bold text-white mb-8">
            Ready to transform your surveys?
          </h2>
          <p className="text-2xl text-purple-100 mb-12 leading-relaxed">
            Join thousands of users who trust Responza for their survey needs. 
            Start your free trial today and experience the difference.
          </p>
          <div className="space-y-6">
            <Button 
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-12 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
            >
              Start Free Trial - No Credit Card Required
            </Button>
            <div className="flex justify-center space-x-12 text-center pt-8">
              <button
                onClick={() => onNavigate('student')}
                className="text-purple-100 hover:text-white transition-colors underline text-lg font-medium group"
              >
                <span className="group-hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300">
                  View Student Dashboard
                </span>
              </button>
              <button
                onClick={() => onNavigate('teacher')}
                className="text-purple-100 hover:text-white transition-colors underline text-lg font-medium group"
              >
                <span className="group-hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300">
                  View Teacher Dashboard
                </span>
              </button>
              <button
                onClick={() => onNavigate('admin')}
                className="text-purple-100 hover:text-white transition-colors underline text-lg font-medium group"
              >
                <span className="group-hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300">
                  View Admin Dashboard
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                <h3 className="text-3xl font-bold">Responza</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                The ultimate survey and form management platform for modern teams. 
                Transform how you collect insights and make data-driven decisions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-bold">Product</h4>
              <div className="space-y-3 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent text-lg">Features</a>
                <a href="#" className="block hover:text-white transition-colors hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent text-lg">Pricing</a>
                <a href="#" className="block hover:text-white transition-colors hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent text-lg">Templates</a>
                <a href="#" className="block hover:text-white transition-colors hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent text-lg">Integrations</a>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-bold">Company</h4>
              <div className="space-y-3 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent text-lg">About</a>
                <a href="#" className="block hover:text-white transition-colors hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent text-lg">Blog</a>
                <a href="#" className="block hover:text-white transition-colors hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent text-lg">Careers</a>
                <a href="#" className="block hover:text-white transition-colors hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent text-lg">Contact</a>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-bold">Support</h4>
              <div className="space-y-3 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent text-lg">Help Center</a>
                <a href="#" className="block hover:text-white transition-colors hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent text-lg">Documentation</a>
                <a href="#" className="block hover:text-white transition-colors hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent text-lg">Privacy Policy</a>
                <a href="#" className="block hover:text-white transition-colors hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent text-lg">Terms of Service</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-16 pt-8 text-center">
            <p className="text-gray-400 text-lg">&copy; 2024 Responza. All rights reserved. Made with ❤️ for modern teams.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}