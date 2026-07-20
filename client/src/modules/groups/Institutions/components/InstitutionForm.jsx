// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Save, ArrowLeft } from "lucide-react";

// export default function InstitutionForm({
//   initialValues = {},
//   onSubmit,
//   loading = false,
//   isEdit = false,
// }) {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: initialValues.name || "",
//     code: initialValues.code || "",
//     type: initialValues.type || "DEGREE_COLLEGE",
//     email: initialValues.email || "",
//     phone: initialValues.phone || "",
//     website: initialValues.website || "",
//     principalName: initialValues.principalName || "",
//     establishedYear: initialValues.establishedYear || "",
//     address: initialValues.address || "",

//     academicSetup: initialValues.academicSetup || {
//       structure: "DEPARTMENT_BASED",
//       courseManagement: true,
//       labManagement: true,
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await onSubmit(form);
//   };

//   // Helper for consistent input styles
//   const inputClass =
//     "w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors";
//   const labelClass = "block mb-2 text-sm text-gray-400";

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="w-full max-w-3xl bg-[#111111]/80 border border-white/10 backdrop-blur-xl p-10 rounded-[32px] shadow-2xl"
//     >
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {[
//             { label: "Institution Name", name: "name", type: "text" },
//             { label: "Institution Code", name: "code", type: "text" },
//             { label: "Official Email", name: "email", type: "email" },
//             { label: "Phone Number", name: "phone", type: "text" },
//             { label: "Website", name: "website", type: "text" },
//             { label: "Principal Name", name: "principalName", type: "text" },
//             {
//               label: "Established Year",
//               name: "establishedYear",
//               type: "number",
//             },
//           ].map((field) => (
//             <div key={field.name}>
//               <label className={labelClass}>{field.label}</label>
//               <input
//                 {...field}
//                 value={form[field.name]}
//                 onChange={handleChange}
//                 className={inputClass}
//                 required={
//                   field.name !== "website" &&
//                   field.name !== "principalName" &&
//                   field.name !== "establishedYear"
//                 }
//               />
//             </div>
//           ))}

//           <div>
//             <label className={labelClass}>Institution Type</label>
//             <select
//               name="organizationType"
//               value={form.organizationType}
//               onChange={handleChange}
//               className={inputClass}
//             >
//               {[
//                 "SCHOOL",
//                 "PU_COLLEGE",
//                 "DEGREE_COLLEGE",
//                 "UNIVERSITY",
//                 "ACADEMY",
//                 "COACHING_CENTER",
//                 "SKILL_CENTER",
//                 "OTHER",
//               ].map((type) => (
//                 <option key={type} value={type} className="bg-[#1A1A1A]">
//                   {type.replace("_", " ")}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div>
//           <label className={labelClass}>Address</label>
//           <textarea
//             rows={4}
//             name="address"
//             value={form.address}
//             onChange={handleChange}
//             className={inputClass}
//             required
//           />
//         </div>

//         <div className="flex justify-between pt-4">
//           <button
//             type="button"
//             onClick={() => navigate(-1)}
//             className="flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors"
//           >
//             <ArrowLeft size={18} /> Back
//           </button>

//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             type="submit"
//             disabled={loading}
//             className="flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all"
//           >
//             <Save size={18} />
//             {loading
//               ? "Saving..."
//               : isEdit
//                 ? "Update Institution"
//                 : "Create Institution"}
//           </motion.button>
//         </div>
//       </form>
//     </motion.div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Save, ArrowLeft } from "lucide-react";

const institutionTypes = [
  { value: "SCHOOL", label: "🏫 School" },
  { value: "PU_COLLEGE", label: "🎓 PU College" },
  { value: "DEGREE_COLLEGE", label: "🏛 Degree College" },
  { value: "UNIVERSITY", label: "🎓 University" },
  { value: "ACADEMY", label: "📘 Academy" },
  { value: "SKILL_CENTER", label: "🛠 Skill Center" },
  { value: "OTHER", label: "📦 Other" },
];

const academicDefaults = {
  SCHOOL: {
    structure: "CLASS_BASED",
    courseManagement: false,
    labManagement: true,
  },

  PU_COLLEGE: {
    structure: "DEPARTMENT_BASED",
    courseManagement: true,
    labManagement: true,
  },

  DEGREE_COLLEGE: {
    structure: "DEPARTMENT_BASED",
    courseManagement: true,
    labManagement: true,
  },

  UNIVERSITY: {
    structure: "DEPARTMENT_BASED",
    courseManagement: true,
    labManagement: true,
  },

  ACADEMY: {
    structure: "CLASS_BASED",
    courseManagement: true,
    labManagement: false,
  },

  SKILL_CENTER: {
    structure: "CLASS_BASED",
    courseManagement: true,
    labManagement: true,
  },

  OTHER: {
    structure: "CLASS_BASED",
    courseManagement: false,
    labManagement: false,
  },
};

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

    academicSetup:
      initialValues.academicSetup ||
      academicDefaults[initialValues.organizationType || "DEGREE_COLLEGE"],
  });

  const inputClass =
    "w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition";

  const labelClass = "block mb-2 text-sm text-gray-400";

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "organizationType") {
      setForm((prev) => ({
        ...prev,
        organizationType: value,
        academicSetup: academicDefaults[value],
      }));

      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateAcademic = (key, value) => {
    setForm((prev) => ({
      ...prev,
      academicSetup: {
        ...prev.academicSetup,
        [key]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await onSubmit(form);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-5xl bg-[#111111]/80 border border-white/10 backdrop-blur-xl rounded-[32px] shadow-2xl overflow-hidden"
    >
      <form onSubmit={handleSubmit}>
        <div className="border-b border-white/10 p-8">
          <h2 className="text-3xl font-bold text-white">
            {isEdit ? "Edit Institution" : "Create Institution"}
          </h2>

          <p className="text-gray-400 mt-2">
            {isEdit
              ? "Update your institution information."
              : "Add a new institution under your education group."}
          </p>
        </div>

        <div className="p-8 space-y-10">
          {/* Institution Details */}

          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Institution Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Institution Name */}

              <div className="md:col-span-2">
                <label className={labelClass}>Institution Name *</label>

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="ABC Degree College"
                  className={inputClass}
                  required
                />
              </div>

              {/* Institution Type */}

              <div>
                <label className={labelClass}>Institution Type *</label>

                <select
                  name="organizationType"
                  value={form.organizationType}
                  onChange={handleChange}
                  className={inputClass}
                >
                  {institutionTypes.map((item) => (
                    <option
                      key={item.value}
                      value={item.value}
                      className="bg-[#1A1A1A]"
                    >
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Institution Code */}

              <div>
                <label className={labelClass}>Institution Code *</label>

                <input
                  name="code"
                  value={form.code}
                  onChange={handleChange}
                  placeholder="ABDC"
                  className={inputClass}
                  required
                />
              </div>

              {/* Email */}

              <div>
                <label className={labelClass}>Official Email</label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="info@college.edu"
                  className={inputClass}
                />
              </div>

              {/* Phone */}

              <div>
                <label className={labelClass}>Contact Number</label>

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className={inputClass}
                />
              </div>

              {/* Website */}

              <div>
                <label className={labelClass}>Website</label>

                <input
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  placeholder="https://college.edu"
                  className={inputClass}
                />
              </div>

              {/* Principal */}

              <div>
                <label className={labelClass}>Principal / Director</label>

                <input
                  name="principalName"
                  value={form.principalName}
                  onChange={handleChange}
                  placeholder="Dr. John Doe"
                  className={inputClass}
                />
              </div>

              {/* Established Year */}

              <div>
                <label className={labelClass}>Established Year</label>

                <input
                  type="number"
                  name="establishedYear"
                  value={form.establishedYear}
                  onChange={handleChange}
                  placeholder="2001"
                  className={inputClass}
                />
              </div>

              {/* Address */}

              <div className="md:col-span-2">
                <label className={labelClass}>Address</label>

                <textarea
                  rows={4}
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Institution Address"
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>
          </div>

          {/* Academic Configuration */}

          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Academic Configuration
            </h3>

            <p className="text-sm text-gray-400 mb-6">
              Configure how this institution will organize its academic
              structure. These settings can be modified later from Institution
              Settings.
            </p>

            {/* Academic Structure */}

            <div className="mb-8">
              <label className="block text-sm text-gray-400 mb-4">
                Academic Structure
              </label>

              <div className="grid md:grid-cols-2 gap-5">
                {/* Class Based */}

                <div
                  onClick={() => updateAcademic("structure", "CLASS_BASED")}
                  className={`cursor-pointer rounded-2xl border p-6 transition ${
                    form.academicSetup.structure === "CLASS_BASED"
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-white/10 bg-[#1A1A1A] hover:border-white/20"
                  }`}
                >
                  <h4 className="text-white text-lg font-semibold">
                    Class Based
                  </h4>

                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    Students are managed using Classes and Sections. Recommended
                    for Schools, Academies and Skill Centers.
                  </p>
                </div>

                {/* Department Based */}

                <div
                  onClick={() =>
                    updateAcademic("structure", "DEPARTMENT_BASED")
                  }
                  className={`cursor-pointer rounded-2xl border p-6 transition ${
                    form.academicSetup.structure === "DEPARTMENT_BASED"
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-white/10 bg-[#1A1A1A] hover:border-white/20"
                  }`}
                >
                  <h4 className="text-white text-lg font-semibold">
                    Department Based
                  </h4>

                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    Students are managed through Departments and Courses.
                    Recommended for Colleges and Universities.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Features */}

            <div className="space-y-4">
              <label className="block text-sm text-gray-400">
                Additional Features
              </label>

              {/* Course */}

              <div className="flex justify-between items-center rounded-2xl border border-white/10 bg-[#1A1A1A] px-6 py-5">
                <div>
                  <h4 className="text-white font-medium">Course Management</h4>

                  <p className="text-sm text-gray-400 mt-1">
                    Manage courses, programs and specializations.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={form.academicSetup.courseManagement}
                  onChange={(e) =>
                    updateAcademic("courseManagement", e.target.checked)
                  }
                  className="w-5 h-5"
                />
              </div>

              {/* Lab */}

              <div className="flex justify-between items-center rounded-2xl border border-white/10 bg-[#1A1A1A] px-6 py-5">
                <div>
                  <h4 className="text-white font-medium">
                    Laboratory Management
                  </h4>

                  <p className="text-sm text-gray-400 mt-1">
                    Enable laboratory management and practical sessions.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={form.academicSetup.labManagement}
                  onChange={(e) =>
                    updateAcademic("labManagement", e.target.checked)
                  }
                  className="w-5 h-5"
                />
              </div>
            </div>

            {/* Always Included */}

            <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
              <h4 className="text-white font-semibold">Always Included</h4>

              <div className="grid md:grid-cols-3 gap-4 mt-5">
                <div className="rounded-xl bg-[#1A1A1A] border border-white/10 p-4">
                  <p className="text-white font-medium">Subject Management</p>

                  <p className="text-gray-400 text-sm mt-2">
                    Create and manage academic subjects.
                  </p>
                </div>

                <div className="rounded-xl bg-[#1A1A1A] border border-white/10 p-4">
                  <p className="text-white font-medium">Scheduling</p>

                  <p className="text-gray-400 text-sm mt-2">
                    Timetables, sessions and academic planning.
                  </p>
                </div>

                <div className="rounded-xl bg-[#1A1A1A] border border-white/10 p-4">
                  <p className="text-white font-medium">Marks & Grading</p>

                  <p className="text-gray-400 text-sm mt-2">
                    Internal, external and grading system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="flex justify-between items-center mt-10 pt-8 border-t border-white/10">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-white text-black font-semibold hover:bg-blue-400 transition disabled:opacity-50"
          >
            <Save size={18} />

            {loading
              ? "Saving..."
              : isEdit
                ? "Update Institution"
                : "Create Institution"}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
