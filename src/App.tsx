import { useState } from 'react';
import LandingPage from './components/LandingPage';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import AdminDashboard from './components/AdminDashboard';
import FeaturesPage from './components/FeaturesPage';
import SurveysPage from './components/SurveysPage';
import AnalyticsPage from './components/AnalyticsPage';
import PricingPage from './components/PricingPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import GetStartedPage from './components/GetStartedPage';

type PageType = 'landing' | 'student' | 'teacher' | 'admin' | 'features' | 'surveys' | 'analytics' | 'pricing' | 'about' | 'contact' | 'get-started';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'student':
        return <StudentDashboard onNavigate={setCurrentPage} />;
      case 'teacher':
        return <TeacherDashboard onNavigate={setCurrentPage} />;
      case 'admin':
        return <AdminDashboard onNavigate={setCurrentPage} />;
      case 'features':
        return <FeaturesPage onNavigate={setCurrentPage} />;
      case 'surveys':
        return <SurveysPage onNavigate={setCurrentPage} />;
      case 'analytics':
        return <AnalyticsPage onNavigate={setCurrentPage} />;
      case 'pricing':
        return <PricingPage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} />;
      case 'get-started':
        return <GetStartedPage onNavigate={setCurrentPage} />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {renderPage()}
    </div>
  );
}