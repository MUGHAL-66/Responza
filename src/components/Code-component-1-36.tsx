import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Plus, 
  FileText, 
  Users, 
  BarChart3, 
  Settings,
  Eye,
  Edit,
  MoreHorizontal,
  User,
  Home,
  PlusCircle
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

interface TeacherDashboardProps {
  onNavigate: (page: 'landing' | 'student' | 'teacher' | 'admin') => void;
}

export default function TeacherDashboard({ onNavigate }: TeacherDashboardProps) {
  const surveys = [
    { id: 1, title: "Course Feedback Survey", status: "published", responses: 24, students: 30, created: "2024-01-10" },
    { id: 2, title: "Learning Experience Assessment", status: "published", responses: 18, students: 30, created: "2024-01-12" },
    { id: 3, title: "Campus Facilities Survey", status: "draft", responses: 0, students: 30, created: "2024-01-14" },
    { id: 4, title: "Digital Learning Tools Review", status: "published", responses: 12, students: 30, created: "2024-01-15" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate('landing')}
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              ← Back to Landing
            </button>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              <h1 className="text-2xl font-bold">Responza</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Welcome back,</p>
              <p className="font-semibold text-gray-900">Dr. Michael Chen</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-white shadow-sm min-h-screen border-r border-gray-200">
          <div className="p-6">
            <div className="space-y-2">
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-blue-50 text-blue-700 font-medium">
                <Home className="w-5 h-5" />
                <span>Overview</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                <PlusCircle className="w-5 h-5" />
                <span>Create Survey</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                <FileText className="w-5 h-5" />
                <span>My Surveys</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                <Users className="w-5 h-5" />
                <span>Manage Students</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                <BarChart3 className="w-5 h-5" />
                <span>Reports</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Welcome Section */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Teacher Dashboard</h1>
                <p className="text-gray-600">Create and manage surveys for your students</p>
              </div>
              <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-xl px-6">
                <Plus className="w-5 h-5 mr-2" />
                Create New Survey
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-blue-100">Total Surveys</p>
                      <p className="text-3xl font-bold">4</p>
                    </div>
                    <FileText className="w-12 h-12 text-blue-200" />
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-green-100">Active Students</p>
                      <p className="text-3xl font-bold">30</p>
                    </div>
                    <Users className="w-12 h-12 text-green-200" />
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-purple-100">Total Responses</p>
                      <p className="text-3xl font-bold">54</p>
                    </div>
                    <BarChart3 className="w-12 h-12 text-purple-200" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-20 flex-col space-y-2 border-2 border-blue-200 hover:bg-blue-50">
                    <PlusCircle className="w-6 h-6 text-blue-600" />
                    <span className="text-blue-600">New Survey</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2 border-2 border-green-200 hover:bg-green-50">
                    <Users className="w-6 h-6 text-green-600" />
                    <span className="text-green-600">Manage Students</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2 border-2 border-purple-200 hover:bg-purple-50">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                    <span className="text-purple-600">View Analytics</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2 border-2 border-orange-200 hover:bg-orange-50">
                    <Settings className="w-6 h-6 text-orange-600" />
                    <span className="text-orange-600">Settings</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Surveys Table */}
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl text-gray-900">My Surveys</CardTitle>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  New Survey
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Survey Title</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Responses</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {surveys.map((survey) => (
                      <TableRow key={survey.id}>
                        <TableCell className="font-medium">{survey.title}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={survey.status === 'published' ? 'default' : 'secondary'}
                            className={
                              survey.status === 'published'
                                ? 'bg-green-100 text-green-700 hover:bg-green-100'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-100'
                            }
                          >
                            {survey.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{survey.responses}</span>
                            <span className="text-gray-500">/ {survey.students}</span>
                          </div>
                        </TableCell>
                        <TableCell>{survey.students}</TableCell>
                        <TableCell className="text-gray-500">{survey.created}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline" className="p-2">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="p-2">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="p-2">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Response Rate Chart */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Response Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {surveys.map((survey) => {
                      const responseRate = (survey.responses / survey.students) * 100;
                      return (
                        <div key={survey.id} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium text-gray-900">{survey.title}</span>
                            <span className="text-gray-600">{responseRate.toFixed(0)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${responseRate}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                      <div className="flex-1">
                        <p className="text-gray-900 font-medium">New response on Course Feedback Survey</p>
                        <p className="text-sm text-gray-500">5 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                      <div className="flex-1">
                        <p className="text-gray-900 font-medium">Published Digital Learning Tools Review</p>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                      <div className="flex-1">
                        <p className="text-gray-900 font-medium">Created new survey draft</p>
                        <p className="text-sm text-gray-500">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}