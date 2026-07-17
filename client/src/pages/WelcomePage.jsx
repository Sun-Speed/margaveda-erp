import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    // The #0A0A0A background you preferred
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-6">
      
      {/* Card Container */}
      <div className="w-full max-w-2xl bg-[#111111] border border-white/10 rounded-[32px] p-12 text-center shadow-2xl backdrop-blur-sm">
        
        <h1 className="text-5xl font-bold text-white tracking-tight">
          MargaVeda ERP
        </h1>
        
        <p className="mt-4 text-gray-400 text-lg leading-relaxed max-w-lg mx-auto">
          Modernizing the future of education with a seamless, cloud-native ERP experience.....
        </p>

        <button
          onClick={() => navigate("/setup/type")}
          className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}