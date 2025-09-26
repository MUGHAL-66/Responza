import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowRight, 
  Star,
  Users,
  Download,
  Eye,
  Search,
  Filter,
  Clock,
  BarChart3,
  FileText,
  CheckCircle,
  GraduationCap,
  Building,
  Heart,
  Briefcase,
  Zap,
  Target
} from 'lucide-react';

interface SurveysPageProps {
  onNavigate: (page: 'landing' | 'student' | 'teacher' | 'admin' | 'features' | 'surveys' | 'analytics' | 'pricing' | 'about' | 'contact' | 'get-started') => void;
}

export default function SurveysPage({ onNavigate }: SurveysPageProps) {
  const templateCategories = [
    {
      id: 'education',
      name: 'Education',
      icon: GraduationCap,
      color: 'bg-blue-500',
      count: 25,
      description: 'Course feedback, student assessments, and academic surveys'
    },
    {
      id: 'business',
      name: 'Business',
      icon: Briefcase,
      color: 'bg-green-500',
      count: 32,
      description: 'Employee satisfaction, market research, and customer feedback'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: Heart,
      color: 'bg-red-500',
      count: 18,
      description: 'Patient satisfaction, medical research, and health assessments'
    },
    {
      id: 'nonprofit',
      name: 'Non-Profit',
      icon: Building,
      color: 'bg-purple-500',
      count: 15,
      description: 'Community feedback, volunteer surveys, and impact assessments'
    }
  ];

  const featuredTemplates = [
    {
      id: 1,
      title: "Course Feedback Survey",
      description: "Comprehensive course evaluation template for academic institutions",
      category: "Education",
      rating: 4.9,
      downloads: 2840,
      questions: 15,
      duration: "5 min",
      image: "https://images.unsplash.com/photo-1670852714979-f73d21652a83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2ZXklMjBmb3JtcyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3NTc2NTI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-blue-500 to-indigo-500",
      features: ["Pre-built questions", "Analytics dashboard", "Multi-language"]
    },
    {
      id: 2,
      title: "Employee Satisfaction Survey",
      description: "Measure employee engagement and workplace satisfaction",
      category: "Business",
      rating: 4.8,
      downloads: 3250,
      questions: 20,
      duration: "8 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1NzU0MDM0NXww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-green-500 to-teal-500",
      features: ["Anonymous responses", "Benchmark data", "Action planning"]
    },
    {
      id: 3,
      title: "Customer Experience Survey",
      description: "Gather customer feedback to improve your products and services",
      category: "Business",
      rating: 4.7,
      downloads: 1920,
      questions: 12,
      duration: "4 min",
      image: "https://images.unsplash.com/photo-1647973035166-2abf410c68b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZlYXR1cmVzJTIwbW9kZXJufGVufDF8fHx8MTc1NzU3NjUyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-purple-500 to-pink-500",
      features: ["NPS scoring", "Follow-up logic", "Integration ready"]
    },
    {
      id: 4,
      title: "Event Feedback Survey",
      description: "Collect feedback from attendees to improve future events",
      category: "Events",
      rating: 4.6,
      downloads: 1580,
      questions: 10,
      duration: "3 min",
      image: "https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmljaW5nJTIwc3RyYXRlZ3klMjBidXNpbmVzc3xlbnwxfHx8fDE3NTc1NzY1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-orange-500 to-red-500",
      features: ["Event specific", "Real-time results", "Mobile optimized"]
    }
  ];

  const surveyBuilder = [
    {
      step: 1,
      title: "Choose Template",
      description: "Select from our library of professionally designed templates",
      icon: FileText
    },
    {
      step: 2,
      title: "Customize Questions",
      description: "Modify questions, add logic, and brand your survey",
      icon: Edit
    },
    {
      step: 3,
      title: "Distribute & Collect",
      description: "Share via link, email, or embed on your website",
      icon: Users
    },
    {
      step: 4,
      title: "Analyze Results",
      description: "View real-time analytics and generate insights",
      icon: BarChart3
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
              <button onClick={() => onNavigate('surveys')} className="text-purple-600 font-semibold">Surveys</button>
              <button onClick={() => onNavigate('analytics')} className="text-gray-700 hover:text-purple-600 transition-colors">Analytics</button>
              <button onClick={() => onNavigate('pricing')} className="text-gray-700 hover:text-purple-600 transition-colors">Pricing</button>
              <button onClick={() => onNavigate('about')} className="text-gray-700 hover:text-purple-600 transition-colors">About</button>
              <button onClick={() => onNavigate('contact')} className="text-gray-700 hover:text-purple-600 transition-colors">Contact</button>
            </div>
            <Button 
              onClick={() => onNavigate('get-started')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-6"
            >
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
              <Target className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Survey Templates & Builder</span>
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Create surveys that 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> get results</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Choose from hundreds of professionally designed templates or build your own 
              with our intuitive drag-and-drop survey builder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onNavigate('get-started')}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                Start Building Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Browse Templates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Template Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full shadow-lg mb-6">
              <FileText className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Template Categories</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Templates for every need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our extensive library of survey templates designed for different industries and use cases.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {templateCategories.map((category) => (
              <Card key={category.id} className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white hover:scale-105 group cursor-pointer">
                <CardContent className="p-0 text-center space-y-6">
                  <div className={`w-20 h-20 ${category.color} rounded-3xl flex items-center justify-center mx-auto group-hover:rotate-6 transition-transform duration-300`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{category.description}</p>
                    <div className="flex items-center justify-center space-x-4 text-sm">
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                        {category.count} templates
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg mb-6">
              <Star className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Popular Templates</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Most popular templates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with these proven templates used by thousands of organizations worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredTemplates.map((template) => (
              <Card key={template.id} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white/80 backdrop-blur-sm overflow-hidden group">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${template.gradient} opacity-20`}></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                      {template.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <div className="bg-white/90 rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{template.rating}</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {template.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{template.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{template.downloads.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{template.questions} questions</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{template.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {template.features.map((feature, index) => (
                        <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl">
                      Use Template
                    </Button>
                    <Button variant="outline" className="px-4 rounded-xl">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Survey Builder Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full shadow-lg mb-6">
              <Zap className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Easy Process</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Build surveys in minutes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our intuitive survey builder makes it easy to create professional surveys that get results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {surveyBuilder.map((step, index) => (
              <div key={index} className="text-center space-y-6 group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  {index < surveyBuilder.length - 1 && (
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

      {/* Search and Filter Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Find the perfect template
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Search through our extensive library or filter by category, industry, or use case.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search templates..."
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-lg"
                  />
                </div>
                <Button variant="outline" className="px-6 py-4 rounded-2xl border-2 border-purple-300 text-purple-600 hover:bg-purple-50">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter
                </Button>
                <Button className="px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-white mb-8">
            Ready to create your survey?
          </h2>
          <p className="text-2xl text-purple-100 mb-12">
            Start with a template or build from scratch with our powerful survey builder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('get-started')}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              Start Building
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Browse All Templates
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