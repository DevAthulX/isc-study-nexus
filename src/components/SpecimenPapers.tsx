import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Eye, Star, Clock } from "lucide-react";

const specimenPapers = [
  {
    subject: "Physics",
    title: "ISC Physics Specimen Paper 2025",
    duration: "3 hours",
    marks: "70 marks",
    difficulty: "High",
    topics: ["Mechanics", "Thermodynamics", "Waves", "Electricity"],
    featured: true,
  },
  {
    subject: "Chemistry",
    title: "ISC Chemistry Specimen Paper 2025",
    duration: "3 hours",
    marks: "70 marks",
    difficulty: "Medium",
    topics: ["Organic Chemistry", "Physical Chemistry", "Inorganic Chemistry"],
    featured: true,
  },
  {
    subject: "Mathematics",
    title: "ISC Mathematics Specimen Paper 2025",
    duration: "3 hours",
    marks: "100 marks",
    difficulty: "High",
    topics: ["Calculus", "Algebra", "Geometry", "Statistics"],
    featured: false,
  },
  {
    subject: "Computer Science",
    title: "ISC Computer Science Specimen Paper 2025",
    duration: "3 hours",
    marks: "70 marks",
    difficulty: "Medium",
    topics: ["Programming", "Data Structures", "Database", "Networking"],
    featured: false,
  },
  {
    subject: "English",
    title: "ISC English Specimen Paper 2025",
    duration: "3 hours",
    marks: "100 marks",
    difficulty: "Medium",
    topics: ["Literature", "Language", "Composition", "Comprehension"],
    featured: false,
  },
  {
    subject: "Biology",
    title: "ISC Biology Specimen Paper 2025",
    duration: "3 hours",
    marks: "70 marks",
    difficulty: "Medium",
    topics: ["Botany", "Zoology", "Ecology", "Genetics"],
    featured: false,
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "High":
      return "bg-red-500/10 text-red-600 border-red-200";
    case "Medium":
      return "bg-yellow-500/10 text-yellow-600 border-yellow-200";
    case "Easy":
      return "bg-green-500/10 text-green-600 border-green-200";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const SpecimenPapers = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Specimen Papers</h2>
        <p className="text-muted-foreground">Latest ISC specimen papers for practice</p>
      </div>

      {/* Featured Papers */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground flex items-center">
          <Star className="h-5 w-5 text-warning mr-2" />
          Featured Papers
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specimenPapers.filter(paper => paper.featured).map((paper, index) => (
            <Card key={index} className="study-card p-6 gradient-card border hover:border-primary/30">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <Badge className="gradient-primary text-primary-foreground border-0">
                      {paper.subject}
                    </Badge>
                    <h4 className="font-semibold text-foreground">{paper.title}</h4>
                  </div>
                  <div className="flex space-x-1">
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {paper.duration}
                  </div>
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    {paper.marks}
                  </div>
                </div>

                <div className="space-y-2">
                  <Badge className={getDifficultyColor(paper.difficulty)}>
                    {paper.difficulty} Level
                  </Badge>
                  <div className="flex flex-wrap gap-1">
                    {paper.topics.map((topic, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full gradient-primary border-0">
                  Start Practice
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* All Papers */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">All Specimen Papers</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {specimenPapers.map((paper, index) => (
            <Card key={index} className="study-card p-4 bg-card border hover:border-primary/30">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{paper.subject}</Badge>
                  <Badge className={getDifficultyColor(paper.difficulty)}>
                    {paper.difficulty}
                  </Badge>
                </div>

                <div className="space-y-1">
                  <h4 className="font-medium text-sm text-foreground line-clamp-2">
                    {paper.title}
                  </h4>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{paper.duration}</span>
                    <span>{paper.marks}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Button size="sm" variant="outline" className="flex-1 mr-2">
                    Practice
                  </Button>
                  <div className="flex space-x-1">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Eye className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Download className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecimenPapers;