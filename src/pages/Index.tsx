import { useState } from "react";
import { FileText, BookOpen, Brain, GraduationCap, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import StudyCard from "@/components/StudyCard";
import PreviousYearQuestions from "@/components/PreviousYearQuestions";
import SpecimenPapers from "@/components/SpecimenPapers";
import QuizSection from "@/components/QuizSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'previous' | 'specimen' | 'quiz'>('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'previous':
        return <PreviousYearQuestions />;
      case 'specimen':
        return <SpecimenPapers />;
      case 'quiz':
        return <QuizSection />;
      default:
        return (
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="text-center space-y-6 py-12">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  ISC Study <span className="text-transparent bg-clip-text gradient-primary">Hub</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Your complete companion for Class 12 ISC excellence. Access years of papers, practice with quizzes, and achieve your best results.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="gradient-primary border-0 shadow-glow"
                  onClick={() => setActiveSection('quiz')}
                >
                  <Brain className="h-5 w-5 mr-2" />
                  Start Learning
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => setActiveSection('previous')}
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Browse Papers
                </Button>
              </div>
            </section>

            {/* Stats Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="gradient-card p-6 text-center">
                <div className="space-y-2">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">48+</h3>
                  <p className="text-muted-foreground">Previous Year Papers</p>
                </div>
              </Card>
              
              <Card className="gradient-card p-6 text-center">
                <div className="space-y-2">
                  <div className="p-3 bg-secondary/10 rounded-full w-fit mx-auto">
                    <BookOpen className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">12+</h3>
                  <p className="text-muted-foreground">Specimen Papers</p>
                </div>
              </Card>
              
              <Card className="gradient-card p-6 text-center">
                <div className="space-y-2">
                  <div className="p-3 bg-success/10 rounded-full w-fit mx-auto">
                    <Brain className="h-6 w-6 text-success" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">200+</h3>
                  <p className="text-muted-foreground">Interactive Quizzes</p>
                </div>
              </Card>
            </section>

            {/* Main Features */}
            <section className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-foreground">Everything You Need to Excel</h2>
                <p className="text-muted-foreground">Comprehensive resources for ISC Class 12 success</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StudyCard
                  title="Previous Year Questions"
                  description="Complete collection of ISC papers from 2018-2025. Practice with real exam questions and understand patterns."
                  icon={<FileText className="h-6 w-6" />}
                  count="48+ papers"
                  onClick={() => setActiveSection('previous')}
                  gradient={true}
                />
                
                <StudyCard
                  title="Specimen Papers"
                  description="Latest ISC specimen papers with detailed solutions. Perfect for understanding the new exam format."
                  icon={<BookOpen className="h-6 w-6" />}
                  count="12+ papers"
                  onClick={() => setActiveSection('specimen')}
                />
                
                <StudyCard
                  title="Chapter-wise Quizzes"
                  description="Interactive quizzes for every chapter. Track your progress and identify areas for improvement."
                  icon={<Brain className="h-6 w-6" />}
                  count="200+ quizzes"
                  onClick={() => setActiveSection('quiz')}
                />
              </div>
            </section>

            {/* Subjects */}
            <section className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-foreground">All ISC Subjects Covered</h2>
                <p className="text-muted-foreground">Comprehensive study material for every subject</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { name: "Physics", color: "bg-blue-500" },
                  { name: "Chemistry", color: "bg-green-500" },
                  { name: "Mathematics", color: "bg-purple-500" },
                  { name: "Computer Science", color: "bg-orange-500" },
                  { name: "English", color: "bg-pink-500" },
                  { name: "Biology", color: "bg-teal-500" },
                ].map((subject) => (
                  <Card key={subject.name} className="study-card p-4 bg-card text-center">
                    <div className="space-y-2">
                      <div className={`w-8 h-8 ${subject.color} rounded-lg mx-auto`}></div>
                      <p className="font-medium text-foreground text-sm">{subject.name}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {activeSection !== 'home' && (
          <Button 
            variant="ghost" 
            onClick={() => setActiveSection('home')}
            className="mb-6"
          >
            ← Back to Home
          </Button>
        )}
        
        {renderActiveSection()}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-semibold text-foreground">ISC Study Hub</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering Class 12 students with comprehensive ISC resources
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <span>© 2024 ISC Study Hub</span>
              <span>•</span>
              <span>Made for Students</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
