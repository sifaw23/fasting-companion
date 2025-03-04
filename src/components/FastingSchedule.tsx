
import { useState, useEffect } from "react";
import { formatPrayerTime, getFastingTimes, getDefaultPrayerTimes, getTimeUntilIftar } from "@/utils/prayerCalculations";
import { format } from "date-fns";
import { MoveRight, Clock, Sunrise, Sunset } from "lucide-react";
import { cn } from "@/lib/utils";

export const FastingSchedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [timeUntilIftar, setTimeUntilIftar] = useState("");
  
  // Get prayer times for today
  const prayerTimes = getDefaultPrayerTimes(currentDate);
  const { suhoor, iftar } = getFastingTimes(prayerTimes);
  
  // Update time until iftar every minute
  useEffect(() => {
    const calculateTimeLeft = () => {
      setTimeUntilIftar(getTimeUntilIftar(iftar));
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);
    
    return () => clearInterval(timer);
  }, [iftar]);
  
  // Calculate progress percentage for the fasting day
  const calculateProgress = () => {
    const now = new Date();
    const dayStart = new Date(now);
    dayStart.setHours(0, 0, 0, 0);
    const dayEnd = new Date(now);
    dayEnd.setHours(23, 59, 59, 999);
    
    const total = dayEnd.getTime() - dayStart.getTime();
    const elapsed = now.getTime() - dayStart.getTime();
    
    return Math.min(100, Math.max(0, (elapsed / total) * 100));
  };
  
  const progressPercentage = calculateProgress();
  
  return (
    <div className="w-full animate-in">
      <div className="glass-card rounded-3xl overflow-hidden mb-6">
        <div className="bg-gradient-to-br from-ramadan-500 to-ramadan-700 p-6 text-white">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium opacity-90">Today's Fast</h3>
            <span className="text-xs opacity-80">{format(currentDate, "EEEE, MMMM d")}</span>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between items-end mb-2">
              <div className="flex items-center space-x-2">
                <Sunrise className="w-4 h-4 text-ramadan-100" />
                <p className="text-sm font-medium">Suhoor ends</p>
              </div>
              <p className="text-xl font-semibold">{formatPrayerTime(suhoor)}</p>
            </div>
            
            <div className="flex justify-between items-end mt-4">
              <div className="flex items-center space-x-2">
                <Sunset className="w-4 h-4 text-ramadan-100" />
                <p className="text-sm font-medium">Iftar time</p>
              </div>
              <p className="text-xl font-semibold">{formatPrayerTime(iftar)}</p>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-semibold">Time until Iftar</h3>
              <p className="text-sm text-muted-foreground">Breaking fast at {formatPrayerTime(iftar)}</p>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-ramadan-50 text-ramadan-700">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          
          <div className="relative w-full h-2 bg-ramadan-100 rounded-full overflow-hidden mt-2 mb-4">
            <div 
              className="absolute top-0 left-0 h-full bg-ramadan-600 rounded-full transition-all duration-1000 ease-in-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-ramadan-600" />
              <span className="text-sm text-muted-foreground">Day progress</span>
            </div>
            <p className="text-2xl font-bold text-ramadan-700">{timeUntilIftar}</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center px-2 mt-8 mb-4">
        <h3 className="text-lg font-semibold">Ramadan Calendar</h3>
        <button className="flex items-center text-sm text-ramadan-600 font-medium hover:text-ramadan-700 transition-colors">
          View all <MoveRight className="ml-1 w-4 h-4" />
        </button>
      </div>
      
      <div className="overflow-x-auto pb-4 -mx-4 px-4">
        <div className="flex space-x-3 min-w-max">
          {Array.from({ length: 7 }, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() + i);
            const isToday = i === 0;
            
            const dayPrayerTimes = getDefaultPrayerTimes(date);
            const { suhoor: daySuhoor, iftar: dayIftar } = getFastingTimes(dayPrayerTimes);
            
            return (
              <div 
                key={i}
                className={cn(
                  "flex flex-col justify-between w-28 p-4 rounded-2xl hover-scale",
                  isToday ? "bg-ramadan-50 border border-ramadan-200" : "glass-card"
                )}
              >
                <div className="mb-3">
                  <p className={cn(
                    "text-sm font-medium",
                    isToday ? "text-ramadan-600" : "text-muted-foreground"
                  )}>
                    {format(date, "EEE")}
                  </p>
                  <p className="text-xl font-semibold">
                    {format(date, "d MMM")}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Suhoor</span>
                    <span className="text-xs font-medium">{formatPrayerTime(daySuhoor)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Iftar</span>
                    <span className="text-xs font-medium">{formatPrayerTime(dayIftar)}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FastingSchedule;
