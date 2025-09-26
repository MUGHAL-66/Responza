import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, BarChart3, Shield, Users, ArrowRight, Play, Star } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: 'landing' | 'student' | 'teacher' | 'admin') => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                <h1 className="text-2xl font-bold">Responza</h1>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Features</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Surveys</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Analytics</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
            </div>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-6">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-white"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Create. Share. <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Analyze Surveys.
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                With Responza, manage multiple forms, collect responses, and track results in real time. 
                The ultimate platform for educators and professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-8 py-4"
                >
                  Start Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 rounded-full px-8 py-4"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Explore Features
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1663660134340-ef69686ceb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBmaWxsaW5nJTIwZm9ybXMlMjBzdXJ2ZXl8ZW58MXx8fHwxNzU3NTczNzA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="People filling forms"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-40 h-24 rounded-xl overflow-hidden shadow-lg">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU3NDg5ODg3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Analytics dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1634117622592-114e3024ff27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2hhcnRzJTIwZ3JhcGhzfGVufDF8fHx8MTc1NzQ1NTk2MHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Data charts"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need to manage surveys
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From creation to analysis, Responza provides all the tools you need in one powerful platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Easy Form Builder</h3>
                <p className="text-gray-600">
                  Create beautiful surveys with our intuitive drag-and-drop builder. No coding required.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Real-time Analytics</h3>
                <p className="text-gray-600">
                  Track responses as they come in with powerful analytics and beautiful visualizations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Secure Data</h3>
                <p className="text-gray-600">
                  Your data is protected with enterprise-grade security and privacy controls.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Multi-user Access</h3>
                <p className="text-gray-600">
                  Collaborate with your team with role-based access and permissions.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Three simple steps to get started</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Create a Survey</h3>
              <p className="text-gray-600">
                Build your survey using our easy-to-use form builder with multiple question types.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Share with Users</h3>
              <p className="text-gray-600">
                Share your survey via link, email, or embed it directly on your website.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Analyze Results</h3>
              <p className="text-gray-600">
                View real-time results and generate insights with our powerful analytics tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What our users say</h2>
            <p className="text-xl text-gray-600">Trusted by educators and professionals worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-lg rounded-2xl">
              <CardContent className="p-0 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">
                  "Responza has transformed how I collect feedback from my students. The analytics are incredible!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1654929831461-5ec8ff4dfbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnRzJTIwc21pbGluZ3xlbnwxfHx8fDE3NTc1NzM3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Student testimonial"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg rounded-2xl">
              <CardContent className="p-0 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">
                  "The best survey tool I've used. Easy to create, beautiful results, and great support!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1584554376766-ac0f2c65e949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU3NTcyNjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Teacher testimonial"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Dr. Michael Chen</p>
                    <p className="text-sm text-gray-600">Professor</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg rounded-2xl">
              <CardContent className="p-0 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">
                  "Perfect for managing multiple surveys across our organization. Highly recommended!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <Users className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Lisa Rodriguez</p>
                    <p className="text-sm text-gray-600">Administrator</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of users who trust Responza for their survey needs.
          </p>
          <div className="space-y-4">
            <Button 
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 py-4 mr-4"
            >
              Start Free Trial
            </Button>
            <div className="flex justify-center space-x-8 text-center">
              <button
                onClick={() => onNavigate('student')}
                className="text-purple-100 hover:text-white transition-colors underline"
              >
                View Student Dashboard
              </button>
              <button
                onClick={() => onNavigate('teacher')}
                className="text-purple-100 hover:text-white transition-colors underline"
              >
                View Teacher Dashboard
              </button>
              <button
                onClick={() => onNavigate('admin')}
                className="text-purple-100 hover:text-white transition-colors underline"
              >
                View Admin Dashboard
              </button>
            </div>
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
              <p className="text-gray-400">
                The ultimate survey and form management platform for modern teams.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Features</a>
                <a href="#" className="block hover:text-white transition-colors">Pricing</a>
                <a href="#" className="block hover:text-white transition-colors">Templates</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">About</a>
                <a href="#" className="block hover:text-white transition-colors">Blog</a>
                <a href="#" className="block hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Help Center</a>
                <a href="#" className="block hover:text-white transition-colors">Privacy</a>
                <a href="#" className="block hover:text-white transition-colors">Terms</a>
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