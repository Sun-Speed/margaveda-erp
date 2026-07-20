import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Building2 } from "lucide-react";
import { useSetup } from "@/contexts/SetupContext";

export default function CustomerInfoPage() {
  const navigate = useNavigate();
  const { setupData, updateSection } = useSetup();

  const customer = setupData.customer;

  const handleChange = (e) => {
    updateSection("customer", {
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (!customer.name) return;

    const slug = customer.name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    updateSection("customer", { slug });
  }, [customer.name]);

  const next = () => {
    if (
      !customer.name?.trim() ||
      !customer.email?.trim() ||
      !customer.phone?.trim()
    ) {
      alert("Please fill all required fields.");
      return;
    }

    navigate("/setup/organization");
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-4xl rounded-[32px] border border-white/10 bg-[#111111]/80 backdrop-blur-xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="border-b border-white/10 p-8">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center">
              <Building2 className="text-white" size={28} />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">
                Management Details
              </h2>

              <p className="text-gray-400 mt-1">
                Create your management account. This account will own and
                manage all your institutions.
              </p>
            </div>

          </div>

        </div>

        {/* Form */}
        <div className="p-8">

          <div className="grid md:grid-cols-2 gap-6">

            {/* Management Name */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Management / Group Name *
              </label>

              <input
                type="text"
                name="name"
                value={customer.name || ""}
                onChange={handleChange}
                placeholder="ABC Education Group"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Workspace Slug
              </label>

              <input
                type="text"
                name="slug"
                readOnly
                value={customer.slug || ""}
                className="w-full bg-[#1A1A1A]/70 border border-white/10 rounded-xl px-4 py-3 text-gray-400 cursor-not-allowed"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Official Email *
              </label>

              <input
                type="email"
                name="email"
                value={customer.email || ""}
                onChange={handleChange}
                placeholder="info@example.com"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Contact Number *
              </label>

              <input
                type="text"
                name="phone"
                value={customer.phone || ""}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Website */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Website
              </label>

              <input
                type="text"
                name="website"
                value={customer.website || ""}
                onChange={handleChange}
                placeholder="https://example.com"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Country
              </label>

              <input
                type="text"
                name="country"
                value={customer.country || ""}
                onChange={handleChange}
                placeholder="India"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
              />
            </div>

          </div>

          {/* Info Card */}

          <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">

            <h4 className="text-white font-semibold">
              Why a Management Account?
            </h4>

            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              Every MargaVeda customer starts with a management account.
              You can begin with a single institution today and add more
              institutions in the future without migrating your data.
            </p>

          </div>

          {/* Footer */}

          <div className="flex justify-between items-center mt-10 pt-6 border-t border-white/10">

            <button
              onClick={() => navigate("/setup/type")}
              className="text-gray-400 hover:text-white transition"
            >
              ← Previous
            </button>

            <button
              onClick={next}
              className="px-8 py-3 rounded-xl bg-white text-black font-semibold hover:bg-blue-400 transition-all"
            >
              Continue →
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}