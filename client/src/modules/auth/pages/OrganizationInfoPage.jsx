import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { useSetup } from "@/contexts/SetupContext";

const institutionTypes = [
  { value: "SCHOOL", label: "🏫 School" },
  { value: "PU_COLLEGE", label: "🎓 PU College" },
  { value: "DEGREE_COLLEGE", label: "🏛 Degree College" },
  { value: "UNIVERSITY", label: "🎓 University" },
  { value: "ACADEMY", label: "📘 Academy" },
  { value: "SKILL_CENTER", label: "🛠 Skill Center" },
  { value: "OTHER", label: "📦 Other" },
];

export default function OrganizationInfoPage() {
  const navigate = useNavigate();
  const { setupData, updateSection } = useSetup();

  const organization = setupData.organization;

  const handleChange = (e) => {
    updateSection("organization", {
      [e.target.name]: e.target.value,
    });
  };

  const generateCode = () => {
    if (!organization.name) return;

    const words = organization.name.trim().split(" ");

    const code =
      words.length === 1
        ? words[0].substring(0, 4)
        : words.map((w) => w[0]).join("");

    updateSection("organization", {
      code: code.toUpperCase(),
    });
  };

  const next = () => {
    if (
      !organization.name?.trim() ||
      !organization.code?.trim() ||
      !organization.type
    ) {
      alert("Please complete all required fields.");
      return;
    }

    navigate("/setup/academic");
    // onClick={() => navigate("/setup/academic")}
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-5xl rounded-[32px] border border-white/10 bg-[#111111]/80 backdrop-blur-xl shadow-2xl overflow-hidden"
      >
        {/* Header */}

        <div className="border-b border-white/10 p-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center">
              <Building2 className="text-white" size={28} />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">
                Create Your First Institution
              </h2>

              <p className="text-gray-400 mt-1">
                Add your first institution. You can always create additional
                institutions later from the Group Dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}

        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Institution Name */}

            <div className="md:col-span-2">
              <label className="block text-sm text-gray-400 mb-2">
                Institution Name *
              </label>

              <input
                name="name"
                value={organization.name || ""}
                onChange={handleChange}
                placeholder="ABC Degree College"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>

            {/* Institution Type */}

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Institution Type *
              </label>

              <select
                name="type"
                value={organization.type || ""}
                onChange={handleChange}
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
              >
                <option value="">Select Institution Type</option>

                {institutionTypes.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Institution Code */}

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Institution Code *
              </label>

              <div className="flex gap-3">
                <input
                  name="code"
                  value={organization.code || ""}
                  onChange={handleChange}
                  placeholder="ABDC"
                  className="flex-1 bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
                />

                <button
                  type="button"
                  onClick={generateCode}
                  className="px-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white transition"
                >
                  Generate
                </button>
              </div>
            </div>

            {/* Email */}

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Official Email
              </label>

              <input
                type="email"
                name="email"
                value={organization.email || ""}
                onChange={handleChange}
                placeholder="info@college.edu"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>

            {/* Phone */}

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Contact Number
              </label>

              <input
                name="phone"
                value={organization.phone || ""}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>

            {/* Website */}

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Website
              </label>

              <input
                name="website"
                value={organization.website || ""}
                onChange={handleChange}
                placeholder="https://college.edu"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>

            {/* Principal */}

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Principal / Director
              </label>

              <input
                name="principalName"
                value={organization.principalName || ""}
                onChange={handleChange}
                placeholder="Dr. John Doe"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>

            {/* Address */}

            <div className="md:col-span-2">
              <label className="block text-sm text-gray-400 mb-2">
                Address
              </label>

              <textarea
                rows={3}
                name="address"
                value={organization.address || ""}
                onChange={handleChange}
                placeholder="Institution Address"
                className="w-full resize-none bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Info */}

          <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
            <h4 className="text-white font-semibold">First Institution</h4>

            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              This institution will become your primary institution after
              registration. As your education group grows, you can add more
              institutions without changing your existing setup.
            </p>
          </div>

          {/* Footer */}

          <div className="flex justify-between items-center mt-10 pt-6 border-t border-white/10">
            <button
              // onClick={() => navigate("/setup/customer")}
              onClick={() => navigate("/setup/customer")}
              className="text-gray-400 hover:text-white transition"
            >
              ← Previous
            </button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={next}
              className="px-8 py-3 rounded-xl bg-white text-black font-semibold hover:bg-blue-400 transition"
            >
              Continue →
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
