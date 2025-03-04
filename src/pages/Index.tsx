
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Moon, Calendar, Clock, Book, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { FastingSchedule } from "@/components/FastingSchedule";
import { PrayerTimes } from "@/components/PrayerTimes";
import { 
  getDefaultPrayerTimes, 
  getFastingTimes, 
  formatPrayerTime,
  getCurrentOrNextPrayer
} from "@/utils/prayerCalculations";

const Index = () => {
  const [greeting, setGreeting] = useState("");
  const currentDate = new Date();
  
  // Get prayer times and fasting times
  const prayerTimes = getDefaultPrayerTimes();
  const { suhoor, iftar } = getFastingTimes(prayerTimes);
  const { current, next, timeRemaining } = getCurrentOrNextPrayer(prayerTimes);
  
  // Set greeting based on time of day
  useEffect(() => {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) {
      setGreeting("Good morning");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good afternoon");
    } else if (hour >= 17 && hour < 21) {
      setGreeting("Good evening");
    } else {
      setGreeting("Good night");
    }
  }, []);
  
  // Feature cards for the home screen
  const features = [
    {
      title: "Fasting Schedule",
      description: "View your personalized fasting times",
      icon: Calendar,
      color: "bg-blue-500",
      path: "/schedule"
    },
    {
      title: "Prayer Times",
      description: "Track daily prayers with notifications",
      icon: Clock,
      color: "bg-green-500",
      path: "/prayers"
    },
    {
      title: "Quran Guide",
      description: "Follow your Ramadan reading plan",
      icon: Book,
      color: "bg-amber-500",
      path: "/quran"
    },
    {
      title: "Duas Collection",
      description: "Essential duas for Ramadan",
      icon: Moon,
      color: "bg-purple-500",
      path: "/duas"
    }
  ];
  
  return (
    <div className="min-h-screen pb-20">
      <header className="bg-gradient-to-b from-ramadan-800 to-ramadan-600 text-white pt-12 pb-6 px-4 rounded-b-3xl relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -left-12 top-24 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
        </div>
        
        <div className="container max-w-md mx-auto relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg opacity-90">Ramadan Companion</h3>
              <p className="text-sm opacity-70">{format(currentDate, "EEEE, MMMM d")}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Moon className="w-6 h-6" />
            </div>
          </div>
          
          <div className="mb-6">
            <h1 className="text-2xl font-semibold mb-1">{greeting}</h1>
            <p className="opacity-90">Welcome to your Ramadan companion</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-xs opacity-70 mb-1">Suhoor ends</p>
              <p className="text-lg font-semibold">{formatPrayerTime(suhoor)}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-xs opacity-70 mb-1">Iftar time</p>
              <p className="text-lg font-semibold">{formatPrayerTime(iftar)}</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
            <p className="text-xs opacity-70 mb-1">Next prayer: {next}</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">{formatPrayerTime(prayerTimes[next])}</p>
              <p className="text-sm bg-white/20 rounded-full px-2 py-0.5">in {timeRemaining}</p>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container max-w-md mx-auto px-4 py-8">
        <div className="section-fade-in">
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.path}
                className="glass-card p-4 rounded-2xl hover-scale"
              >
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center mb-3",
                  "bg-ramadan-50"
                )}>
                  <feature.icon className="w-5 h-5 text-ramadan-600" />
                </div>
                <h3 className="font-medium mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
          
          <h2 className="text-xl font-semibold mb-4">Today's Overview</h2>
          
          <div className="bg-ramadan-50 rounded-2xl p-4 mb-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                <Compass className="w-5 h-5 text-ramadan-600" />
              </div>
              <div>
                <h3 className="font-medium">Qibla Direction</h3>
                <p className="text-xs text-muted-foreground">Find the direction of prayer</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-4 border-ramadan-200 flex items-center justify-center relative">
                <div className="absolute w-1 h-1 rounded-full bg-ramadan-600" />
                <div className="w-1 h-16 bg-gradient-to-t from-ramadan-600 to-transparent rotate-45 origin-bottom" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground">N</span>
                </div>
                <div className="absolute inset-0 flex items-start justify-center pt-2">
                  <span className="text-xs font-medium text-muted-foreground">W</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-end pr-2">
                  <span className="text-xs font-medium text-muted-foreground">E</span>
                </div>
                <div className="absolute inset-0 flex items-end justify-center pb-2">
                  <span className="text-xs font-medium text-muted-foreground">S</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
