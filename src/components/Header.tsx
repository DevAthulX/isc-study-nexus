import { GraduationCap, BookOpen, FileText, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-card border-b shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">ISC Study Hub</h1>
              <p className="text-sm text-muted-foreground">Class 12 Excellence</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Previous Papers</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Specimen Papers</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <Brain className="h-4 w-4" />
              <span>Quizzes</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;