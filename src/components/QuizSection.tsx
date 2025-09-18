import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Clock, Trophy, Target, Play, RotateCcw } from "lucide-react";

const subjects = [
  {
    name: "Physics",
    chapters: 12,
    totalQuizzes: 48,
    completed: 15,
    avgScore: 78,
    color: "bg-blue-500",
    recentQuizzes: [
      { name: "Mechanics - Motion", questions: 15, score: 85, time: "12 min" },
      { name: "Wave Optics", questions: 10, score: 70, time: "8 min" },
      { name: "Thermodynamics", questions: 20, score: 92, time: "15 min" },
    ]
  },
  {
    name: "Chemistry", 
    chapters: 10,
    totalQuizzes: 40,
    completed: 8,
    avgScore: 82,
    color: "bg-green-500",
    recentQuizzes: [
      { name: "Organic Chemistry - Aldehydes", questions: 12, score: 88, time: "10 min" },
      { name: "Chemical Bonding", questions: 15, score: 76, time: "12 min" },
    ]
  },
  {
    name: "Mathematics",
    chapters: 14,
    totalQuizzes: 56,
    completed: 22,
    avgScore: 75,
    color: "bg-purple-500",
    recentQuizzes: [
      { name: "Calculus - Derivatives", questions: 18, score: 90, time: "16 min" },
      { name: "Probability", questions: 10, score: 65, time: "8 min" },
      { name: "Matrices", questions: 12, score: 80, time: "10 min" },
    ]
  },
];

const QuizSection = () => {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Interactive Quizzes</h2>
        <p className="text-muted-foreground">Test your knowledge chapter-wise</p>
      </div>

      {/* Subject Selection */}
      <div className="flex flex-wrap gap-4 justify-center">
        {subjects.map((subject) => (
          <Button
            key={subject.name}
            variant={selectedSubject.name === subject.name ? "default" : "outline"}
            className="flex items-center space-x-2 transition-smooth"
            onClick={() => setSelectedSubject(subject)}
          >
            <div className={`w-3 h-3 rounded-full ${subject.color}`}></div>
            <span>{subject.name}</span>
          </Button>
        ))}
      </div>

      {/* Subject Overview */}
      <Card className="gradient-card p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center space-y-2">
            <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{selectedSubject.chapters}</p>
              <p className="text-sm text-muted-foreground">Chapters</p>
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="p-3 bg-secondary/10 rounded-full w-fit mx-auto">
              <Target className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{selectedSubject.totalQuizzes}</p>
              <p className="text-sm text-muted-foreground">Total Quizzes</p>
            </div>
          </div>

          <div className="text-center space-y-2">
            <div className="p-3 bg-success/10 rounded-full w-fit mx-auto">
              <Trophy className="h-6 w-6 text-success" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{selectedSubject.completed}</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
          </div>

          <div className="text-center space-y-2">
            <div className="p-3 bg-warning/10 rounded-full w-fit mx-auto">
              <RotateCcw className="h-6 w-6 text-warning" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{selectedSubject.avgScore}%</p>
              <p className="text-sm text-muted-foreground">Avg Score</p>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="text-foreground font-medium">
              {selectedSubject.completed} of {selectedSubject.totalQuizzes} completed
            </span>
          </div>
          <Progress 
            value={(selectedSubject.completed / selectedSubject.totalQuizzes) * 100} 
            className="h-2"
          />
        </div>
      </Card>

      {/* Recent Quizzes */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Recent {selectedSubject.name} Quizzes</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectedSubject.recentQuizzes.map((quiz, index) => (
            <Card key={index} className="study-card p-4 bg-card border hover:border-primary/30">
              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="font-medium text-foreground">{quiz.name}</h4>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>{quiz.questions} questions</span>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {quiz.time}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Score</span>
                    <span className={`font-medium ${
                      quiz.score >= 80 ? 'text-success' : 
                      quiz.score >= 60 ? 'text-warning' : 'text-destructive'
                    }`}>
                      {quiz.score}%
                    </span>
                  </div>
                  <Progress value={quiz.score} className="h-1" />
                </div>

                <Button className="w-full" size="sm" variant="outline">
                  <Play className="h-4 w-4 mr-2" />
                  Retake Quiz
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Practice */}
      <Card className="p-6 bg-primary/5 border-primary/20">
        <div className="text-center space-y-4">
          <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto">
            <Brain className="h-8 w-8 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">Quick Practice Mode</h3>
            <p className="text-muted-foreground">
              Random questions from all chapters for rapid revision
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <Button className="gradient-primary border-0">
              <Play className="h-4 w-4 mr-2" />
              Start Quick Quiz
            </Button>
            <Button variant="outline">
              <Target className="h-4 w-4 mr-2" />
              Custom Quiz
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QuizSection;