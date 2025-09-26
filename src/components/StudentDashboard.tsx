import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  User, 
  BookOpen,
  Home,
  TrendingUp,
  Settings,
  Calendar,
  Award,
  Target,
  Bell,
  Search,
  Filter
} from 'lucide-react';

interface StudentDashboardProps {
  onNavigate: (page: 'landing' | 'student' | 'teacher' | 'admin') => void;
}

type TabType = 'overview' | 'surveys' | 'available' | 'progress' | 'profile';

export default function StudentDashboard({ onNavigate }: StudentDashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const surveys = [
    { id: 1, title: "Course Feedback Survey", status: "completed", progress: 100, dueDate: "2024-01-15", category: "Academic", points: 50 },
    { id: 2, title: "Learning Experience Assessment", status: "pending", progress: 60, dueDate: "2024-01-20", category: "Academic", points: 75 },
    { id: 3, title: "Campus Facilities Survey", status: "available", progress: 0, dueDate: "2024-01-25", category: "Campus Life", points: 25 },
    { id: 4, title: "Digital Learning Tools Review", status: "available", progress: 0, dueDate: "2024-01-30", category: "Technology", points: 60 },
    { id: 5, title: "Student Satisfaction Survey", status: "available", progress: 0, dueDate: "2024-02-05", category: "General", points: 40 },
  ];

  const recentActivity = [
    { action: "Completed Course Feedback Survey", time: "2 hours ago", points: 50 },
    { action: "Started Learning Experience Assessment", time: "1 day ago", points: 0 },
    { action: "Received new survey: Campus Facilities", time: "3 days ago", points: 0 },
    { action: "Earned Achievement: Survey Master", time: "1 week ago", points: 100 },
  ];

  const achievements = [
    { name: "Survey Master", description: "Complete 5 surveys", earned: true, icon: Award },
    { name: "Feedback Champion", description: "Complete 10 surveys", earned: false, icon: Target },
    { name: "Early Bird", description: "Complete surveys within 24 hours", earned: true, icon: Clock },
    { name: "Quality Contributor", description: "Provide detailed feedback", earned: false, icon: CheckCircle2 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
              <div className="relative">
                <h1 className="text-3xl font-bold mb-2">Welcome back, Sarah! 👋</h1>
                <p className="text-emerald-100 text-lg">You have 3 surveys waiting and 180 points to earn</p>
                <div className="mt-6 flex items-center space-x-4">
                  <Button className="bg-white text-emerald-600 hover:bg-emerald-50 rounded-xl px-6">
                    Start Next Survey
                  </Button>
                  <div className="text-emerald-100">
                    <span className="text-2xl font-bold">4.8</span>
                    <span className="text-sm ml-1">avg rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-emerald-100 text-sm">Available</p>
                      <p className="text-3xl font-bold">3</p>
                    </div>
                    <BookOpen className="w-12 h-12 text-emerald-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Completed</p>
                      <p className="text-3xl font-bold">1</p>
                    </div>
                    <CheckCircle2 className="w-12 h-12 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500 to-red-500 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm">In Progress</p>
                      <p className="text-3xl font-bold">1</p>
                    </div>
                    <Clock className="w-12 h-12 text-orange-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">Points Earned</p>
                      <p className="text-3xl font-bold">420</p>
                    </div>
                    <Award className="w-12 h-12 text-purple-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Progress Chart */}
              <Card className="border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-emerald-600" />
                    Overall Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-center">
                    <div className="relative w-40 h-40">
                      <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="50" stroke="#e5e7eb" strokeWidth="10" fill="none" />
                        <circle
                          cx="60" cy="60" r="50" stroke="url(#emeraldGradient)" strokeWidth="10" fill="none"
                          strokeLinecap="round" strokeDasharray="314" strokeDashoffset="157"
                        />
                        <defs>
                          <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#059669" />
                            <stop offset="100%" stopColor="#10b981" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-gray-900">50%</p>
                          <p className="text-sm text-gray-600">Complete</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-gray-600">You've completed 1 out of 5 surveys</p>
                    <div className="bg-emerald-50 rounded-lg p-3">
                      <p className="text-emerald-700 font-medium">🎯 Goal: Complete 3 more surveys this month</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <Bell className="w-6 h-6 mr-2 text-emerald-600" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 rounded-xl hover:bg-emerald-50 transition-colors group">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full mt-3"></div>
                        <div className="flex-1">
                          <p className="text-gray-900 font-medium group-hover:text-emerald-700">{activity.action}</p>
                          <div className="flex items-center justify-between mt-1">
                            <p className="text-sm text-gray-500">{activity.time}</p>
                            {activity.points > 0 && (
                              <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">
                                +{activity.points} pts
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievements */}
            <Card className="border-0 shadow-xl rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-emerald-600" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`p-4 rounded-xl border-2 transition-all ${
                      achievement.earned 
                        ? 'border-emerald-200 bg-emerald-50' 
                        : 'border-gray-200 bg-gray-50'
                    }`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        achievement.earned 
                          ? 'bg-emerald-500 text-white' 
                          : 'bg-gray-300 text-gray-500'
                      }`}>
                        <achievement.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{achievement.name}</h3>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'surveys':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">My Surveys</h2>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm" className="rounded-xl">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="rounded-xl">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
            
            <div className="grid gap-6">
              {surveys.filter(s => s.status === 'completed' || s.status === 'pending').map((survey) => (
                <Card key={survey.id} className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-bold text-gray-900 text-lg">{survey.title}</h3>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {survey.category}
                        </Badge>
                      </div>
                      <Badge 
                        variant={survey.status === 'completed' ? 'default' : 'secondary'}
                        className={`${
                          survey.status === 'completed' 
                            ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100' 
                            : 'bg-orange-100 text-orange-700 hover:bg-orange-100'
                        } px-3 py-1`}
                      >
                        {survey.status}
                      </Badge>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Progress: {survey.progress}%</span>
                        <span>Due: {survey.dueDate}</span>
                        <span className="text-purple-600 font-medium">+{survey.points} points</span>
                      </div>
                      <Progress value={survey.progress} className="h-3" />
                      <div className="flex justify-end">
                        {survey.status === 'pending' && (
                          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl">
                            Continue Survey
                          </Button>
                        )}
                        {survey.status === 'completed' && (
                          <Button variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 rounded-xl">
                            View Results
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      
      case 'available':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Available Surveys</h2>
              <div className="bg-emerald-50 px-4 py-2 rounded-xl">
                <span className="text-emerald-700 font-medium">180 points available</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {surveys.filter(s => s.status === 'available').map((survey) => (
                <Card key={survey.id} className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                          {survey.category}
                        </Badge>
                        <span className="text-2xl">+{survey.points}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg group-hover:text-emerald-600 transition-colors">
                        {survey.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Due: {survey.dueDate}</span>
                        <span>~10 min</span>
                      </div>
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl">
                        Start Survey
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      
      case 'progress':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Progress Overview</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle>Monthly Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Surveys Completed</span>
                      <span className="font-bold">1/4</span>
                    </div>
                    <Progress value={25} className="h-3" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Points Earned</span>
                      <span className="font-bold">420/1000</span>
                    </div>
                    <Progress value={42} className="h-3" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Response Rate</span>
                      <span className="font-bold">95%</span>
                    </div>
                    <Progress value={95} className="h-3" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle>Leaderboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🥇</span>
                        <div>
                          <p className="font-semibold">Alex Chen</p>
                          <p className="text-sm text-gray-600">1,250 points</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🥈</span>
                        <div>
                          <p className="font-semibold">Maria Garcia</p>
                          <p className="text-sm text-gray-600">980 points</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-xl border-2 border-emerald-200">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🏆</span>
                        <div>
                          <p className="font-semibold">You (Sarah)</p>
                          <p className="text-sm text-gray-600">420 points</p>
                        </div>
                      </div>
                      <span className="text-emerald-600 font-bold">#12</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      
      case 'profile':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      defaultValue="Sarah Johnson" 
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      defaultValue="sarah.johnson@university.edu" 
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Student ID</label>
                    <input 
                      type="text" 
                      defaultValue="STU-2024-001" 
                      className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50" 
                      disabled
                    />
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl">
                    Save Changes
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span>Email Notifications</span>
                    <Button variant="outline" size="sm">Toggle</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span>SMS Reminders</span>
                    <Button variant="outline" size="sm">Toggle</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span>Dark Mode</span>
                    <Button variant="outline" size="sm">Toggle</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate('landing')}
              className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
            >
              ← Back to Landing
            </button>
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              <h1 className="text-2xl font-bold">Responza</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="rounded-xl">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <div className="text-right">
              <p className="text-sm text-gray-600">Welcome back,</p>
              <p className="font-semibold text-gray-900">Sarah Johnson</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              SJ
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Dark Sidebar */}
        <nav className="w-72 bg-gradient-to-b from-gray-900 via-emerald-900 to-gray-900 min-h-screen shadow-2xl">
          <div className="p-6">
            <div className="space-y-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === 'overview'
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                    : 'text-gray-300 hover:bg-emerald-800/50 hover:text-white'
                }`}
              >
                <Home className="w-6 h-6" />
                <span className="font-medium">Overview</span>
              </button>
              
              <button
                onClick={() => setActiveTab('surveys')}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === 'surveys'
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                    : 'text-gray-300 hover:bg-emerald-800/50 hover:text-white'
                }`}
              >
                <FileText className="w-6 h-6" />
                <span className="font-medium">My Surveys</span>
              </button>
              
              <button
                onClick={() => setActiveTab('available')}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === 'available'
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                    : 'text-gray-300 hover:bg-emerald-800/50 hover:text-white'
                }`}
              >
                <BookOpen className="w-6 h-6" />
                <span className="font-medium">Available Surveys</span>
              </button>
              
              <button
                onClick={() => setActiveTab('progress')}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === 'progress'
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                    : 'text-gray-300 hover:bg-emerald-800/50 hover:text-white'
                }`}
              >
                <TrendingUp className="w-6 h-6" />
                <span className="font-medium">Progress</span>
              </button>
              
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === 'profile'
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                    : 'text-gray-300 hover:bg-emerald-800/50 hover:text-white'
                }`}
              >
                <Settings className="w-6 h-6" />
                <span className="font-medium">Profile</span>
              </button>
            </div>

            {/* Stats in Sidebar */}
            <div className="mt-8 p-4 bg-emerald-800/30 rounded-2xl">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">420</div>
                <div className="text-emerald-200 text-sm">Total Points</div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-center">
                <div>
                  <div className="text-lg font-semibold text-white">1</div>
                  <div className="text-emerald-200 text-xs">Completed</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">3</div>
                  <div className="text-emerald-200 text-xs">Available</div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}