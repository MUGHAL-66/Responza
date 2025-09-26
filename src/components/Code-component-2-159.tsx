import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowRight, 
  BarChart3,
  TrendingUp,
  PieChart,
  LineChart,
  Target,
  Eye,
  Download,
  Share,
  Filter,
  Calendar,
  Users,
  Clock,
  Zap,
  CheckCircle,
  AlertCircle,
  Activity,
  Database,
  Globe
} from 'lucide-react';

interface AnalyticsPageProps {
  onNavigate: (page: 'landing' | 'student' | 'teacher' | 'admin' | 'features' | 'surveys' | 'analytics' | 'pricing' | 'about' | 'contact' | 'get-started') => void;
}

export default function AnalyticsPage({ onNavigate }: AnalyticsPageProps) {
  const analyticsFeatures = [
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Monitor responses as they come in with live updating dashboards and instant notifications.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1NzU0MDM0NXww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-blue-500 to-indigo-500",
      benefits: ["Live response tracking", "Custom dashboards", "Alert notifications", "Mobile responsive"]
    },
    {
      icon: TrendingUp,
      title: "Advanced Reporting",
      description: "Generate comprehensive reports with advanced statistical analysis and trend identification.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyMHJlcG9ydGluZyUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTc1NzY2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-green-500 to-teal-500",
      benefits: ["Statistical analysis", "Trend detection", "Comparative reports", "Export options"]
    },
    {
      icon: Target,
      title: "Predictive Analytics",
      description: "Use AI-powered insights to predict trends and make data-driven decisions for the future.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVkaWN0aXZlJTIwYW5hbHl0aWNzJTIwQUl8ZW58MXx8fHwxNzU3NTc2NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-purple-500 to-pink-500",
      benefits: ["AI-powered insights", "Predictive modeling", "Forecast trends", "Smart recommendations"]
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Connect with your existing tools and systems for seamless data flow and analysis.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkYXRhJTIwaW50ZWdyYXRpb24lMjBzeXN0ZW1zfGVufDF8fHx8MTc1NzU3NjYxMHww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-orange-500 to-red-500",
      benefits: ["API integrations", "Data connectors", "Automated sync", "Custom webhooks"]
    }
  ];

  const chartTypes = [
    {
      icon: BarChart3,
      name: "Bar Charts",
      description: "Perfect for comparing categories and showing rankings"
    },
    {
      icon: PieChart,
      name: "Pie Charts",
      description: "Ideal for showing proportions and percentages"
    },
    {
      icon: LineChart,
      name: "Line Charts",
      description: "Great for displaying trends over time"
    },
    {
      icon: TrendingUp,
      name: "Trend Analysis",
      description: "Advanced trend detection and forecasting"
    },
    {
      icon: Target,
      name: "Heat Maps",
      description: "Visualize data density and patterns"
    },
    {
      icon: Activity,
      name: "Real-time Metrics",
      description: "Live updating performance indicators"
    }
  ];

  const metrics = [
    {
      value: "99.9%",
      label: "Data Accuracy",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      value: "<2s",
      label: "Report Generation",
      icon: Clock,
      color: "text-blue-600"
    },
    {
      value: "50+",
      label: "Visualization Types",
      icon: BarChart3,
      color: "text-purple-600"
    },
    {
      value: "24/7",
      label: "Real-time Updates",
      icon: Activity,
      color: "text-orange-600"
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
              <button onClick={() => onNavigate('analytics')} className="text-purple-600 font-semibold">Analytics</button>
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
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 blur-3xl animate-pulse [animation-delay:2s]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg">
                  <Zap className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-blue-700">Powerful Analytics</span>
                </div>
                <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                  Turn survey data into 
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> actionable insights</span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Advanced analytics and reporting tools that help you understand your data, 
                  identify trends, and make informed decisions with confidence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => onNavigate('get-started')}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                >
                  Explore Analytics
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Eye className="mr-2 w-5 h-5" />
                  View Demo
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 ring-4 ring-blue-100">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1NzU0MDM0NXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Analytics Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Animation Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-80 animate-bounce shadow-lg"></div>
              <div className="absolute top-1/3 -left-4 w-8 h-8 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-80 animate-bounce [animation-delay:1s] shadow-lg"></div>
              <div className="absolute bottom-12 right-12 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-80 animate-bounce [animation-delay:2s] shadow-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 ${metric.color === 'text-green-600' ? 'bg-gradient-to-br from-green-500 to-teal-500' :
                  metric.color === 'text-blue-600' ? 'bg-gradient-to-br from-blue-500 to-indigo-500' :
                  metric.color === 'text-purple-600' ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                  'bg-gradient-to-br from-orange-500 to-red-500'
                } rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full shadow-lg mb-6">
              <BarChart3 className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">Analytics Features</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Comprehensive analytics suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to analyze survey data, from basic reports to advanced predictive analytics.
            </p>
          </div>
          
          <div className="space-y-24">
            {analyticsFeatures.map((feature, index) => (
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

      {/* Chart Types */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg mb-6">
              <PieChart className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Visualization Options</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Visualize data your way
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from dozens of chart types and visualization options to present your data effectively.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chartTypes.map((chart, index) => (
              <Card key={index} className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white/80 backdrop-blur-sm hover:scale-105 group">
                <CardContent className="p-0 text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto group-hover:rotate-6 transition-transform duration-300">
                    <chart.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{chart.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{chart.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full shadow-lg mb-6">
              <Activity className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-sm font-medium text-green-700">Live Demo</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              See analytics in action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Experience the power of real-time analytics with our interactive demo dashboard.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sample Analytics Cards */}
            <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  Response Rate
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">87%</div>
                  <div className="text-gray-600 mb-4">Current Survey</div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  Satisfaction Score
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">4.8</div>
                  <div className="text-gray-600 mb-4">Average Rating</div>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-6 h-6 rounded-full ${i < 5 ? 'bg-yellow-400' : 'bg-gray-200'}`}></div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <CardTitle className="flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  Completion Time
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">3:42</div>
                  <div className="text-gray-600 mb-4">Average Time</div>
                  <div className="text-sm text-green-600 font-medium">
                    ↓ 23% faster than target
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white rounded-full px-8 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              Try Interactive Demo
              <Eye className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Export and Share */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Share insights effortlessly
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Export reports, share dashboards, and collaborate with your team using powerful sharing tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white group text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Export Reports</h3>
              <p className="text-gray-600 mb-6">Download reports in PDF, Excel, or PowerPoint format for presentations.</p>
              <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                Export Options
              </Button>
            </Card>

            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white group text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Share className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Share Dashboards</h3>
              <p className="text-gray-600 mb-6">Create shareable links for real-time dashboard access with permission controls.</p>
              <Button variant="outline" className="border-green-300 text-green-600 hover:bg-green-50">
                Share Options
              </Button>
            </Card>

            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white group text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Public Reports</h3>
              <p className="text-gray-600 mb-6">Create public-facing reports and embed them in websites or portals.</p>
              <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                Embed Options
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-white mb-8">
            Ready to unlock your data's potential?
          </h2>
          <p className="text-2xl text-blue-100 mb-12">
            Start analyzing survey data with powerful, intuitive analytics tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('get-started')}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              Start Analyzing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule Demo
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