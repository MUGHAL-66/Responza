import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowRight, 
  Check,
  X,
  Star,
  Users,
  Crown,
  Zap,
  Shield,
  Target,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Clock,
  Globe,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: 'landing' | 'student' | 'teacher' | 'admin' | 'features' | 'surveys' | 'analytics' | 'pricing' | 'about' | 'contact' | 'get-started') => void;
}

export default function PricingPage({ onNavigate }: PricingPageProps) {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "Free",
      period: "Forever",
      description: "Perfect for individuals and small projects",
      gradient: "from-gray-500 to-gray-600",
      borderColor: "border-gray-200",
      popular: false,
      features: [
        { name: "Up to 3 surveys", included: true },
        { name: "100 responses per month", included: true },
        { name: "Basic analytics", included: true },
        { name: "Email support", included: true },
        { name: "Survey templates", included: true },
        { name: "Advanced analytics", included: false },
        { name: "Custom branding", included: false },
        { name: "API access", included: false },
        { name: "Priority support", included: false }
      ]
    },
    {
      name: "Professional",
      icon: Users,
      price: "$29",
      period: "per month",
      description: "Great for teams and growing businesses",
      gradient: "from-blue-500 to-indigo-500",
      borderColor: "border-blue-200",
      popular: true,
      features: [
        { name: "Unlimited surveys", included: true },
        { name: "5,000 responses per month", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Custom branding", included: true },
        { name: "Email & chat support", included: true },
        { name: "API access", included: true },
        { name: "Team collaboration", included: true },
        { name: "Data export", included: true },
        { name: "White-label option", included: false }
      ]
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "$99",
      period: "per month",
      description: "Designed for large organizations",
      gradient: "from-purple-500 to-pink-500",
      borderColor: "border-purple-200",
      popular: false,
      features: [
        { name: "Unlimited everything", included: true },
        { name: "Unlimited responses", included: true },
        { name: "Advanced analytics & AI", included: true },
        { name: "White-label solution", included: true },
        { name: "24/7 priority support", included: true },
        { name: "Custom integrations", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "SLA guarantee", included: true },
        { name: "On-premise deployment", included: true }
      ]
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "What happens if I exceed my response limit?",
      answer: "We'll notify you when you're approaching your limit. You can upgrade your plan or purchase additional responses as needed."
    },
    {
      question: "Is there a long-term contract required?",
      answer: "No, all our plans are month-to-month with no long-term commitments. You can cancel anytime."
    },
    {
      question: "Do you offer discounts for non-profits or education?",
      answer: "Yes, we offer special pricing for qualified non-profit organizations and educational institutions. Contact us for details."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer email support for all plans, chat support for Professional plans, and 24/7 phone support for Enterprise customers."
    },
    {
      question: "Can I try before I buy?",
      answer: "Absolutely! Our free plan lets you explore all core features, and you can upgrade anytime without losing your data."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Research Director",
      company: "TechCorp Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b48c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc1NzU3NjcxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "Responza has transformed how we collect and analyze customer feedback. The ROI is incredible."
    },
    {
      name: "Michael Chen",
      title: "Product Manager",
      company: "StartupCo",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTc1NzY3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "The Professional plan gives us everything we need at a price that fits our startup budget."
    },
    {
      name: "Lisa Rodriguez",
      title: "VP of Operations",
      company: "Enterprise Ltd.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NTc1NzY3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "Enterprise support is exceptional. Our dedicated account manager understands our needs perfectly."
    }
  ];

  const addOns = [
    {
      name: "Additional Responses",
      description: "Extra responses when you need them",
      price: "$0.10",
      unit: "per response"
    },
    {
      name: "Premium Templates",
      description: "Access to exclusive survey templates",
      price: "$49",
      unit: "per month"
    },
    {
      name: "Advanced Integrations",
      description: "Connect with specialized tools",
      price: "$99",
      unit: "per month"
    },
    {
      name: "Custom Training",
      description: "Personalized team training sessions",
      price: "$299",
      unit: "per session"
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
              <button onClick={() => onNavigate('pricing')} className="text-purple-600 font-semibold">Pricing</button>
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
              <span className="text-sm font-medium text-purple-700">Simple, Transparent Pricing</span>
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Choose the plan that's 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> right for you</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Start free and scale as you grow. No hidden fees, no surprises. 
              Cancel anytime with our flexible monthly plans.
            </p>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className="text-gray-600">Monthly</span>
              <div className="relative">
                <input type="checkbox" className="sr-only" />
                <div className="w-12 h-6 bg-gray-300 rounded-full shadow-inner"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform"></div>
              </div>
              <span className="text-gray-600">
                Annual 
                <Badge className="ml-2 bg-green-100 text-green-700 hover:bg-green-100">Save 20%</Badge>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative border-2 ${plan.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden ${plan.popular ? 'scale-105 ring-4 ring-blue-100' : ''} group`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full shadow-lg">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className={`text-center py-8 bg-gradient-to-br ${plan.gradient} text-white`}>
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold">
                      {plan.price}
                      {plan.price !== "Free" && <span className="text-lg font-normal opacity-90">/{plan.period.split(' ')[1]}</span>}
                    </div>
                    <p className="text-white/90">{plan.description}</p>
                  </div>
                </CardHeader>
                
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        {feature.included ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300" />
                        )}
                        <span className={`${feature.included ? 'text-gray-900' : 'text-gray-400'}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => onNavigate('get-started')}
                    className={`w-full py-3 rounded-xl transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105' 
                        : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.price === "Free" ? "Start Free" : "Start Free Trial"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  
                  {plan.price !== "Free" && (
                    <p className="text-center text-sm text-gray-500">
                      14-day free trial • No credit card required
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg mb-6">
              <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Add-ons & Extras</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Enhance your plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional features and services to extend your survey capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-white/80 backdrop-blur-sm group">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="font-bold text-gray-900">{addon.name}</h3>
                  <p className="text-sm text-gray-600">{addon.description}</p>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-purple-600">{addon.price}</div>
                    <div className="text-sm text-gray-500">{addon.unit}</div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Add to Plan
                  </Button>
                </CardContent>
              </Card>
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
              <span className="text-sm font-medium text-purple-700">Customer Stories</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Loved by teams worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers say about their experience with Responza.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
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
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                      <p className="text-sm text-purple-600">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg mb-6">
              <AlertCircle className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Frequently Asked</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Common questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and plans.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <Button 
              onClick={() => onNavigate('contact')}
              variant="outline" 
              className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 rounded-full px-8 py-3"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full shadow-lg">
                  <Crown className="w-4 h-4 text-purple-600 mr-2" />
                  <span className="text-sm font-medium text-purple-700">Enterprise Solutions</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Need something custom?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our Enterprise plan can be customized to meet your specific needs. 
                  Get dedicated support, custom integrations, and volume discounts.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-700">SOC 2 Compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-700">Global Data Centers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-700">24/7 Phone Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-700">Dedicated Success Manager</span>
                </div>
              </div>
              
              <Button 
                onClick={() => onNavigate('contact')}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 ring-4 ring-purple-100">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmljaW5nJTIwc3RyYXRlZ3klMjBidXNpbmVzc3xlbnwxfHx8fDE3NTc1NzY1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Enterprise Solutions"
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
            Start your free trial today
          </h2>
          <p className="text-2xl text-purple-100 mb-12">
            No credit card required. Full access to all features for 14 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('get-started')}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => onNavigate('contact')}
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Talk to Sales
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