import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Save, ArrowLeft } from "lucide-react";

export default function InstitutionForm({
  initialValues = {},
  onSubmit,
  loading = false,
  isEdit = false,
}) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: initialValues.name || "",
    code: initialValues.code || "",
    organizationType: initialValues.organizationType || "DEGREE_COLLEGE",
    email: initialValues.email || "",
    phone: initialValues.phone || "",
    website: initialValues.website || "",
    principalName: initialValues.principalName || "",
    establishedYear: initialValues.establishedYear || "",
    address: initialValues.address || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(form);
  };

  // Helper for consistent input styles
  const inputClass = "w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors";
  const labelClass = "block mb-2 text-sm text-gray-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-3xl bg-[#111111]/80 border border-white/10 backdrop-blur-xl p-10 rounded-[32px] shadow-2xl"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Institution Name", name: "name", type: "text" },
            { label: "Institution Code", name: "code", type: "text" },
            { label: "Official Email", name: "email", type: "email" },
            { label: "Phone Number", name: "phone", type: "text" },
            { label: "Website", name: "website", type: "text" },
            { label: "Principal Name", name: "principalName", type: "text" },
            { label: "Established Year", name: "establishedYear", type: "number" },
          ].map((field) => (
            <div key={field.name}>
              <label className={labelClass}>{field.label}</label>
              <input
                {...field}
                value={form[field.name]}
                onChange={handleChange}
                className={inputClass}
                required={field.name !== "website" && field.name !== "principalName" && field.name !== "establishedYear"}
              />
            </div>
          ))}

          <div>
            <label className={labelClass}>Institution Type</label>
            <select
              name="organizationType"
              value={form.organizationType}
              onChange={handleChange}
              className={inputClass}
            >
              {["SCHOOL", "PU_COLLEGE", "DEGREE_COLLEGE", "UNIVERSITY", "ACADEMY", "COACHING_CENTER", "SKILL_CENTER", "OTHER"].map((type) => (
                <option key={type} value={type} className="bg-[#1A1A1A]">{type.replace("_", " ")}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={labelClass}>Address</label>
          <textarea
            rows={4}
            name="address"
            value={form.address}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>

        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} /> Back
          </button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all"
          >
            <Save size={18} />
            {loading ? "Saving..." : isEdit ? "Update Institution" : "Create Institution"}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}