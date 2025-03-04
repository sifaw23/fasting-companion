
import { format, addMinutes } from "date-fns";

// Prayer time names
export const PRAYER_NAMES = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

// Default prayer times for demo purposes
// In a real app, these would be calculated based on location
export const getDefaultPrayerTimes = (date: Date = new Date()): Record<string, Date> => {
  // Using fixed offsets for demonstration
  // In a real app, these would be calculated using proper algorithms
  const baseTime = new Date(date);
  baseTime.setHours(0, 0, 0, 0);
  
  return {
    Fajr: addMinutes(baseTime, 5 * 60), // 5:00 AM
    Sunrise: addMinutes(baseTime, 6 * 60 + 30), // 6:30 AM
    Dhuhr: addMinutes(baseTime, 12 * 60 + 30), // 12:30 PM
    Asr: addMinutes(baseTime, 15 * 60 + 45), // 3:45 PM
    Maghrib: addMinutes(baseTime, 18 * 60 + 30), // 6:30 PM
    Isha: addMinutes(baseTime, 20 * 60), // 8:00 PM
  };
};

// Get current or next prayer time
export const getCurrentOrNextPrayer = (prayerTimes: Record<string, Date>): {
  current?: string;
  next: string;
  timeRemaining: string;
} => {
  const now = new Date();
  let current: string | undefined;
  let next = PRAYER_NAMES[0];
  let nextTime = prayerTimes[PRAYER_NAMES[0]];
  
  // Find current and next prayer
  for (const prayer of PRAYER_NAMES) {
    const time = prayerTimes[prayer];
    
    if (time <= now) {
      current = prayer;
    }
    
    if (time > now && (!nextTime || time < nextTime)) {
      next = prayer;
      nextTime = time;
    }
  }
  
  // If we've passed the last prayer of the day
  if (!next || current === PRAYER_NAMES[PRAYER_NAMES.length - 1]) {
    next = PRAYER_NAMES[0];
    nextTime = new Date(prayerTimes[PRAYER_NAMES[0]]);
    nextTime.setDate(nextTime.getDate() + 1);
  }
  
  // Calculate time remaining
  const diffMs = nextTime.getTime() - now.getTime();
  const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  
  const timeRemaining = `${diffHrs}h ${diffMins}m`;
  
  return {
    current,
    next,
    timeRemaining,
  };
};

// Get fasting times (suhoor and iftar)
export const getFastingTimes = (prayerTimes: Record<string, Date>): {
  suhoor: Date;
  iftar: Date;
} => {
  // Suhoor ends at Fajr
  const suhoor = new Date(prayerTimes.Fajr);
  
  // Iftar is at Maghrib
  const iftar = new Date(prayerTimes.Maghrib);
  
  return {
    suhoor,
    iftar,
  };
};

// Format time for display
export const formatPrayerTime = (date: Date): string => {
  return format(date, "h:mm a");
};

// Calculate time until iftar
export const getTimeUntilIftar = (iftarTime: Date): string => {
  const now = new Date();
  
  if (now > iftarTime) {
    return "Iftar has passed";
  }
  
  const diffMs = iftarTime.getTime() - now.getTime();
  const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  
  return `${diffHrs}h ${diffMins}m`;
};

// Generate data for Ramadan calendar
export const generateRamadanCalendar = (year: number = new Date().getFullYear()): Array<{
  day: number;
  date: Date;
  suhoor: Date;
  iftar: Date;
}> => {
  // This is a simplified example
  // In a real app, this would use proper Ramadan date calculations
  const calendar = [];
  
  // Assuming Ramadan starts on March 10, 2024 (example date)
  // In a real app, this would be calculated based on the Islamic calendar
  const ramadanStart = new Date(2024, 2, 10);
  
  for (let day = 1; day <= 30; day++) {
    const date = new Date(ramadanStart);
    date.setDate(ramadanStart.getDate() + day - 1);
    
    const prayerTimes = getDefaultPrayerTimes(date);
    const { suhoor, iftar } = getFastingTimes(prayerTimes);
    
    calendar.push({
      day,
      date,
      suhoor,
      iftar,
    });
  }
  
  return calendar;
};
