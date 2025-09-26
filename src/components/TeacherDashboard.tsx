import { useState } from 'react';
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
  PlusCircle,
  Calendar,
  Bell,
  Search,
  Filter,
  Download,
  Share,
  Target,
  TrendingUp
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

type TabType = 'overview' | 'create' | 'surveys' | 'students' | 'reports' | 'settings';

export default function TeacherDashboard({ onNavigate }: TeacherDashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const surveys = [
    { id: 1, title: "Course Feedback Survey", status: "published", responses: 24, students: 30, created: "2024-01-10", category: "Academic", avgRating: 4.2 },
    { id: 2, title: "Learning Experience Assessment", status: "published", responses: 18, students: 30, created: "2024-01-12", category: "Assessment", avgRating: 4.6 },
    { id: 3, title: "Campus Facilities Survey", status: "draft", responses: 0, students: 30, created: "2024-01-14", category: "Campus", avgRating: 0 },
    { id: 4, title: "Digital Learning Tools Review", status: "published", responses: 12, students: 30, created: "2024-01-15", category: "Technology", avgRating: 4.1 },
    { id: 5, title: "Mid-term Course Evaluation", status: "scheduled", responses: 0, students: 30, created: "2024-01-16", category: "Academic", avgRating: 0 },
  ];

  const students = [
    { id: 1, name: "Sarah Johnson", email: "sarah.j@university.edu", completed: 2, pending: 1, lastActive: "2 hours ago" },
    { id: 2, name: "Alex Chen", email: "alex.c@university.edu", completed: 3, pending: 0, lastActive: "1 day ago" },
    { id: 3, name: "Maria Garcia", email: "maria.g@university.edu", completed: 1, pending: 2, lastActive: "3 hours ago" },
    { id: 4, name: "David Kim", email: "david.k@university.edu", completed: 2, pending: 1, lastActive: "5 hours ago" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
              <div className="relative">
                <h1 className="text-3xl font-bold mb-2">Good morning, Dr. Chen! 🌟</h1>
                <p className="text-blue-100 text-lg">You have 54 responses across 4 active surveys</p>
                <div className="mt-6 flex items-center space-x-4">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-xl px-6">
                    Create New Survey
                  </Button>
                  <div className="text-blue-100">
                    <span className="text-2xl font-bold">4.3</span>
                    <span className="text-sm ml-1">avg satisfaction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Total Surveys</p>
                      <p className="text-3xl font-bold">5</p>
                    </div>
                    <FileText className="w-12 h-12 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-green-500 to-teal-500 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">Active Students</p>
                      <p className="text-3xl font-bold">30</p>
                    </div>
                    <Users className="w-12 h-12 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">Total Responses</p>
                      <p className="text-3xl font-bold">54</p>
                    </div>
                    <BarChart3 className="w-12 h-12 text-purple-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500 to-red-500 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm">Response Rate</p>
                      <p className="text-3xl font-bold">82%</p>
                    </div>
                    <Target className="w-12 h-12 text-orange-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="border-0 shadow-xl rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <PlusCircle className="w-6 h-6 mr-2 text-blue-600" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col space-y-3 border-2 border-blue-200 hover:bg-blue-50 rounded-2xl group"
                    onClick={() => setActiveTab('create')}
                  >
                    <PlusCircle className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span className="text-blue-600 font-medium">New Survey</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col space-y-3 border-2 border-green-200 hover:bg-green-50 rounded-2xl group"
                    onClick={() => setActiveTab('students')}
                  >
                    <Users className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform" />
                    <span className="text-green-600 font-medium">Manage Students</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col space-y-3 border-2 border-purple-200 hover:bg-purple-50 rounded-2xl group"
                    onClick={() => setActiveTab('reports')}
                  >
                    <BarChart3 className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />
                    <span className="text-purple-600 font-medium">View Analytics</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col space-y-3 border-2 border-orange-200 hover:bg-orange-50 rounded-2xl group"
                    onClick={() => setActiveTab('settings')}
                  >
                    <Settings className="w-8 h-8 text-orange-600 group-hover:scale-110 transition-transform" />
                    <span className="text-orange-600 font-medium">Settings</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Surveys */}
              <Card className="border-0 shadow-xl rounded-2xl">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl text-gray-900">Recent Surveys</CardTitle>
                  <Button size="sm" variant="outline" onClick={() => setActiveTab('surveys')}>
                    View All
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {surveys.slice(0, 3).map((survey) => (
                      <div key={survey.id} className="p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">{survey.title}</h3>
                          <Badge 
                            variant={survey.status === 'published' ? 'default' : 'secondary'}
                            className={`${
                              survey.status === 'published'
                                ? 'bg-green-100 text-green-700'
                                : survey.status === 'draft'
                                ? 'bg-gray-100 text-gray-700'
                                : 'bg-blue-100 text-blue-700'
                            }`}
                          >
                            {survey.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>{survey.responses}/{survey.students} responses</span>
                          <span>{survey.created}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Response Rate Chart */}
              <Card className="border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
                    Response Rates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {surveys.filter(s => s.status === 'published').map((survey) => {
                      const responseRate = (survey.responses / survey.students) * 100;
                      return (
                        <div key={survey.id} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium text-gray-900">{survey.title}</span>
                            <span className="text-gray-600">{responseRate.toFixed(0)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-300"
                              style={{ width: `${responseRate}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      
      case 'create':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Create New Survey</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle>Survey Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Survey Title</label>
                    <input 
                      type="text" 
                      placeholder="Enter survey title" 
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea 
                      placeholder="Describe your survey" 
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>Academic</option>
                      <option>Assessment</option>
                      <option>Campus</option>
                      <option>Technology</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
                    <input 
                      type="date" 
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle>Survey Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start p-4 h-auto rounded-xl">
                      <div className="text-left">
                        <div className="font-medium">Course Feedback</div>
                        <div className="text-sm text-gray-600">Standard course evaluation template</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="w-full justify-start p-4 h-auto rounded-xl">
                      <div className="text-left">
                        <div className="font-medium">Quiz Assessment</div>
                        <div className="text-sm text-gray-600">Multiple choice and short answer</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="w-full justify-start p-4 h-auto rounded-xl">
                      <div className="text-left">
                        <div className="font-medium">Event Feedback</div>
                        <div className="text-sm text-gray-600">Event satisfaction survey</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="w-full justify-start p-4 h-auto rounded-xl">
                      <div className="text-left">
                        <div className="font-medium">Custom Survey</div>
                        <div className="text-sm text-gray-600">Start from scratch</div>
                      </div>
                    </Button>
                  </div>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                    Create Survey
                  </Button>
                </CardContent>
              </Card>
            </div>
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
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
                  onClick={() => setActiveTab('create')}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  New Survey
                </Button>
              </div>
            </div>
            
            <Card className="border-0 shadow-xl rounded-2xl">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Survey Title</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Responses</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Avg Rating</TableHead>
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
                            className={`${
                              survey.status === 'published'
                                ? 'bg-green-100 text-green-700'
                                : survey.status === 'draft'
                                ? 'bg-gray-100 text-gray-700'
                                : 'bg-blue-100 text-blue-700'
                            }`}
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
                        <TableCell>
                          {survey.avgRating > 0 ? (
                            <span className="font-medium">{survey.avgRating}/5</span>
                          ) : (
                            '-'
                          )}
                        </TableCell>
                        <TableCell className="text-gray-500">{survey.created}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline" className="p-2 rounded-lg">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="p-2 rounded-lg">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="p-2 rounded-lg">
                              <Share className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="p-2 rounded-lg">
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
          </div>
        );
      
      case 'students':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Student Management</h2>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                <Plus className="w-4 h-4 mr-2" />
                Add Students
              </Button>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card className="border-0 shadow-lg rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-gray-900">30</div>
                <div className="text-gray-600">Total Students</div>
              </Card>
              <Card className="border-0 shadow-lg rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-green-600">28</div>
                <div className="text-gray-600">Active</div>
              </Card>
              <Card className="border-0 shadow-lg rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-blue-600">82%</div>
                <div className="text-gray-600">Participation Rate</div>
              </Card>
              <Card className="border-0 shadow-lg rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-purple-600">4.2</div>
                <div className="text-gray-600">Avg Engagement</div>
              </Card>
            </div>
            
            <Card className="border-0 shadow-xl rounded-2xl">
              <CardHeader>
                <CardTitle>Student List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {students.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{student.name}</p>
                          <p className="text-sm text-gray-600">{student.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Completed</p>
                          <p className="font-semibold text-green-600">{student.completed}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Pending</p>
                          <p className="font-semibold text-orange-600">{student.pending}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Last Active</p>
                          <p className="font-semibold text-gray-900">{student.lastActive}</p>
                        </div>
                        <Button size="sm" variant="outline" className="rounded-lg">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'reports':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>
              <Button variant="outline" className="rounded-xl">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-xl rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">82%</div>
                  <div className="text-gray-600">Overall Response Rate</div>
                  <div className="text-sm text-green-600 mt-2">↑ 12% from last month</div>
                </div>
              </Card>
              <Card className="border-0 shadow-xl rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">4.3</div>
                  <div className="text-gray-600">Average Satisfaction</div>
                  <div className="text-sm text-green-600 mt-2">↑ 0.3 from last month</div>
                </div>
              </Card>
              <Card className="border-0 shadow-xl rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">54</div>
                  <div className="text-gray-600">Total Responses</div>
                  <div className="text-sm text-green-600 mt-2">↑ 18 from last week</div>
                </div>
              </Card>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle>Response Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center">
                    <p className="text-gray-500">Interactive Chart Placeholder</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle>Satisfaction Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Excellent (5/5)</span>
                      <span className="font-semibold">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span>Good (4/5)</span>
                      <span className="font-semibold">32%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span>Average (3/5)</span>
                      <span className="font-semibold">18%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '18%' }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span>Poor (1-2/5)</span>  
                      <span className="font-semibold">5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      defaultValue="Dr. Michael Chen" 
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      defaultValue="m.chen@university.edu" 
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                    <input 
                      type="text" 
                      defaultValue="Computer Science" 
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                    Save Changes
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span>New Response Notifications</span>
                    <Button variant="outline" size="sm">On</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span>Survey Deadline Reminders</span>
                    <Button variant="outline" size="sm">On</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span>Weekly Summary Reports</span>
                    <Button variant="outline" size="sm">Off</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span>Student Engagement Alerts</span>
                    <Button variant="outline" size="sm">On</Button>
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
              className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              ← Back to Landing
            </button>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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
              <p className="font-semibold text-gray-900">Dr. Michael Chen</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              MC
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Dark Sidebar */}
        <nav className="w-72 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 min-h-screen shadow-2xl">
          <div className="p-6">
            <div className="space-y-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === 'overview'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-300 hover:bg-blue-800/50 hover:text-white'
                }`}
              >
                <Home className="w-6 h-6" />
                <span className="font-medium">Overview</span>
              </button>
              
              <button
                onClick={() => setActiveTab('create')}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === 'create'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-300 hover:bg-blue-800/50 hover:text-white'
                }`}
              >
                <PlusCircle className="w-6 h-6" />
                <span className="font-medium">Create Survey</span>
              </button>
              
              <button
                onClick={() => setActiveTab('surveys')}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === 'surveys'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-300 hover:bg-blue-800/50 hover:text-white'
                }`}
              >
                <FileText className="w-6 h-6" />
                <span className="font-medium">My Surveys</span>
              </button>
              
              <button
                onClick={() => setActiveTab('students')}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === 'students'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-300 hover:bg-blue-800/50 hover:text-white'
                }`}
              >
                <Users className="w-6 h-6" />
                <span className="font-medium">Manage Students</span>
              </button>
              
              <button
                onClick={() => setActiveTab('reports')}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === 'reports'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-300 hover:bg-blue-800/50 hover:text-white'
                }`}
              >
                <BarChart3 className="w-6 h-6" />
                <span className="font-medium">Reports</span>
              </button>
              
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === 'settings'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-300 hover:bg-blue-800/50 hover:text-white'
                }`}
              >
                <Settings className="w-6 h-6" />
                <span className="font-medium">Settings</span>
              </button>
            </div>

            {/* Stats in Sidebar */}
            <div className="mt-8 p-4 bg-blue-800/30 rounded-2xl">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">5</div>
                <div className="text-blue-200 text-sm">Active Surveys</div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-center">
                <div>
                  <div className="text-lg font-semibold text-white">54</div>
                  <div className="text-blue-200 text-xs">Responses</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">82%</div>
                  <div className="text-blue-200 text-xs">Rate</div>
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