import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    // Added a subtle dark gradient background for that "futuristic" feel
    <div className="flex justify-center items-center min-h-screen bg-[#0A0A0A] px-4">
      
      {/* Decorative blurred glow in the background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <Card className="max-w-xl text-center p-12 backdrop-blur-xl bg-[#0A0A0A]/50 border border-white/10 shadow-2xl relative overflow-hidden transition-all duration-500 hover:border-white/20">
        
        {/* Sleek Typography */}
        <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          MargaVeda ERP
        </h1>

        <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-md mx-auto">
          Modernizing the future of education with a seamless, cloud-native ERP experience.
        </p>

        <div className="mt-10">
          <Button 
            className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            onClick={() => navigate("/setup/type")}
          >
            Get Started
          </Button>
        </div>
      </Card>
    </div>
  );
}