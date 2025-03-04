
import { Header } from "@/components/Header";
import { FastingSchedule } from "@/components/FastingSchedule";
import { RamadanCalendar } from "@/components/RamadanCalendar";
import { useState } from "react";
import { Calendar, List } from "lucide-react";
import { cn } from "@/lib/utils";

const Schedule = () => {
  const [activeView, setActiveView] = useState<"schedule" | "calendar">("schedule");
  
  return (
    <div className="min-h-screen pb-20">
      <Header 
        title="Fasting Schedule" 
        subtitle="Track your Ramadan fasting times"
      />
      
      <main className="container max-w-md mx-auto px-4 py-6">
        <div className="flex justify-center mb-6">
          <div className="bg-secondary rounded-full p-1 flex">
            <button
              className={cn(
                "flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                activeView === "schedule" ? "bg-white shadow-sm" : "text-muted-foreground"
              )}
              onClick={() => setActiveView("schedule")}
            >
              <List className="w-4 h-4 mr-2" />
              Schedule
            </button>
            <button
              className={cn(
                "flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                activeView === "calendar" ? "bg-white shadow-sm" : "text-muted-foreground"
              )}
              onClick={() => setActiveView("calendar")}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Calendar
            </button>
          </div>
        </div>
        
        {activeView === "schedule" ? <FastingSchedule /> : <RamadanCalendar />}
      </main>
    </div>
  );
};

export default Schedule;
