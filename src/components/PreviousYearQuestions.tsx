import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Download, Eye, BookOpen } from "lucide-react";

const subjects = [
  { name: "Physics", papers: 8, color: "bg-blue-500" },
  { name: "Chemistry", papers: 8, color: "bg-green-500" },
  { name: "Mathematics", papers: 8, color: "bg-purple-500" },
  { name: "Computer Science", papers: 8, color: "bg-orange-500" },
  { name: "English", papers: 8, color: "bg-pink-500" },
  { name: "Biology", papers: 8, color: "bg-teal-500" },
];

const years = ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018"];

const PreviousYearQuestions = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>("All");
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Previous Year Questions</h2>
        <p className="text-muted-foreground">Access ISC question papers from 2018-2025</p>
      </div>

      {/* Filters */}
      <Card className="p-6 gradient-card">
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search questions, topics, or subjects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={selectedSubject === "All" ? "default" : "outline"}
              className="cursor-pointer transition-smooth"
              onClick={() => setSelectedSubject("All")}
            >
              All Subjects
            </Badge>
            {subjects.map((subject) => (
              <Badge
                key={subject.name}
                variant={selectedSubject === subject.name ? "default" : "outline"}
                className="cursor-pointer transition-smooth"
                onClick={() => setSelectedSubject(subject.name)}
              >
                {subject.name}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge
              variant={selectedYear === "All" ? "secondary" : "outline"}
              className="cursor-pointer transition-smooth"
              onClick={() => setSelectedYear("All")}
            >
              All Years
            </Badge>
            {years.map((year) => (
              <Badge
                key={year}
                variant={selectedYear === year ? "secondary" : "outline"}
                className="cursor-pointer transition-smooth"
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </Badge>
            ))}
          </div>
        </div>
      </Card>

      {/* Subject Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <Card key={subject.name} className="study-card p-6 bg-card border hover:border-primary/30">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${subject.color}`}></div>
                  <h3 className="font-semibold text-foreground">{subject.name}</h3>
                </div>
                <Badge variant="secondary">{subject.papers} papers</Badge>
              </div>

              <div className="space-y-2">
                {years.slice(0, 3).map((year) => (
                  <div key={year} className="flex items-center justify-between p-2 rounded bg-muted/50 hover:bg-muted transition-smooth">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{subject.name} {year}</span>
                    </div>
                    <div className="flex space-x-1">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="w-full" size="sm">
                View All {subject.name} Papers
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PreviousYearQuestions;