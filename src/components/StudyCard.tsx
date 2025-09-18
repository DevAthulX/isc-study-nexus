import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface StudyCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  count?: string;
  onClick: () => void;
  gradient?: boolean;
}

const StudyCard = ({ title, description, icon, count, onClick, gradient = false }: StudyCardProps) => {
  return (
    <Card 
      className={`study-card p-6 cursor-pointer h-full ${
        gradient ? 'gradient-card' : 'bg-card'
      } border border-border hover:border-primary/30`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${gradient ? 'gradient-primary' : 'bg-primary/10'}`}>
          <div className={gradient ? 'text-primary-foreground' : 'text-primary'}>
            {icon}
          </div>
        </div>
        {count && (
          <div className="text-sm font-semibold text-muted-foreground bg-muted px-2 py-1 rounded-full">
            {count}
          </div>
        )}
      </div>
      
      <div className="space-y-2 mb-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
      
      <Button variant="ghost" size="sm" className="group p-0 h-auto text-primary hover:text-primary">
        Explore
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </Card>
  );
};

export default StudyCard;