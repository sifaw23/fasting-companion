
import { format } from "date-fns";
import { Moon, Sun, CalendarDays } from "lucide-react";
import { generateRamadanCalendar } from "@/utils/prayerCalculations";
import { formatPrayerTime } from "@/utils/prayerCalculations";

export const RamadanCalendar = () => {
  const ramadanCalendar = generateRamadanCalendar();
  
  return (
    <div className="w-full animate-in">
      <div className="bg-white rounded-3xl overflow-hidden mb-6 border border-ramadan-100 shadow-md">
        <div className="bg-gradient-to-br from-ramadan-800 to-ramadan-950 p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium opacity-90">Ramadan 1445</h3>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20">
              <CalendarDays className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <h2 className="text-xl font-bold mb-2">Full Month Calendar</h2>
          <p className="text-sm opacity-80">
            View all fasting times for the month of Ramadan
          </p>
        </div>
      </div>
      
      <div className="space-y-4 mb-6">
        {ramadanCalendar.slice(0, 10).map((day) => (
          <div key={day.day} className="bg-white p-5 rounded-2xl border border-ramadan-100 shadow-md hover:shadow-lg transition-all card-glow">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ramadan-100 to-ramadan-200 flex items-center justify-center mr-4 border border-ramadan-50">
                  <span className="font-bold text-ramadan-800">{day.day}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-ramadan-800">{format(day.date, "EEEE")}</h4>
                  <p className="text-xs text-ramadan-600/80">{format(day.date, "MMMM d, yyyy")}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-ramadan-50 rounded-xl border border-ramadan-100/50 flex justify-between items-center">
                <div>
                  <p className="text-xs text-ramadan-600 mb-1 flex items-center">
                    <Moon className="w-3 h-3 mr-1" />
                    Suhoor ends
                  </p>
                  <p className="font-medium text-ramadan-800">{formatPrayerTime(day.suhoor)}</p>
                </div>
              </div>
              <div className="p-4 bg-ramadan-50 rounded-xl border border-ramadan-100/50 flex justify-between items-center">
                <div>
                  <p className="text-xs text-ramadan-600 mb-1 flex items-center">
                    <Sun className="w-3 h-3 mr-1" />
                    Iftar time
                  </p>
                  <p className="font-medium text-ramadan-800">{formatPrayerTime(day.iftar)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RamadanCalendar;
