import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Award, 
  CheckCircle, 
  Calendar,
  FileText,
  Clock,
  Download,
  LogOut,
  GraduationCap
} from "lucide-react";

interface StudentDashboardProps {
  onLogout: () => void;
}

const StudentDashboard = ({ onLogout }: StudentDashboardProps) => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-white shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">LearnWise EMS</h1>
              <p className="text-sm text-muted-foreground">Student Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-edu-blue-light text-edu-blue">
              Alex Thompson
            </Badge>
            <Button variant="ghost" size="sm" onClick={onLogout}>
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-medium border-0">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-edu-green-light rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-edu-green" />
                </div>
                <div>
                  <p className="text-2xl font-bold">92%</p>
                  <p className="text-sm text-muted-foreground">Attendance Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-edu-blue-light rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-edu-blue" />
                </div>
                <div>
                  <p className="text-2xl font-bold">85%</p>
                  <p className="text-sm text-muted-foreground">Quiz Average</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-edu-green-light rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-edu-green" />
                </div>
                <div>
                  <p className="text-2xl font-bold">18</p>
                  <p className="text-sm text-muted-foreground">Materials Accessed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-edu-blue-light rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-edu-blue" />
                </div>
                <div>
                  <p className="text-2xl font-bold">45h</p>
                  <p className="text-sm text-muted-foreground">Study Time</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="materials" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="materials">Learning Materials</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="materials" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Recent Materials
                  </CardTitle>
                  <CardDescription>
                    Latest learning resources from your facilitators
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { 
                        name: "Week 12 - Database Design", 
                        type: "PDF", 
                        size: "2.4 MB",
                        date: "2 hours ago",
                        downloaded: true 
                      },
                      { 
                        name: "SQL Fundamentals Presentation", 
                        type: "PPTX", 
                        size: "5.8 MB",
                        date: "1 day ago",
                        downloaded: false 
                      },
                      { 
                        name: "Assignment 3 - ERD Design", 
                        type: "DOCX", 
                        size: "1.2 MB",
                        date: "3 days ago",
                        downloaded: true 
                      },
                    ].map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-edu-blue-light rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-edu-blue" />
                          </div>
                          <div>
                            <p className="font-medium">{file.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {file.type} • {file.size} • {file.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {file.downloaded && (
                            <CheckCircle className="w-4 h-4 text-edu-green" />
                          )}
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle>Study Progress</CardTitle>
                  <CardDescription>
                    Your weekly learning progress
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { week: "Week 12", progress: 75, status: "In Progress" },
                      { week: "Week 11", progress: 100, status: "Completed" },
                      { week: "Week 10", progress: 100, status: "Completed" },
                    ].map((week, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{week.week}</span>
                          <Badge 
                            variant={week.status === "Completed" ? "default" : "secondary"}
                            className={week.status === "Completed" ? "bg-edu-green text-white" : ""}
                          >
                            {week.status}
                          </Badge>
                        </div>
                        <Progress value={week.progress} className="h-2" />
                        <p className="text-sm text-muted-foreground">{week.progress}% complete</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="attendance" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Mark Attendance
                  </CardTitle>
                  <CardDescription>
                    Submit your attendance for today's class
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-edu-green-light rounded-lg text-center">
                      <CheckCircle className="w-8 h-8 text-edu-green mx-auto mb-2" />
                      <p className="font-medium text-edu-green">Attendance Submitted</p>
                      <p className="text-sm text-edu-green mt-1">
                        Code: #ATT-2024-001
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">
                        Verification code sent to your email
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle>Attendance History</CardTitle>
                  <CardDescription>
                    Your recent attendance record
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { date: "Today", status: "Present", time: "09:00 AM" },
                      { date: "Yesterday", status: "Present", time: "09:15 AM" },
                      { date: "Dec 18", status: "Present", time: "08:55 AM" },
                      { date: "Dec 17", status: "Absent", time: "-" },
                      { date: "Dec 16", status: "Present", time: "09:10 AM" },
                    ].map((record, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{record.date}</p>
                          <p className="text-sm text-muted-foreground">{record.time}</p>
                        </div>
                        <Badge 
                          variant={record.status === "Present" ? "default" : "destructive"}
                          className={record.status === "Present" ? "bg-edu-green text-white" : ""}
                        >
                          {record.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="quizzes" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Available Quizzes
                  </CardTitle>
                  <CardDescription>
                    Complete your weekly assessments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border-2 border-edu-orange rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Week 12 Quiz - Database Design</h4>
                        <Badge variant="secondary" className="bg-edu-orange text-white">Due Soon</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        15 questions • 30 minutes • Due: Dec 22, 11:59 PM
                      </p>
                      <Button variant="default" className="w-full bg-edu-orange hover:bg-edu-orange/90 text-white">
                        Start Quiz
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle>Quiz Results</CardTitle>
                  <CardDescription>
                    Your recent quiz performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: "Week 11 - Database Normalization", score: 88, total: 100 },
                      { title: "Week 10 - SQL Joins", score: 92, total: 100 },
                      { title: "Week 9 - Entity Relationships", score: 76, total: 100 },
                    ].map((quiz, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{quiz.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {quiz.score}/{quiz.total} points
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-edu-green">
                            {Math.round((quiz.score / quiz.total) * 100)}%
                          </p>
                          <Button variant="ghost" size="sm">View Details</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <Card className="shadow-medium border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Learning Progress
                </CardTitle>
                <CardDescription>
                  Track your academic performance and achievements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Overall Performance</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Course Progress</span>
                          <span className="text-sm">85%</span>
                        </div>
                        <Progress value={85} className="h-3" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Quiz Average</span>
                          <span className="text-sm">85%</span>
                        </div>
                        <Progress value={85} className="h-3" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Attendance Rate</span>
                          <span className="text-sm">92%</span>
                        </div>
                        <Progress value={92} className="h-3" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Recent Achievements</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-edu-green-light rounded-lg">
                        <Award className="w-6 h-6 text-edu-green" />
                        <div>
                          <p className="font-medium text-edu-green">Perfect Attendance</p>
                          <p className="text-sm text-edu-green">Week 11</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-edu-blue-light rounded-lg">
                        <Award className="w-6 h-6 text-edu-blue" />
                        <div>
                          <p className="font-medium text-edu-blue">High Performer</p>
                          <p className="text-sm text-edu-blue">Quiz Score &gt; 90%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;