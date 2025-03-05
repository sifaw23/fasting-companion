
import { Header } from "@/components/Header";
import { QuranGuide } from "@/components/QuranGuide";

const Quran = () => {
  return (
    <div className="min-h-screen pb-20 pattern-dots">
      <div className="absolute inset-0 gradient-blur opacity-40"></div>
      
      <Header 
        title="Quran Guide" 
        subtitle="Follow your Ramadan reading plan"
      />
      
      <main className="container max-w-md mx-auto px-5 py-6 relative z-10">
        <QuranGuide />
      </main>
    </div>
  );
};

export default Quran;
