
import { Header } from "@/components/Header";
import { PrayerTimes } from "@/components/PrayerTimes";
import { MapPin, Compass } from "lucide-react";

const Prayers = () => {
  return (
    <div className="min-h-screen pb-20 pattern-dots">
      <div className="absolute inset-0 gradient-blur opacity-40"></div>
      
      <Header 
        title="Prayer Times" 
        subtitle="Track your daily prayers"
      />
      
      <main className="container max-w-md mx-auto px-5 py-6 relative z-10">
        <PrayerTimes />
        
        <div className="mt-8 grid grid-cols-2 gap-5">
          <button className="bg-white p-5 rounded-2xl flex flex-col items-center shadow-md hover:shadow-lg transition-all hover:scale-[1.02] border border-ramadan-100 card-glow">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-ramadan-100 to-ramadan-200 border border-ramadan-50">
              <Compass className="w-7 h-7 text-ramadan-700" />
            </div>
            <h3 className="font-semibold mb-1 text-ramadan-800">Qibla Direction</h3>
            <p className="text-xs text-ramadan-600/80 text-center">Find the direction of prayer</p>
          </button>
          
          <button className="bg-white p-5 rounded-2xl flex flex-col items-center shadow-md hover:shadow-lg transition-all hover:scale-[1.02] border border-ramadan-100 card-glow">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-ramadan-100 to-ramadan-200 border border-ramadan-50">
              <MapPin className="w-7 h-7 text-ramadan-700" />
            </div>
            <h3 className="font-semibold mb-1 text-ramadan-800">Nearby Mosques</h3>
            <p className="text-xs text-ramadan-600/80 text-center">Find mosques near you</p>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Prayers;
