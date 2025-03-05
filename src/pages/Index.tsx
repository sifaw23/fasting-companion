
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Sparkles, Calendar, Clock, BookOpen, Compass, Moon, Star, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";
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
      path: "/schedule"
    },
    {
      title: "Prayer Times",
      description: "Track daily prayers with notifications",
      icon: Clock,
      path: "/prayers"
    },
    {
      title: "Quran Guide",
      description: "Follow your Ramadan reading plan",
      icon: BookOpen,
      path: "/quran"
    },
    {
      title: "Duas Collection",
      description: "Essential duas for Ramadan",
      icon: Moon,
      path: "/duas"
    }
  ];
  
  return (
    <div className="min-h-screen pb-20 pattern-dots">
      <div className="absolute inset-0 gradient-blur opacity-40"></div>
      
      <header className="relative z-10 bg-gradient-to-br from-ramadan-700 to-ramadan-900 text-white pt-12 pb-8 rounded-b-[3rem] shadow-lg">
        <div className="container max-w-md mx-auto px-5">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-serif italic opacity-90">Ramadan Kareem</h3>
              <p className="text-sm opacity-80">{format(currentDate, "EEEE, MMMM d")}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Sparkles className="w-6 h-6 text-ramadan-100" />
            </div>
          </div>
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-1">{greeting}</h1>
            <p className="opacity-90">May this Ramadan bring peace & blessings</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Today's Timings</h2>
              <span className="text-xs bg-white/20 rounded-lg px-2 py-1">1445 AH</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs opacity-80">Suhoor ends</p>
                  <Coffee className="w-3 h-3 opacity-80" />
                </div>
                <p className="text-xl font-semibold">{formatPrayerTime(suhoor)}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs opacity-80">Iftar time</p>
                  <Star className="w-3 h-3 opacity-80" />
                </div>
                <p className="text-xl font-semibold">{formatPrayerTime(iftar)}</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs opacity-80">Next prayer: {next}</p>
                <p className="text-xs opacity-80">in {timeRemaining}</p>
              </div>
              <p className="text-xl font-semibold">{formatPrayerTime(prayerTimes[next])}</p>
              <div className="w-full bg-white/10 rounded-full h-1.5 mt-2 overflow-hidden">
                <div className="bg-white h-full" style={{ width: '35%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container max-w-md mx-auto px-5 py-8 relative z-10">
        <div className="section-fade-in">
          <h2 className="text-xl font-bold mb-5 text-ramadan-900">Features</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.path}
                className="bg-white rounded-2xl p-5 border border-ramadan-100 shadow-md hover:shadow-lg transition-all hover:scale-[1.02] card-glow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ramadan-100 to-ramadan-200 flex items-center justify-center mb-4 border border-ramadan-50">
                  <feature.icon className="w-6 h-6 text-ramadan-700" />
                </div>
                <h3 className="font-semibold mb-1 text-ramadan-800">{feature.title}</h3>
                <p className="text-xs text-ramadan-600/80">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
          
          <h2 className="text-xl font-bold mb-5 text-ramadan-900">Today's Overview</h2>
          
          <div className="bg-white rounded-2xl p-5 border border-ramadan-100 shadow-md mb-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ramadan-100 to-ramadan-200 flex items-center justify-center mr-4 border border-ramadan-50">
                <Compass className="w-6 h-6 text-ramadan-700" />
              </div>
              <div>
                <h3 className="font-semibold text-ramadan-800">Qibla Direction</h3>
                <p className="text-xs text-ramadan-600/80">Find the direction of prayer</p>
              </div>
            </div>
            
            <div className="bg-ramadan-50/70 rounded-xl p-6 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full border-4 border-ramadan-200 flex items-center justify-center relative">
                <div className="absolute w-2 h-2 rounded-full bg-ramadan-600"></div>
                <div className="w-1 h-20 bg-gradient-to-t from-ramadan-600 to-transparent rotate-45 origin-bottom"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-medium text-ramadan-700">N</span>
                </div>
                <div className="absolute inset-0 flex items-start justify-center pt-3">
                  <span className="text-xs font-medium text-ramadan-700">W</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-end pr-3">
                  <span className="text-xs font-medium text-ramadan-700">E</span>
                </div>
                <div className="absolute inset-0 flex items-end justify-center pb-3">
                  <span className="text-xs font-medium text-ramadan-700">S</span>
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
