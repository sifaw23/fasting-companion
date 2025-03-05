
import { Header } from "@/components/Header";
import { FastingSchedule } from "@/components/FastingSchedule";
import { RamadanCalendar } from "@/components/RamadanCalendar";
import { useState } from "react";
import { Calendar, List } from "lucide-react";
import { cn } from "@/lib/utils";

const Schedule = () => {
  const [activeView, setActiveView] = useState<"schedule" | "calendar">("schedule");
  
  return (
    <div className="min-h-screen pb-20 pattern-dots">
      <div className="absolute inset-0 gradient-blur opacity-40"></div>
      
      <Header 
        title="Fasting Schedule" 
        subtitle="Track your Ramadan fasting times"
      />
      
      <main className="container max-w-md mx-auto px-5 py-6 relative z-10">
        <div className="bg-white rounded-2xl p-2 mb-6 flex justify-center shadow-md border border-ramadan-100">
          <div className="bg-ramadan-50/70 rounded-xl p-1 flex w-full">
            <button
              className={cn(
                "flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all w-1/2",
                activeView === "schedule" 
                  ? "bg-white shadow-sm text-ramadan-800 border border-ramadan-100" 
                  : "text-ramadan-700"
              )}
              onClick={() => setActiveView("schedule")}
            >
              <List className="w-4 h-4 mr-2" />
              Schedule
            </button>
            <button
              className={cn(
                "flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all w-1/2",
                activeView === "calendar" 
                  ? "bg-white shadow-sm text-ramadan-800 border border-ramadan-100" 
                  : "text-ramadan-700"
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
