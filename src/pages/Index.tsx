import { useState } from "react";
import Hero from "@/components/Hero";
import LoginPage from "@/components/LoginPage";
import FacilitatorDashboard from "@/components/FacilitatorDashboard";
import StudentDashboard from "@/components/StudentDashboard";

type AppState = 'landing' | 'login' | 'facilitator' | 'student';

const Index = () => {
  const [currentView, setCurrentView] = useState<AppState>('landing');

  const handleGetStarted = () => {
    setCurrentView('login');
  };

  const handleLogin = (role: 'facilitator' | 'student') => {
    setCurrentView(role);
  };

  const handleLogout = () => {
    setCurrentView('landing');
  };

  if (currentView === 'login') {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (currentView === 'facilitator') {
    return <FacilitatorDashboard onLogout={handleLogout} />;
  }

  if (currentView === 'student') {
    return <StudentDashboard onLogout={handleLogout} />;
  }

  return <Hero onGetStarted={handleGetStarted} />;
};

export default Index;
