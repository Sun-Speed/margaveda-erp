import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { useSetup } from "@/contexts/SetupContext";
import { createERP } from "../services/setup.service";

export default function ReviewPage() {
  const navigate = useNavigate();
  const { setupData } = useSetup();

  const [loading, setLoading] = useState(false);

  const submit = async () => {
    try {
      setLoading(true);

      const payload = {
        customer: setupData.customer,
        organization: setupData.organization,
        admin: {
          firstName: setupData.admin.firstName,
          lastName: setupData.admin.lastName,
          email: setupData.admin.email,
          phone: setupData.admin.phone,
          password: setupData.admin.password,
        },
      };

      const response = await createERP(payload);

      alert(response.message);

      // navigate("/login");
    } catch (error) {
      alert(error?.response?.data?.message || "ERP creation failed.");
    } finally {
      setLoading(false);
    }
  };

  const sections = [
    {
      title: "Management",
      icon: Building2,
      data: [
        ["Name", setupData.customer.name],
        ["Email", setupData.customer.email],
        ["Phone", setupData.customer.phone],
        ["Slug", setupData.customer.slug],
      ],
    },
    {
      title: "First Institution",
      icon: GraduationCap,
      data: [
        ["Institution", setupData.organization.name],
        ["Type", setupData.organization.type],
        ["Code", setupData.organization.code],
        ["Email", setupData.organization.email],
      ],
    },
    {
      title: "Administrator",
      icon: ShieldCheck,
      data: [
        [
          "Name",
          `${setupData.admin.firstName} ${setupData.admin.lastName || ""}`,
        ],
        ["Email", setupData.admin.email],
        ["Phone", setupData.admin.phone],
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-6xl rounded-[32px] border border-white/10 bg-[#111111]/80 backdrop-blur-xl shadow-2xl overflow-hidden"
      >
        {/* Header */}

        <div className="border-b border-white/10 p-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center">
              <CheckCircle2 className="text-white" size={28} />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">Review & Create</h2>

              <p className="text-gray-400 mt-1">
                Review your setup before creating your MargaVeda ERP.
              </p>
            </div>
          </div>
        </div>

        {/* Summary */}

        <div className="grid lg:grid-cols-3 gap-6 p-8">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <div
                key={section.title}
                className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center">
                    <Icon size={22} className="text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {section.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {section.data.map(([label, value]) => (
                    <div key={label}>
                      <p className="text-xs uppercase tracking-wider text-gray-500">
                        {label}
                      </p>

                      <p className="text-white mt-1 break-words">
                        {value || "-"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Info */}

        <div className="mx-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
          <h4 className="text-white font-semibold">What happens next?</h4>

          <ul className="mt-3 space-y-2 text-sm text-gray-400">
            <li>• Your Management account will be created.</li>

            <li>• Your first Institution will be initialized.</li>

            <li>• Your Administrator account will receive full access.</li>

            <li>
              • Default roles and permissions will be generated automatically.
            </li>
          </ul>
        </div>

        {/* Footer */}

        <div className="flex justify-between items-center border-t border-white/10 mt-8 px-8 py-6">
          <button
            onClick={() => navigate("/setup/admin")}
            className="text-gray-400 hover:text-white transition"
          >
            ← Previous
          </button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={submit}
            disabled={loading}
            className="px-8 py-3 rounded-xl bg-white text-black font-semibold hover:bg-blue-400 transition disabled:opacity-50"
          >
            {loading ? "Creating ERP..." : "Create MargaVeda ERP"}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
