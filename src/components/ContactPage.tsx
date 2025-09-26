import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowRight, 
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Users,
  Headphones,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  Calendar,
  HelpCircle,
  FileText,
  Briefcase
} from 'lucide-react';

// Custom SVG Icons for social media
const TwitterIcon = () => (
  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
  </svg>
);

interface ContactPageProps {
  onNavigate: (page: 'landing' | 'student' | 'teacher' | 'admin' | 'features' | 'surveys' | 'analytics' | 'pricing' | 'about' | 'contact' | 'get-started') => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help from our support team",
      contact: "support@responza.com",
      response: "24-hour response time",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "+1 (555) 123-4567",
      response: "Business hours only",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Available on our website",
      response: "Instant response",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 400",
      region: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@responza.com"
    },
    {
      city: "London",
      address: "45 Oxford Street, Floor 3",
      region: "London, UK W1D 2DZ",
      phone: "+44 20 7123 4567",
      email: "london@responza.com"
    },
    {
      city: "Singapore",
      address: "Marina Bay Financial Centre",
      region: "Singapore 018982",
      phone: "+65 6123 4567",
      email: "singapore@responza.com"
    }
  ];

  const supportOptions = [
    {
      icon: HelpCircle,
      title: "Help Center",
      description: "Browse our comprehensive knowledge base",
      action: "Browse Articles",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Technical guides and API documentation",
      action: "View Docs",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Calendar,
      title: "Schedule Demo",
      description: "Book a personalized product demonstration",
      action: "Book Demo",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Briefcase,
      title: "Enterprise Sales",
      description: "Discuss custom solutions for your organization",
      action: "Contact Sales",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const faqs = [
    {
      question: "How quickly will I receive support?",
      answer: "We aim to respond to all support requests within 24 hours. Premium customers receive priority support with faster response times."
    },
    {
      question: "Do you offer phone support?",
      answer: "Yes, phone support is available during business hours for Professional and Enterprise customers. Free users can access email and chat support."
    },
    {
      question: "Can I schedule a demo?",
      answer: "Absolutely! We offer personalized demos for teams and organizations. You can book a demo directly through our website or contact our sales team."
    },
    {
      question: "What if I need technical assistance?",
      answer: "Our technical support team is available to help with any issues. We also have comprehensive documentation and a knowledge base for self-service."
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
              <button onClick={() => onNavigate('contact')} className="text-purple-600 font-semibold">Contact</button>
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg">
                  <Headphones className="w-4 h-4 text-purple-600 mr-2" />
                  <span className="text-sm font-medium text-purple-700">Get In Touch</span>
                </div>
                <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                  We're here to 
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> help you succeed</span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Have questions about Responza? Need help getting started? 
                  Our team is ready to assist you every step of the way.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">24/7 customer support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Expert technical assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Personalized onboarding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Custom solutions available</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 ring-4 ring-purple-100">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1656992841987-dbcb012c87de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwdXMlMjBzdXBwb3J0JTIwdGVhbXxlbnwxfHx8fDE3NTc1NzY1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Customer support team"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Animation Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-80 animate-bounce shadow-lg"></div>
              <div className="absolute top-1/3 -left-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-80 animate-bounce [animation-delay:1s] shadow-lg"></div>
              <div className="absolute bottom-12 right-12 w-6 h-6 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-80 animate-bounce [animation-delay:2s] shadow-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full shadow-lg mb-6">
              <MessageCircle className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Multiple Ways to Connect</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Choose how you'd like to reach us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer multiple channels to ensure you get the help you need, when you need it.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden group">
                <CardHeader className={`text-center py-8 bg-gradient-to-br ${method.gradient} text-white`}>
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{method.title}</CardTitle>
                  <p className="text-white/90">{method.description}</p>
                </CardHeader>
                
                <CardContent className="p-8 text-center space-y-4">
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-gray-900">{method.contact}</p>
                    <p className="text-sm text-gray-600">{method.response}</p>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl"
                  >
                    Get Support
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg">
                  <Send className="w-4 h-4 text-purple-600 mr-2" />
                  <span className="text-sm font-medium text-purple-700">Send us a message</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Let's start a conversation
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Fill out the form and we'll get back to you within 24 hours. 
                  For urgent matters, please use our live chat or phone support.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Response Time</p>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Privacy Protected</p>
                    <p className="text-gray-600">Your information is secure</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Users className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Expert Team</p>
                    <p className="text-gray-600">Handled by specialists</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-xl rounded-3xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input 
                      type="text" 
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                      <option>General Inquiry</option>
                      <option>Technical Support</option>
                      <option>Sales Question</option>
                      <option>Feature Request</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={6}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full shadow-lg mb-6">
              <Zap className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Self-Service Options</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Find answers instantly
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our resources for quick solutions and helpful information.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white hover:scale-105 group text-center">
                <CardContent className="p-8 space-y-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${option.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-6 transition-transform duration-300`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{option.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{option.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-purple-300 text-purple-600 hover:bg-purple-50 rounded-xl"
                  >
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg mb-6">
              <Globe className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Global Presence</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our office locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have teams around the world to provide local support and expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white/80 backdrop-blur-sm group">
                <CardContent className="p-8 space-y-6">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{office.city}</h3>
                  </div>
                  
                  <div className="space-y-3 text-center">
                    <div>
                      <p className="text-gray-600">{office.address}</p>
                      <p className="text-gray-600">{office.region}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        <Phone className="w-4 h-4 text-purple-600" />
                        <span className="text-sm text-gray-700">{office.phone}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Mail className="w-4 h-4 text-purple-600" />
                        <span className="text-sm text-gray-700">{office.email}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full shadow-lg mb-6">
              <HelpCircle className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Support FAQ</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common support and contact questions.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Connect */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Connect with us online
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Follow us on social media for updates, tips, and community discussions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 rounded-2xl group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="text-blue-400 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <TwitterIcon />
                </div>
                <h3 className="text-xl font-bold">Twitter</h3>
                <p className="text-purple-100">Follow for updates and tips</p>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  @Responza
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 rounded-2xl group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="text-blue-500 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <LinkedInIcon />
                </div>
                <h3 className="text-xl font-bold">LinkedIn</h3>
                <p className="text-purple-100">Professional updates and insights</p>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Connect
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 rounded-2xl group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="text-gray-300 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <GitHubIcon />
                </div>
                <h3 className="text-xl font-bold">GitHub</h3>
                <p className="text-purple-100">Developer resources and examples</p>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  View Repos
                </Button>
              </CardContent>
            </Card>
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