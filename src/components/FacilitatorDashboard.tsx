import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  BookOpen, 
  Award, 
  BarChart3, 
  Upload, 
  CheckCircle, 
  Calendar,
  FileText,
  LogOut
} from "lucide-react";

interface FacilitatorDashboardProps {
  onLogout: () => void;
}

const FacilitatorDashboard = ({ onLogout }: FacilitatorDashboardProps) => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-white shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">LearnWise EMS</h1>
              <p className="text-sm text-muted-foreground">Facilitator Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-edu-green-light text-edu-green">
              Dr. Sarah Johnson
            </Badge>
            <Button variant="ghost" size="sm" onClick={onLogout}>
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-medium border-0">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-edu-blue-light rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-edu-blue" />
                </div>
                <div>
                  <p className="text-2xl font-bold">147</p>
                  <p className="text-sm text-muted-foreground">Active Students</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-edu-green-light rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-edu-green" />
                </div>
                <div>
                  <p className="text-2xl font-bold">89%</p>
                  <p className="text-sm text-muted-foreground">Avg Attendance</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-edu-blue-light rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-edu-blue" />
                </div>
                <div>
                  <p className="text-2xl font-bold">24</p>
                  <p className="text-sm text-muted-foreground">Materials Uploaded</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-edu-green-light rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-edu-green" />
                </div>
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Quizzes Generated</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="content">Content Management</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="quizzes">Quiz Generation</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    Upload Learning Materials
                  </CardTitle>
                  <CardDescription>
                    Add weekly content and resources for your students
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Drag and drop files or click to browse
                    </p>
                    <Button variant="outline">Choose Files</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle>Recent Uploads</CardTitle>
                  <CardDescription>
                    Your latest learning materials
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Week 12 - Database Design.pdf", date: "2 hours ago" },
                      { name: "SQL Fundamentals Presentation.pptx", date: "1 day ago" },
                      { name: "Assignment 3 - ERD Design.docx", date: "3 days ago" },
                    ].map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="w-4 h-4 text-edu-blue" />
                          <div>
                            <p className="text-sm font-medium">{file.name}</p>
                            <p className="text-xs text-muted-foreground">{file.date}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">View</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="attendance" className="space-y-6">
            <Card className="shadow-medium border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Attendance Management
                </CardTitle>
                <CardDescription>
                  Generate attendance links and view real-time attendance data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-4">Generate Attendance Link</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Class Session</label>
                        <p className="text-sm text-muted-foreground">Database Systems - Week 12</p>
                      </div>
                      <Button variant="success" className="w-full">
                        Generate Attendance Link
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4">Today's Attendance</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Present</span>
                        <span className="text-sm font-medium text-edu-green">132 students</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Absent</span>
                        <span className="text-sm font-medium text-destructive">15 students</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Attendance Rate</span>
                        <span className="text-sm font-medium">89.8%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quizzes" className="space-y-6">
            <Card className="shadow-medium border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  AI Quiz Generation
                </CardTitle>
                <CardDescription>
                  Automatically generate quizzes based on your uploaded materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-edu-blue-light rounded-lg">
                    <h4 className="font-medium text-edu-blue mb-2">Ready for Quiz Generation</h4>
                    <p className="text-sm text-edu-blue mb-4">
                      Week 12 materials have been uploaded. Generate adaptive quiz now.
                    </p>
                    <Button variant="default">Generate Quiz</Button>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-4">Recent Quizzes</h4>
                    <div className="space-y-3">
                      {[
                        { title: "Week 11 - Database Normalization", questions: 15, completion: "94%" },
                        { title: "Week 10 - SQL Joins", questions: 12, completion: "87%" },
                        { title: "Week 9 - Entity Relationships", questions: 18, completion: "91%" },
                      ].map((quiz, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium">{quiz.title}</p>
                            <p className="text-sm text-muted-foreground">{quiz.questions} questions</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">{quiz.completion} completed</p>
                            <Button variant="ghost" size="sm">View Results</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="shadow-medium border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Learning Analytics
                </CardTitle>
                <CardDescription>
                  Track student progress and performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Class Performance Overview</h4>
                    <div className="h-40 bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">Performance Chart</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Attendance Trends</h4>
                    <div className="h-40 bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">Attendance Chart</p>
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

export default FacilitatorDashboard;