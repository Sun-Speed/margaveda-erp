import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Welcome to MargaVeda ERP</h1>

        <p className="mt-5 text-gray-500">
          Build your educational organization in minutes.
        </p>

        <button
          onClick={() => navigate("/setup/type")}
          className="mt-10 px-10 py-4 rounded-xl bg-black text-white"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
