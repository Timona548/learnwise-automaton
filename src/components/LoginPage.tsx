import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, User, Users } from "lucide-react";

interface LoginPageProps {
  onLogin: (role: 'facilitator' | 'student') => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
    institutionCode: ''
  });

  const handleLogin = (role: 'facilitator' | 'student') => {
    // In a real app, this would validate credentials
    onLogin(role);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-edu-blue-light text-edu-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            LearnWise EMS
          </div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-muted-foreground mt-2">
            Sign in to access your educational dashboard
          </p>
        </div>

        <Card className="shadow-strong border-0">
          <CardHeader className="pb-4">
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Choose your role and enter your credentials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="student" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Student
                </TabsTrigger>
                <TabsTrigger value="facilitator" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Facilitator
                </TabsTrigger>
              </TabsList>

              <TabsContent value="student" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="student-username">Username</Label>
                  <Input 
                    id="student-username" 
                    placeholder="Enter your username"
                    value={loginData.username}
                    onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-password">Password</Label>
                  <Input 
                    id="student-password" 
                    type="password" 
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="institution-code">Institution Code</Label>
                  <Input 
                    id="institution-code" 
                    placeholder="Enter institution code"
                    value={loginData.institutionCode}
                    onChange={(e) => setLoginData({...loginData, institutionCode: e.target.value})}
                  />
                </div>
                <Button 
                  className="w-full" 
                  variant="default"
                  onClick={() => handleLogin('student')}
                >
                  Sign In as Student
                </Button>
              </TabsContent>

              <TabsContent value="facilitator" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="facilitator-username">Username</Label>
                  <Input 
                    id="facilitator-username" 
                    placeholder="Enter your username"
                    value={loginData.username}
                    onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="facilitator-password">Password</Label>
                  <Input 
                    id="facilitator-password" 
                    type="password" 
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="facilitator-institution">Institution Code</Label>
                  <Input 
                    id="facilitator-institution" 
                    placeholder="Enter institution code"
                    value={loginData.institutionCode}
                    onChange={(e) => setLoginData({...loginData, institutionCode: e.target.value})}
                  />
                </div>
                <Button 
                  className="w-full" 
                  variant="success"
                  onClick={() => handleLogin('facilitator')}
                >
                  Sign In as Facilitator
                </Button>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Need help? Contact your institution administrator
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;