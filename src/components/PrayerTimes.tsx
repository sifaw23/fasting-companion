
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Clock, Bell } from "lucide-react";
import { 
  formatPrayerTime, 
  getDefaultPrayerTimes, 
  getCurrentOrNextPrayer, 
  PRAYER_NAMES 
} from "@/utils/prayerCalculations";
import { cn } from "@/lib/utils";

export const PrayerTimes = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Get prayer times for today
  const prayerTimes = getDefaultPrayerTimes(currentDate);
  
  // Get current and next prayer
  const { current, next, timeRemaining } = getCurrentOrNextPrayer(prayerTimes);
  
  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="w-full animate-in">
      <div className="glass-card rounded-3xl overflow-hidden mb-6">
        <div className="bg-gradient-to-br from-ramadan-600 to-ramadan-800 p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium opacity-90">Next Prayer</h3>
            <span className="text-xs opacity-80">{format(currentDate, "EEEE, MMMM d")}</span>
          </div>
          
          <div className="flex justify-between items-end mt-2">
            <div>
              <h2 className="text-3xl font-semibold">{next}</h2>
              <p className="text-sm opacity-80">in {timeRemaining}</p>
            </div>
            <p className="text-2xl font-semibold">{formatPrayerTime(prayerTimes[next])}</p>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Today's Prayers</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-1" />
              <span>{format(currentTime, "h:mm a")}</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {PRAYER_NAMES.map((prayer) => {
              const time = prayerTimes[prayer];
              const isPast = time < currentTime;
              const isNext = prayer === next;
              const isCurrent = prayer === current;
              
              return (
                <div 
                  key={prayer}
                  className={cn(
                    "flex items-center justify-between p-3 rounded-xl transition-all",
                    isNext ? "bg-ramadan-50 border border-ramadan-100" : "",
                    isCurrent ? "bg-ramadan-50/50" : ""
                  )}
                >
                  <div className="flex items-center">
                    <div className={cn(
                      "w-2 h-2 rounded-full mr-3",
                      isPast ? "bg-green-500" : "bg-muted",
                      isNext ? "bg-ramadan-500" : ""
                    )} />
                    <span className={cn(
                      "font-medium",
                      isNext ? "text-ramadan-700" : ""
                    )}>
                      {prayer}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className={cn(
                      "text-sm font-medium",
                      isPast ? "text-muted-foreground" : "",
                      isNext ? "text-ramadan-700" : ""
                    )}>
                      {formatPrayerTime(time)}
                    </span>
                    
                    <button className={cn(
                      "ml-3 p-1.5 rounded-full transition-colors",
                      "hover:bg-ramadan-100"
                    )}>
                      <Bell className="w-3.5 h-3.5 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerTimes;
