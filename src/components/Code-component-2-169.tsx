import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowRight, 
  Users,
  Target,
  Award,
  Globe,
  Heart,
  Zap,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock,
  Star,
  Building,
  Lightbulb,
  Handshake,
  Eye,
  Compass
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: 'landing' | 'student' | 'teacher' | 'admin' | 'features' | 'surveys' | 'analytics' | 'pricing' | 'about' | 'contact' | 'get-started') => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Heart,
      title: "Customer-Centric",
      description: "We put our customers at the heart of everything we do, listening to feedback and continuously improving."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We're constantly pushing boundaries to create the most intuitive and powerful survey platform."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We maintain the highest standards of data security and privacy protection for our users."
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "We believe great things happen when teams work together with the right tools and insights."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b48c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc1NzU3NjcxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Former VP of Product at TechCorp with 15+ years in data analytics and user experience design."
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTc1NzY3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Software architect and AI specialist who previously led engineering teams at major tech companies."
    },
    {
      name: "Emily Johnson",
      role: "VP of Product",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NTc1NzY3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Product strategist with deep expertise in SaaS platforms and user research methodologies."
    },
    {
      name: "David Kim",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwcm9mZXNzaW9uYWwlMjBtYW4lMjBkZXNpZ25lcnxlbnwxfHx8fDE3NTc1NzY3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Award-winning UX designer passionate about creating beautiful, accessible, and intuitive interfaces."
    },
    {
      name: "Lisa Wong",
      role: "VP of Sales",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhhc2lhbiUyMHdvbWFuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU3NTc2NzkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Results-driven sales leader with expertise in scaling B2B SaaS companies and building lasting relationships."
    },
    {
      name: "Alex Thompson",
      role: "Head of Customer Success",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzbWlsaW5nfGVufDF8fHx8MTc1NzU3Njc5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Customer advocate focused on ensuring every user achieves success with our platform and tools."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to make survey creation and analysis accessible to everyone."
    },
    {
      year: "2021",
      title: "First 1,000 Users",
      description: "Reached our first major milestone with customers across 20 countries."
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Raised $15M to accelerate product development and team growth."
    },
    {
      year: "2023",
      title: "50,000+ Users",
      description: "Expanded globally with offices in San Francisco, London, and Singapore."
    },
    {
      year: "2024",
      title: "AI-Powered Analytics",
      description: "Launched advanced AI features and predictive analytics capabilities."
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users", icon: Users },
    { number: "100+", label: "Countries", icon: Globe },
    { number: "10M+", label: "Responses Collected", icon: TrendingUp },
    { number: "99.9%", label: "Uptime", icon: Shield }
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
              <button onClick={() => onNavigate('about')} className="text-purple-600 font-semibold">About</button>
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg">
                  <Building className="w-4 h-4 text-purple-600 mr-2" />
                  <span className="text-sm font-medium text-purple-700">About Responza</span>
                </div>
                <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                  Empowering teams with 
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> data-driven insights</span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Founded in 2020, Responza has grown from a simple idea to a comprehensive 
                  survey platform trusted by over 50,000 users worldwide. We're on a mission 
                  to make data collection and analysis accessible to everyone.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => onNavigate('contact')}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                >
                  Join Our Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Eye className="mr-2 w-5 h-5" />
                  Our Story
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 ring-4 ring-purple-100">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1734519654307-ceb306e4073a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYm91dCUyMHVzJTIwY29tcGFueSUyMHRlYW18ZW58MXx8fHwxNzU3NTc2NTM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Company team"
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

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full shadow-lg mb-6">
              <Target className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Our Purpose</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're driven by a clear mission and ambitious vision for the future of data collection.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 group">
              <CardContent className="p-12 text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto group-hover:rotate-6 transition-transform duration-300">
                  <Compass className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To democratize data collection and analysis by providing intuitive, 
                  powerful tools that enable every organization to make informed decisions 
                  based on real insights from their audience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 group">
              <CardContent className="p-12 text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto group-hover:rotate-6 transition-transform duration-300">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A world where every decision is backed by meaningful data, where 
                  organizations of all sizes can easily understand their audiences 
                  and create better experiences for everyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg mb-6">
              <Heart className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Core Values</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What drives us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values guide everything we do, from product development to customer relationships.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white/80 backdrop-blur-sm hover:scale-105 group">
                <CardContent className="p-0 text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-6 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full shadow-lg mb-6">
              <Clock className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Our Journey</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Company timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startup to scale-up, here are the key milestones in our journey.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl bg-white group">
                      <CardContent className="p-8 space-y-4">
                        <div className="text-2xl font-bold text-purple-600">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg mb-6">
              <Users className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Leadership Team</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Meet our team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to building the future of survey technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white/80 backdrop-blur-sm hover:scale-105 group">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-purple-600 font-medium">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed text-sm">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Careers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full shadow-lg">
                  <Award className="w-4 h-4 text-purple-600 mr-2" />
                  <span className="text-sm font-medium text-purple-700">Join Our Team</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Work with purpose
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join a team that's passionate about making data accessible to everyone. 
                  We offer competitive benefits, flexible work arrangements, and the 
                  opportunity to make a real impact.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Remote-first culture with flexible hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Comprehensive health and wellness benefits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Professional development opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Equity participation for all employees</span>
                </div>
              </div>
              
              <Button 
                onClick={() => onNavigate('contact')}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 ring-4 ring-purple-100">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZyUyMHRvZ2V0aGVyJTIwb2ZmaWNlfGVufDF8fHx8MTc1NzU3NjgwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Team working together"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-white mb-8">
            Ready to start your journey with us?
          </h2>
          <p className="text-2xl text-purple-100 mb-12">
            Whether you're looking to use our platform or join our team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('get-started')}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              Try Responza
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => onNavigate('contact')}
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
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