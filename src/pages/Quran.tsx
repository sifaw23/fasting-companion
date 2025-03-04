
import { Header } from "@/components/Header";
import { QuranGuide } from "@/components/QuranGuide";

const Quran = () => {
  return (
    <div className="min-h-screen pb-20">
      <Header 
        title="Quran Guide" 
        subtitle="Follow your Ramadan reading plan"
      />
      
      <main className="container max-w-md mx-auto px-4 py-6">
        <QuranGuide />
      </main>
    </div>
  );
};

export default Quran;
