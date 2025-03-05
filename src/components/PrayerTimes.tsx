
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { AlarmCheck, Bell, Check } from "lucide-react";
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
      <div className="bg-white rounded-3xl border border-ramadan-100 shadow-md overflow-hidden mb-6">
        <div className="bg-gradient-to-br from-ramadan-600 to-ramadan-800 p-7 text-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium opacity-90 flex items-center">
              <AlarmCheck className="w-4 h-4 mr-2" />
              Next Prayer
            </h3>
            <span className="text-xs bg-white/20 rounded-lg px-2 py-1">
              {format(currentDate, "MMM d")}
            </span>
          </div>
          
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold">{next}</h2>
              <p className="text-sm flex items-center mt-1">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                in {timeRemaining}
              </p>
            </div>
            <p className="text-2xl font-bold">{formatPrayerTime(prayerTimes[next])}</p>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-ramadan-900">Today's Prayers</h3>
            <div className="flex items-center text-sm text-ramadan-600">
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
                    "flex items-center justify-between p-4 rounded-xl transition-all border",
                    isNext 
                      ? "bg-ramadan-50 border-ramadan-200" 
                      : isPast 
                        ? "bg-white border-ramadan-100/50" 
                        : "bg-white border-ramadan-100"
                  )}
                >
                  <div className="flex items-center">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center mr-3",
                      isPast 
                        ? "bg-green-100" 
                        : isNext 
                          ? "bg-ramadan-100" 
                          : "bg-gray-100"
                    )}>
                      {isPast ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <span className={cn(
                          "font-medium text-sm",
                          isNext ? "text-ramadan-700" : "text-gray-500"
                        )}>
                          {prayer.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <span className={cn(
                        "font-medium",
                        isNext ? "text-ramadan-700" : ""
                      )}>
                        {prayer}
                      </span>
                      {isPast && (
                        <p className="text-xs text-green-600">Completed</p>
                      )}
                      {isNext && (
                        <p className="text-xs text-ramadan-600">Next prayer</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className={cn(
                      "text-sm font-medium",
                      isPast ? "text-gray-500" : "",
                      isNext ? "text-ramadan-700" : ""
                    )}>
                      {formatPrayerTime(time)}
                    </span>
                    
                    <button className={cn(
                      "ml-3 p-2 rounded-full transition-colors",
                      "hover:bg-ramadan-100"
                    )}>
                      <Bell className="w-4 h-4 text-ramadan-600" />
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
