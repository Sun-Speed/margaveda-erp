import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Settings2 } from "lucide-react";
import { useSetup } from "@/contexts/SetupContext";

const defaults = {
  NURSERY: {
    structure: "CLASS_BASED",
    courseManagement: false,
    labManagement: false,
  },

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

export default function AcademicConfigurationPage() {
  const navigate = useNavigate();

  const { setupData, updateSection } = useSetup();

  const organization = setupData.organization;

  const config =
    organization.academicSetup || defaults[organization.type] || defaults.OTHER;

  useEffect(() => {
    if (!organization.type) return;

    if (!organization.academicSetup) {
      updateSection("organization", {
        academicSetup: defaults[organization.type] || defaults.OTHER,
      });
    }
  }, []);

  const updateAcademic = (key, value) => {
    updateSection("organization", {
      academicSetup: {
        ...config,
        [key]: value,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl rounded-[32px] border border-white/10 bg-[#111111]/80"
      >
        {/* Header */}

        <div className="border-b border-white/10 p-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center">
              <Settings2 className="text-white" size={28} />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">
                Academic Configuration
              </h2>

              <p className="text-gray-400 mt-1">
                Configure how your institution manages academics.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Structure */}

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Academic Structure
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <label
                className={`cursor-pointer rounded-xl border p-5 ${
                  config.structure === "CLASS_BASED"
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-white/10 bg-[#1A1A1A]"
                }`}
              >
                <input
                  type="radio"
                  className="hidden"
                  checked={config.structure === "CLASS_BASED"}
                  onChange={() => updateAcademic("structure", "CLASS_BASED")}
                />

                <h4 className="text-white font-semibold">Class Based</h4>

                <p className="text-gray-400 text-sm mt-2">
                  Students are organized by Classes and Sections.
                </p>
              </label>

              <label
                className={`cursor-pointer rounded-xl border p-5 ${
                  config.structure === "DEPARTMENT_BASED"
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-white/10 bg-[#1A1A1A]"
                }`}
              >
                <input
                  type="radio"
                  className="hidden"
                  checked={config.structure === "DEPARTMENT_BASED"}
                  onChange={() =>
                    updateAcademic("structure", "DEPARTMENT_BASED")
                  }
                />

                <h4 className="text-white font-semibold">Department Based</h4>

                <p className="text-gray-400 text-sm mt-2">
                  Students are organized by Departments and Courses.
                </p>
              </label>
            </div>
          </div>

          {/* Features */}

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Additional Features
            </h3>

            <div className="space-y-4">
              <label className="flex items-center justify-between rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 cursor-pointer">
                <div>
                  <p className="text-white font-medium">Course Management</p>

                  <p className="text-gray-400 text-sm">
                    Enable course creation and management.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={config.courseManagement}
                  onChange={(e) =>
                    updateAcademic("courseManagement", e.target.checked)
                  }
                />
              </label>

              <label className="flex items-center justify-between rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 cursor-pointer">
                <div>
                  <p className="text-white font-medium">
                    Laboratory Management
                  </p>

                  <p className="text-gray-400 text-sm">
                    Enable laboratories for practical sessions.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={config.labManagement}
                  onChange={(e) =>
                    updateAcademic("labManagement", e.target.checked)
                  }
                />
              </label>
            </div>
          </div>

          {/* Always Included */}

          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
            <h4 className="text-white font-semibold">Always Included</h4>

            <ul className="mt-3 text-sm text-gray-400 space-y-2">
              <li>✓ Subject Management</li>
              <li>✓ Scheduling</li>
              <li>✓ Marks & Grading</li>
            </ul>
          </div>

          {/* Footer */}

          <div className="flex justify-between pt-6 border-t border-white/10">
            <button
              onClick={() => navigate("/setup/organization")}
              className="text-gray-400 hover:text-white"
            >
              ← Previous
            </button>

            <button
              onClick={() => navigate("/setup/admin")}
              className="px-8 py-3 rounded-xl bg-white text-black font-semibold hover:bg-blue-400 transition"
            >
              Continue →
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
