
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { generateRamadanCalendar } from "@/utils/prayerCalculations";
import { formatPrayerTime } from "@/utils/prayerCalculations";

export const RamadanCalendar = () => {
  const ramadanCalendar = generateRamadanCalendar();
  
  return (
    <div className="w-full animate-in">
      <div className="glass-card rounded-3xl overflow-hidden mb-6">
        <div className="bg-gradient-to-br from-ramadan-800 to-ramadan-950 p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium opacity-90">Ramadan 1445</h3>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20">
              <CalendarIcon className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <h2 className="text-xl font-semibold mb-2">Full Month Calendar</h2>
          <p className="text-sm opacity-80">
            View all fasting times for the month of Ramadan
          </p>
        </div>
      </div>
      
      <div className="space-y-4 mb-6">
        {ramadanCalendar.slice(0, 10).map((day) => (
          <div key={day.day} className="glass-card p-4 rounded-2xl hover-scale">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-ramadan-50 flex items-center justify-center mr-3">
                  <span className="font-medium text-ramadan-700">{day.day}</span>
                </div>
                <div>
                  <h4 className="font-medium">{format(day.date, "EEEE")}</h4>
                  <p className="text-xs text-muted-foreground">{format(day.date, "MMMM d, yyyy")}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-3 bg-ramadan-50 rounded-xl">
                <p className="text-xs text-muted-foreground mb-1">Suhoor ends</p>
                <p className="font-medium text-ramadan-700">{formatPrayerTime(day.suhoor)}</p>
              </div>
              <div className="p-3 bg-ramadan-50 rounded-xl">
                <p className="text-xs text-muted-foreground mb-1">Iftar time</p>
                <p className="font-medium text-ramadan-700">{formatPrayerTime(day.iftar)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RamadanCalendar;
