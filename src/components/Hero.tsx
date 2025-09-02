import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Award, CheckCircle, Mail, BarChart3 } from "lucide-react";

interface HeroProps {
  onGetStarted?: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-edu-blue-light text-edu-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
            <GraduationCap className="w-4 h-4" />
            Transform Your Institution's Learning Experience
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            LearnWise EMS
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A comprehensive education management system that automates attendance tracking, 
            generates intelligent quizzes, and streamlines content delivery for modern institutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg" onClick={onGetStarted}>
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything Your Institution Needs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-medium hover:shadow-strong transition-all duration-300 border-0">
              <CardHeader>
                <div className="w-12 h-12 bg-edu-blue-light rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-edu-blue" />
                </div>
                <CardTitle>Smart User Management</CardTitle>
                <CardDescription>
                  Auto-generate unique usernames and manage roles for facilitators and students
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all duration-300 border-0">
              <CardHeader>
                <div className="w-12 h-12 bg-edu-green-light rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-edu-green" />
                </div>
                <CardTitle>Digital Attendance</CardTitle>
                <CardDescription>
                  Automated attendance tracking with email verification codes for each class
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all duration-300 border-0">
              <CardHeader>
                <div className="w-12 h-12 bg-edu-blue-light rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-edu-blue" />
                </div>
                <CardTitle>Content Management</CardTitle>
                <CardDescription>
                  Upload and organize weekly learning materials and resources effortlessly
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all duration-300 border-0">
              <CardHeader>
                <div className="w-12 h-12 bg-edu-green-light rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-edu-green" />
                </div>
                <CardTitle>AI Quiz Generation</CardTitle>
                <CardDescription>
                  Automatically generate adaptive quizzes based on uploaded learning materials
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all duration-300 border-0">
              <CardHeader>
                <div className="w-12 h-12 bg-edu-blue-light rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-edu-blue" />
                </div>
                <CardTitle>Email Integration</CardTitle>
                <CardDescription>
                  Automated email notifications and attendance verification codes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all duration-300 border-0">
              <CardHeader>
                <div className="w-12 h-12 bg-edu-green-light rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-edu-green" />
                </div>
                <CardTitle>Real-time Analytics</CardTitle>
                <CardDescription>
                  Track student progress and attendance with detailed reporting
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-primary text-white border-0 shadow-strong">
            <CardContent className="pt-12 pb-12">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Institution?
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Join hundreds of institutions already using LearnWise EMS to enhance their educational experience.
              </p>
              <Button variant="outline" size="lg" className="bg-white text-edu-blue hover:bg-white/90" onClick={onGetStarted}>
                Get Started Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Hero;