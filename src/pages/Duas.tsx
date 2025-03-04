
import { Header } from "@/components/Header";
import { DuaCollection } from "@/components/DuaCollection";

const Duas = () => {
  return (
    <div className="min-h-screen pb-20">
      <Header 
        title="Duas Collection" 
        subtitle="Essential duas for Ramadan"
      />
      
      <main className="container max-w-md mx-auto px-4 py-6">
        <DuaCollection />
      </main>
    </div>
  );
};

export default Duas;
