
import { useState } from "react";
import { Heart, Search, MoveRight, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { getFeaturedDuas, DUA_CATEGORIES } from "@/utils/duaData";

export const DuaCollection = () => {
  const [activeCategory, setActiveCategory] = useState("Ramadan");
  const featuredDuas = getFeaturedDuas();
  
  return (
    <div className="w-full animate-in">
      <div className="glass-card rounded-3xl overflow-hidden mb-6">
        <div className="bg-gradient-to-br from-ramadan-600 to-ramadan-800 p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium opacity-90">Featured Dua</h3>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20">
              <Moon className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <h2 className="text-xl font-semibold mb-2">{featuredDuas[0].title}</h2>
          
          <div className="mt-4">
            <p className="text-right font-arabic text-lg leading-relaxed mb-2">
              {featuredDuas[0].arabic}
            </p>
            
            <p className="text-sm opacity-90 italic">
              "{featuredDuas[0].translation}"
            </p>
            
            <p className="text-xs opacity-70 mt-2">
              {featuredDuas[0].reference ? `Reference: ${featuredDuas[0].reference}` : null}
            </p>
          </div>
        </div>
      </div>
      
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <input
          type="text"
          placeholder="Search duas..."
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background placeholder:text-muted-foreground/70 focus:outline-none focus:ring-1 focus:ring-ramadan-500"
        />
      </div>
      
      <div className="overflow-x-auto -mx-4 px-4 mb-6">
        <div className="flex space-x-2 min-w-max">
          {DUA_CATEGORIES.map((category) => (
            <button
              key={category}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                activeCategory === category
                  ? "bg-ramadan-600 text-white"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center px-2 mt-8 mb-4">
        <h3 className="text-lg font-semibold">{activeCategory} Duas</h3>
        <button className="flex items-center text-sm text-ramadan-600 font-medium hover:text-ramadan-700 transition-colors">
          View all <MoveRight className="ml-1 w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-4 mb-6">
        {featuredDuas.map((dua) => (
          <div key={dua.id} className="glass-card p-4 rounded-2xl hover-scale">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-medium">{dua.title}</h4>
                {dua.occasion && (
                  <p className="text-xs text-muted-foreground">For: {dua.occasion}</p>
                )}
              </div>
              <button className="p-1.5 rounded-full hover:bg-ramadan-50 transition-colors">
                <Heart className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
            
            <p className="text-right font-arabic text-sm leading-relaxed mb-2">
              {dua.arabic}
            </p>
            
            <p className="text-xs text-muted-foreground italic mb-2">
              {dua.transliteration}
            </p>
            
            <p className="text-sm">
              "{dua.translation}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DuaCollection;
