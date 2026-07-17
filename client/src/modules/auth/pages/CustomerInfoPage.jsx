import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetup } from "@/contexts/SetupContext";

export default function CustomerInfoPage() {
  const navigate = useNavigate();
  const { setupData, updateSection } = useSetup();
  const customer = setupData.customer;

  const handleChange = (e) => {
    updateSection("customer", { [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (!customer.name) return;
    const slug = customer.name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    updateSection("customer", { slug });
  }, [customer.name]);

  const next = () => {
    if (!customer.name.trim() || !customer.email.trim() || !customer.phone.trim()) {
      alert("Please fill all required fields.");
      return;
    }
    navigate("/setup/organization");
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-[#111111]/80 border border-white/10 backdrop-blur-xl p-10 rounded-[32px] shadow-2xl">
        <h2 className="text-3xl font-bold text-white">Customer Information</h2>
        <p className="text-gray-400 mt-2">Enter your education group or institution details.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {[
            { label: customer.type === "GROUP" ? "Education Group Name" : "Institution Name", name: "name" },
            { label: "Slug", name: "slug", placeholder: "Auto Generated" },
            { label: "Email", name: "email", type: "email" },
            { label: "Phone", name: "phone" },
            { label: "Website", name: "website" },
            { label: "Country", name: "country" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm text-gray-400 mb-2">{field.label}</label>
              <input
                name={field.name}
                type={field.type || "text"}
                value={customer[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder || ""}
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-10">
          <button 
            onClick={() => navigate("/setup/type")} 
            className="px-8 py-3 text-gray-400 hover:text-white transition-colors"
          >
            Previous
          </button>
          <button 
            onClick={next} 
            className="px-8 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}