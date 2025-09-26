import { useState } from 'react';
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
  Database,
  UserPlus,
  Download,
  Search,
  Filter,
  Bell,
  Lock,
  Server,
  Globe,
  TrendingUp,
  Target
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

type TabType = 'overview' | 'users' | 'surveys' | 'analytics' | 'logs' | 'settings';

export default function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const users = [
    { id: 1, name: "Dr. Michael Chen", role: "Teacher", email: "m.chen@university.edu", surveys: 4, status: "active", lastLogin: "2 hours ago", department: "Computer Science" },
    { id: 2, name: "Sarah Johnson", role: "Student", email: "s.johnson@university.edu", surveys: 1, status: "active", lastLogin: "5 minutes ago", department: "Engineering" },
    { id: 3, name: "Prof. Lisa Rodriguez", role: "Teacher", email: "l.rodriguez@university.edu", surveys: 6, status: "active", lastLogin: "1 day ago", department: "Mathematics" },
    { id: 4, name: "Alex Kim", role: "Student", email: "a.kim@university.edu", surveys: 2, status: "inactive", lastLogin: "1 week ago", department: "Physics" },
    { id: 5, name: "Dr. Emily Watson", role: "Teacher", email: "e.watson@university.edu", surveys: 3, status: "active", lastLogin: "3 hours ago", department: "Biology" },
  ];

  const systemLogs = [
    { id: 1, action: "User login", user: "Dr. Michael Chen", time: "5 mins ago", type: "info", ip: "192.168.1.100" },
    { id: 2, action: "Survey published", user: "Prof. Lisa Rodriguez", time: "1 hour ago", type: "success", ip: "192.168.1.101" },
    { id: 3, action: "Failed login attempt", user: "Unknown", time: "2 hours ago", type: "warning", ip: "203.0.113.45" },
    { id: 4, action: "System backup completed", user: "System", time: "6 hours ago", type: "info", ip: "127.0.0.1" },
    { id: 5, action: "Database maintenance", user: "Admin", time: "12 hours ago", type: "success", ip: "127.0.0.1" },
  ];

  const surveys = [
    { id: 1, title: "Course Feedback Survey", creator: "Dr. Michael Chen", responses: 24, status: "active", created: "2024-01-10" },
    { id: 2, title: "Learning Experience Assessment", creator: "Prof. Lisa Rodriguez", responses: 18, status: "active", created: "2024-01-12" },
    { id: 3, title: "Campus Facilities Survey", creator: "Dr. Emily Watson", responses: 0, status: "draft", created: "2024-01-14" },
    { id: 4, title: "Digital Learning Tools Review", creator: "Dr. Michael Chen", responses: 12, status: "active", created: "2024-01-15" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
              <div className="relative">
                <h1 className="text-3xl font-bold mb-2">System Control Center 🛡️</h1>
                <p className="text-red-100 text-lg">Monitor and manage your Responza platform with advanced controls</p>
                <div className="mt-6 flex items-center space-x-4">
                  <Button className="bg-white text-red-600 hover:bg-red-50 rounded-xl px-6">
                    System Health Check
                  </Button>
                  <div className="text-red-100">
                    <span className="text-2xl font-bold">99.9%</span>
                    <span className="text-sm ml-1">uptime</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-red-500 to-pink-500 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-red-100 text-sm">Total Users</p>
                      <p className="text-3xl font-bold">128</p>
                    </div>
                    <Users className="w-12 h-12 text-red-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Active Surveys</p>
                      <p className="text-3xl font-bold">47</p>
                    </div>
                    <FileText className="w-12 h-12 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-green-500 to-teal-500 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">Total Responses</p>
                      <p className="text-3xl font-bold">1,234</p>
                    </div>
                    <Activity className="w-12 h-12 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">System Health</p>
                      <p className="text-3xl font-bold">98%</p>
                    </div>
                    <Shield className="w-12 h-12 text-purple-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Admin Tools */}
            <Card className="border-0 shadow-xl rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-red-600" />
                  Quick Admin Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col space-y-3 border-2 border-red-200 hover:bg-red-50 rounded-2xl group"
                    onClick={() => setActiveTab('users')}
                  >
                    <Users className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform" />
                    <span className="text-red-600 font-medium">Manage Users</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col space-y-3 border-2 border-orange-200 hover:bg-orange-50 rounded-2xl group"
                  >
                    <Database className="w-8 h-8 text-orange-600 group-hover:scale-110 transition-transform" />
                    <span className="text-orange-600 font-medium">System Backup</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col space-y-3 border-2 border-purple-200 hover:bg-purple-50 rounded-2xl group"
                    onClick={() => setActiveTab('logs')}
                  >
                    <Activity className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />
                    <span className="text-purple-600 font-medium">View Logs</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col space-y-3 border-2 border-blue-200 hover:bg-blue-50 rounded-2xl group"
                    onClick={() => setActiveTab('settings')}
                  >
                    <Settings className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span className="text-blue-600 font-medium">System Settings</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* System Health */}
              <Card className="border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <Server className="w-6 h-6 mr-2 text-red-600" />
                    System Health
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Server Performance</span>
                      <span className="font-medium">98%</span>
                    </div>
                    <Progress value={98} className="h-3" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Database Health</span>
                      <span className="font-medium">95%</span>
                    </div>
                    <Progress value={95} className="h-3" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">API Response Time</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-3" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Security Score</span>
                      <span className="font-medium">100%</span>
                    </div>
                    <Progress value={100} className="h-3" />
                  </div>
                </CardContent>
              </Card>

              {/* Platform Analytics */}
              <Card className="border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-red-600" />
                    Platform Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl">
                      <div>
                        <p className="font-medium text-gray-900">Education Surveys</p>
                        <p className="text-sm text-gray-600">25 active surveys</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-red-600">53%</p>
                        <p className="text-xs text-gray-500">of total</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                      <div>
                        <p className="font-medium text-gray-900">Feedback Surveys</p>
                        <p className="text-sm text-gray-600">15 active surveys</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-blue-600">32%</p>
                        <p className="text-xs text-gray-500">of total</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                      <div>
                        <p className="font-medium text-gray-900">Assessment Surveys</p>
                        <p className="text-sm text-gray-600">7 active surveys</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">15%</p>
                        <p className="text-xs text-gray-500">of total</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="border-0 shadow-xl rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <Activity className="w-6 h-6 mr-2 text-red-600" />
                  Recent System Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {systemLogs.slice(0, 5).map((log) => (
                    <div key={log.id} className="flex items-center space-x-3 p-4 rounded-xl hover:bg-gray-50 transition-colors">
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
                        <p className="text-sm text-gray-600">by {log.user} • {log.ip}</p>
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
        );
      
      case 'users':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm" className="rounded-xl">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="rounded-xl">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white rounded-xl">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add User
                </Button>
              </div>
            </div>

            {/* User Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-0 shadow-lg rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-gray-900">128</div>
                <div className="text-gray-600">Total Users</div>
              </Card>
              <Card className="border-0 shadow-lg rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-blue-600">15</div>
                <div className="text-gray-600">Teachers</div>
              </Card>
              <Card className="border-0 shadow-lg rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-green-600">113</div>
                <div className="text-gray-600">Students</div>
              </Card>
              <Card className="border-0 shadow-lg rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-red-600">95%</div>
                <div className="text-gray-600">Active Rate</div>
              </Card>
            </div>
            
            <Card className="border-0 shadow-xl rounded-2xl">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Surveys</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Login</TableHead>
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
                            className={`${
                              user.role === 'Teacher'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-600">{user.department}</TableCell>
                        <TableCell className="text-gray-600">{user.email}</TableCell>
                        <TableCell>{user.surveys}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={user.status === 'active' ? 'default' : 'secondary'}
                            className={`${
                              user.status === 'active'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-red-100 text-red-700'
                            }`}
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-500">{user.lastLogin}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline" className="p-2 rounded-lg">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="p-2 rounded-lg">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="p-2 rounded-lg text-red-600 border-red-200 hover:bg-red-50">
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
          </div>
        );
      
      case 'surveys':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Survey Management</h2>
              <Button variant="outline" className="rounded-xl">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-0 shadow-lg rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-gray-900">47</div>
                <div className="text-gray-600">Total Surveys</div>
              </Card>
              <Card className="border-0 shadow-lg rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-green-600">35</div>
                <div className="text-gray-600">Active</div>
              </Card>
              <Card className="border-0 shadow-lg rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-orange-600">8</div>
                <div className="text-gray-600">Draft</div>
              </Card>
              <Card className="border-0 shadow-lg rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-blue-600">1,234</div>
                <div className="text-gray-600">Total Responses</div>
              </Card>
            </div>
            
            <Card className="border-0 shadow-xl rounded-2xl">
              <CardHeader>
                <CardTitle>All Surveys</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {surveys.map((survey) => (
                    <div key={survey.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors">
                      <div>
                        <h3 className="font-semibold text-gray-900">{survey.title}</h3>
                        <p className="text-sm text-gray-600">Created by {survey.creator} • {survey.created}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <p className="font-semibold text-gray-900">{survey.responses}</p>
                          <p className="text-xs text-gray-600">responses</p>
                        </div>
                        <Badge 
                          variant={survey.status === 'active' ? 'default' : 'secondary'}
                          className={`${
                            survey.status === 'active'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {survey.status}
                        </Badge>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline" className="p-2 rounded-lg">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="p-2 rounded-lg">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="p-2 rounded-lg text-red-600 border-red-200 hover:bg-red-50">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'analytics':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Platform Analytics</h2>
              <Button variant="outline" className="rounded-xl">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-xl rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">82%</div>
                  <div className="text-gray-600">Platform Utilization</div>
                  <div className="text-sm text-green-600 mt-2">↑ 15% from last month</div>
                </div>
              </Card>
              <Card className="border-0 shadow-xl rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">4.3</div>
                  <div className="text-gray-600">Average Satisfaction</div>
                  <div className="text-sm text-green-600 mt-2">↑ 0.2 from last month</div>
                </div>
              </Card>
              <Card className="border-0 shadow-xl rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">1,234</div>
                  <div className="text-gray-600">Monthly Responses</div>
                  <div className="text-sm text-green-600 mt-2">↑ 25% from last month</div>
                </div>
              </Card>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle>Usage Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl flex items-center justify-center">
                    <p className="text-gray-500">Interactive Usage Chart Placeholder</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle>Department Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Computer Science</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        <span className="text-sm font-semibold">85%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Mathematics</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                        </div>
                        <span className="text-sm font-semibold">72%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Engineering</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                        <span className="text-sm font-semibold">90%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Biology</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                        </div>
                        <span className="text-sm font-semibold">68%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      
      case 'logs':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">System Logs</h2>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm" className="rounded-xl">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="rounded-xl">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
            
            <Card className="border-0 shadow-xl rounded-2xl">
              <CardHeader>
                <CardTitle>Recent System Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {systemLogs.map((log) => (
                    <div key={log.id} className="flex items-center space-x-3 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100">
                      <div className={`w-4 h-4 rounded-full ${
                        log.type === 'success' ? 'bg-green-500' :
                        log.type === 'warning' ? 'bg-yellow-500' :
                        log.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-gray-900">{log.action}</p>
                          <p className="text-sm text-gray-500">{log.time}</p>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-sm text-gray-600">by {log.user}</p>
                          <p className="text-xs text-gray-500">{log.ip}</p>
                        </div>
                      </div>
                      {log.type === 'warning' && (
                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      )}
                      <Badge 
                        variant="outline"
                        className={`${
                          log.type === 'success' ? 'border-green-200 text-green-700 bg-green-50' :
                          log.type === 'warning' ? 'border-yellow-200 text-yellow-700 bg-yellow-50' :
                          log.type === 'error' ? 'border-red-200 text-red-700 bg-red-50' :
                          'border-blue-200 text-blue-700 bg-blue-50'
                        }`}
                      >
                        {log.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">System Settings</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="w-5 h-5 mr-2 text-red-600" />
                    Security Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-xl">
                    <span>Two-Factor Authentication</span>
                    <Button variant="outline" size="sm" className="text-red-600 border-red-200">Enabled</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span>Password Policy</span>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span>Session Timeout</span>
                    <Button variant="outline" size="sm">30 min</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span>Login Attempts</span>
                    <Button variant="outline" size="sm">5 max</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Server className="w-5 h-5 mr-2 text-red-600" />
                    System Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">System Name</label>
                    <input 
                      type="text" 
                      defaultValue="Responza Platform" 
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Max Users</label>
                    <input 
                      type="number" 
                      defaultValue="500" 
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Backup Frequency</label>
                    <select className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500">
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl">
                    Save Configuration
                  </Button>
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
              className="text-red-600 hover:text-red-700 font-semibold transition-colors"
            >
              ← Back to Landing
            </button>
            <div className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              <h1 className="text-2xl font-bold">Responza</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="rounded-xl">
              <Bell className="w-4 h-4 mr-2" />
              Alerts
            </Button>
            <div className="text-right">
              <p className="text-sm text-gray-600">System Administrator</p>
              <p className="font-semibold text-gray-900">Admin Control</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white">
              <Shield className="w-6 h-6" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Dark Sidebar */}
        <nav className="w-72 bg-gradient-to-b from-gray-900 via-red-900 to-gray-900 min-h-screen shadow-2xl">
          <div className="p-6">
            <div className="space-y-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === 'overview'
                    ? 'bg-red-600 text-white shadow-lg shadow-red-500/30'
                    : 'text-gray-300 hover:bg-red-800/50 hover:text-white'
                }`}
              >
                <Home className="w-6 h-6" />
                <span className="font-medium">Overview</span>
              </button>
              
              <button
                onClick={() => setActiveTab('users')}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === 'users'
                    ? 'bg-red-600 text-white shadow-lg shadow-red-500/30'
                    : 'text-gray-300 hover:bg-red-800/50 hover:text-white'
                }`}
              >
                <Users className="w-6 h-6" />
                <span className="font-medium">User Management</span>
              </button>
              
              <button
                onClick={() => setActiveTab('surveys')}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === 'surveys'
                    ? 'bg-red-600 text-white shadow-lg shadow-red-500/30'
                    : 'text-gray-300 hover:bg-red-800/50 hover:text-white'
                }`}
              >
                <FileText className="w-6 h-6" />
                <span className="font-medium">All Surveys</span>
              </button>
              
              <button
                onClick={() => setActiveTab('analytics')}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === 'analytics'
                    ? 'bg-red-600 text-white shadow-lg shadow-red-500/30'
                    : 'text-gray-300 hover:bg-red-800/50 hover:text-white'
                }`}
              >
                <BarChart3 className="w-6 h-6" />
                <span className="font-medium">Analytics</span>
              </button>
              
              <button
                onClick={() => setActiveTab('logs')}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === 'logs'
                    ? 'bg-red-600 text-white shadow-lg shadow-red-500/30'
                    : 'text-gray-300 hover:bg-red-800/50 hover:text-white'
                }`}
              >
                <Database className="w-6 h-6" />
                <span className="font-medium">System Logs</span>
              </button>
              
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === 'settings'
                    ? 'bg-red-600 text-white shadow-lg shadow-red-500/30'
                    : 'text-gray-300 hover:bg-red-800/50 hover:text-white'
                }`}
              >
                <Settings className="w-6 h-6" />
                <span className="font-medium">Settings</span>
              </button>
            </div>

            {/* Stats in Sidebar */}
            <div className="mt-8 p-4 bg-red-800/30 rounded-2xl">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">128</div>
                <div className="text-red-200 text-sm">Total Users</div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-center">
                <div>
                  <div className="text-lg font-semibold text-white">47</div>
                  <div className="text-red-200 text-xs">Surveys</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">98%</div>
                  <div className="text-red-200 text-xs">Health</div>
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