
import { Header } from "@/components/Header";
import { PrayerTimes } from "@/components/PrayerTimes";
import { Compass, Map } from "lucide-react";

const Prayers = () => {
  return (
    <div className="min-h-screen pb-20">
      <Header 
        title="Prayer Times" 
        subtitle="Track your daily prayers"
      />
      
      <main className="container max-w-md mx-auto px-4 py-6">
        <PrayerTimes />
        
        <div className="mt-8 grid grid-cols-2 gap-4">
          <button className="glass-card hover-scale p-4 rounded-2xl flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-ramadan-50 flex items-center justify-center mb-3">
              <Compass className="w-6 h-6 text-ramadan-600" />
            </div>
            <span className="font-medium">Qibla Direction</span>
          </button>
          
          <button className="glass-card hover-scale p-4 rounded-2xl flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-ramadan-50 flex items-center justify-center mb-3">
              <Map className="w-6 h-6 text-ramadan-600" />
            </div>
            <span className="font-medium">Nearby Mosques</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Prayers;
