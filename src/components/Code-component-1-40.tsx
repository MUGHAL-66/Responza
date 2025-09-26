import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Users, 
  FileText, 
  Activity, 
  Settings,
  BarChart3,
  Shield,
  AlertTriangle,
  Trash2,
  Eye,
  Edit,
  MoreHorizontal,
  User,
  Home,
  Database
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Progress } from './ui/progress';

interface AdminDashboardProps {
  onNavigate: (page: 'landing' | 'student' | 'teacher' | 'admin') => void;
}

export default function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const users = [
    { id: 1, name: "Dr. Michael Chen", role: "Teacher", email: "m.chen@university.edu", surveys: 4, status: "active" },
    { id: 2, name: "Sarah Johnson", role: "Student", email: "s.johnson@university.edu", surveys: 1, status: "active" },
    { id: 3, name: "Prof. Lisa Rodriguez", role: "Teacher", email: "l.rodriguez@university.edu", surveys: 6, status: "active" },
    { id: 4, name: "Alex Kim", role: "Student", email: "a.kim@university.edu", surveys: 2, status: "inactive" },
  ];

  const systemLogs = [
    { action: "User login", user: "Dr. Michael Chen", time: "5 mins ago", type: "info" },
    { action: "Survey published", user: "Prof. Lisa Rodriguez", time: "1 hour ago", type: "success" },
    { action: "Failed login attempt", user: "Unknown", time: "2 hours ago", type: "warning" },
    { action: "System backup completed", user: "System", time: "6 hours ago", type: "info" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate('landing')}
              className="text-red-600 hover:text-red-700 font-semibold"
            >
              ← Back to Landing
            </button>
            <div className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              <h1 className="text-2xl font-bold">Responza</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Welcome back,</p>
              <p className="font-semibold text-gray-900">Administrator</p>
            </div>
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-red-600" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-white shadow-sm min-h-screen border-r border-gray-200">
          <div className="p-6">
            <div className="space-y-2">
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-red-50 text-red-700 font-medium">
                <Home className="w-5 h-5" />
                <span>Overview</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                <Users className="w-5 h-5" />
                <span>User Management</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                <FileText className="w-5 h-5" />
                <span>All Surveys</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                <BarChart3 className="w-5 h-5" />
                <span>Analytics</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                <Database className="w-5 h-5" />
                <span>System Logs</span>
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
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
              <p className="text-gray-600">Monitor and manage your Responza platform</p>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-red-100">Total Users</p>
                      <p className="text-3xl font-bold">128</p>
                    </div>
                    <Users className="w-12 h-12 text-red-200" />
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-blue-100">Surveys Created</p>
                      <p className="text-3xl font-bold">47</p>
                    </div>
                    <FileText className="w-12 h-12 text-blue-200" />
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-green-100">Active Responses</p>
                      <p className="text-3xl font-bold">1,234</p>
                    </div>
                    <Activity className="w-12 h-12 text-green-200" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Admin Tools */}
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-red-600" />
                  Admin Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-20 flex-col space-y-2 border-2 border-red-200 hover:bg-red-50">
                    <Users className="w-6 h-6 text-red-600" />
                    <span className="text-red-600">Manage Teachers</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2 border-2 border-orange-200 hover:bg-orange-50">
                    <Trash2 className="w-6 h-6 text-orange-600" />
                    <span className="text-orange-600">Reset Surveys</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2 border-2 border-purple-200 hover:bg-purple-50">
                    <Database className="w-6 h-6 text-purple-600" />
                    <span className="text-purple-600">System Backup</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* User Activity Chart */}
              <Card className="border-0 shadow-lg rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">User Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Active Users</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <Progress value={85} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Survey Completion Rate</span>
                        <span className="font-medium">72%</span>
                      </div>
                      <Progress value={72} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">System Health</span>
                        <span className="font-medium">98%</span>
                      </div>
                      <Progress value={98} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Survey Distribution Chart */}
              <Card className="border-0 shadow-lg rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Survey Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Education</p>
                        <p className="text-sm text-gray-600">25 surveys</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-red-600">53%</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Feedback</p>
                        <p className="text-sm text-gray-600">15 surveys</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-blue-600">32%</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Assessment</p>
                        <p className="text-sm text-gray-600">7 surveys</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">15%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* User Management Table */}
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Recent Users</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Surveys</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={user.role === 'Teacher' ? 'default' : 'secondary'}
                            className={
                              user.role === 'Teacher'
                                ? 'bg-blue-100 text-blue-700 hover:bg-blue-100'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-100'
                            }
                          >
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-600">{user.email}</TableCell>
                        <TableCell>{user.surveys}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={user.status === 'active' ? 'default' : 'secondary'}
                            className={
                              user.status === 'active'
                                ? 'bg-green-100 text-green-700 hover:bg-green-100'
                                : 'bg-red-100 text-red-700 hover:bg-red-100'
                            }
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline" className="p-2">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="p-2">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="p-2 text-red-600 border-red-200 hover:bg-red-50">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* System Logs */}
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">System Logs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {systemLogs.map((log, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className={`w-3 h-3 rounded-full ${
                        log.type === 'success' ? 'bg-green-500' :
                        log.type === 'warning' ? 'bg-yellow-500' :
                        log.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-gray-900">{log.action}</p>
                          <p className="text-sm text-gray-500">{log.time}</p>
                        </div>
                        <p className="text-sm text-gray-600">by {log.user}</p>
                      </div>
                      {log.type === 'warning' && (
                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      )}
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