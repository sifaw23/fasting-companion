
import { Header } from "@/components/Header";
import { DuaCollection } from "@/components/DuaCollection";

const Duas = () => {
  return (
    <div className="min-h-screen pb-20 pattern-dots">
      <div className="absolute inset-0 gradient-blur opacity-40"></div>
      
      <Header 
        title="Duas Collection" 
        subtitle="Essential duas for Ramadan"
      />
      
      <main className="container max-w-md mx-auto px-5 py-6 relative z-10">
        <DuaCollection />
      </main>
    </div>
  );
};

export default Duas;
