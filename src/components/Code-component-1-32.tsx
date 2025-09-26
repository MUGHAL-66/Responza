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
  Settings
} from 'lucide-react';

interface StudentDashboardProps {
  onNavigate: (page: 'landing' | 'student' | 'teacher' | 'admin') => void;
}

export default function StudentDashboard({ onNavigate }: StudentDashboardProps) {
  const surveys = [
    { id: 1, title: "Course Feedback Survey", status: "completed", progress: 100, dueDate: "2024-01-15" },
    { id: 2, title: "Learning Experience Assessment", status: "pending", progress: 60, dueDate: "2024-01-20" },
    { id: 3, title: "Campus Facilities Survey", status: "available", progress: 0, dueDate: "2024-01-25" },
    { id: 4, title: "Digital Learning Tools Review", status: "available", progress: 0, dueDate: "2024-01-30" },
  ];

  const recentActivity = [
    { action: "Completed Course Feedback Survey", time: "2 hours ago" },
    { action: "Started Learning Experience Assessment", time: "1 day ago" },
    { action: "Received new survey: Campus Facilities", time: "3 days ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate('landing')}
              className="text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              ← Back to Landing
            </button>
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
              <h1 className="text-2xl font-bold">Responza</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Welcome back,</p>
              <p className="font-semibold text-gray-900">Sarah Johnson</p>
            </div>
            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-emerald-600" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-white shadow-sm min-h-screen border-r border-gray-200">
          <div className="p-6">
            <div className="space-y-2">
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-emerald-50 text-emerald-700 font-medium">
                <Home className="w-5 h-5" />
                <span>Overview</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                <FileText className="w-5 h-5" />
                <span>My Surveys</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                <BookOpen className="w-5 h-5" />
                <span>Available Surveys</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                <TrendingUp className="w-5 h-5" />
                <span>Progress</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                <Settings className="w-5 h-5" />
                <span>Profile</span>
              </a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Welcome Section */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Dashboard</h1>
              <p className="text-gray-600">Track your survey progress and manage your responses</p>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-emerald-100">Surveys Available</p>
                      <p className="text-3xl font-bold">4</p>
                    </div>
                    <BookOpen className="w-12 h-12 text-emerald-200" />
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-blue-100">Completed</p>
                      <p className="text-3xl font-bold">1</p>
                    </div>
                    <CheckCircle2 className="w-12 h-12 text-blue-200" />
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-orange-100">Pending</p>
                      <p className="text-3xl font-bold">3</p>
                    </div>
                    <Clock className="w-12 h-12 text-orange-200" />
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Progress Chart */}
              <Card className="border-0 shadow-lg rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Overall Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="#e5e7eb"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="url(#emeraldGradient)"
                          strokeWidth="8"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray="314"
                          strokeDashoffset="157"
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
                          <p className="text-2xl font-bold text-gray-900">50%</p>
                          <p className="text-sm text-gray-600">Complete</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600">You've completed 1 out of 4 surveys</p>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="border-0 shadow-lg rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3"></div>
                        <div className="flex-1">
                          <p className="text-gray-900 font-medium">{activity.action}</p>
                          <p className="text-sm text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Surveys List */}
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">My Surveys</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {surveys.map((survey) => (
                    <div key={survey.id} className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">{survey.title}</h3>
                        <Badge 
                          variant={survey.status === 'completed' ? 'default' : survey.status === 'pending' ? 'secondary' : 'outline'}
                          className={
                            survey.status === 'completed' 
                              ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100' 
                              : survey.status === 'pending'
                              ? 'bg-orange-100 text-orange-700 hover:bg-orange-100'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-100'
                          }
                        >
                          {survey.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>Progress: {survey.progress}%</span>
                          <span>Due: {survey.dueDate}</span>
                        </div>
                        <Progress value={survey.progress} className="h-2" />
                        <div className="flex justify-end pt-2">
                          {survey.status === 'available' && (
                            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                              Start Survey
                            </Button>
                          )}
                          {survey.status === 'pending' && (
                            <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
                              Continue
                            </Button>
                          )}
                          {survey.status === 'completed' && (
                            <Button size="sm" variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                              View Results
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}