import { Pencil, Power, Eye, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function InstitutionTable({ institutions }) {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#111111]/40 border border-white/10 rounded-[32px] p-2 backdrop-blur-xl overflow-hidden shadow-2xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-400 text-sm uppercase tracking-wider border-b border-white/5">
              {["Institution", "Type", "Email", "Phone", "Status", "Actions"].map((head) => (
                <th key={head} className="px-6 py-5 font-medium">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {institutions.map((inst) => (
              <motion.tr 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                key={inst._id}
                className="hover:bg-white/5 transition-colors group"
              >
                {/* Institution Name & Code */}
                <td className="px-6 py-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Building2 size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 onClick={() => navigate(`/institution/${inst._id}/dashboard`)} 
                        className="font-semibold cursor-pointer hover:text-blue-400 transition-colors">
                      {inst.name}
                    </h3>
                    <p className="text-xs text-gray-500">{inst.code}</p>
                  </div>
                </td>

                <td className="px-6 py-4 text-gray-300">{inst.organizationType}</td>
                <td className="px-6 py-4 text-gray-300">{inst.email}</td>
                <td className="px-6 py-4 text-gray-300">{inst.phone}</td>
                
                {/* Status Badge */}
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border 
                    ${inst.status === "ACTIVE" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : 
                      inst.status === "INACTIVE" ? "bg-amber-500/10 text-amber-400 border-amber-500/20" : 
                      "bg-red-500/10 text-red-400 border-red-500/20"}`}>
                    {inst.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    {[ { icon: Eye, action: () => navigate(`/institution/${inst._id}/dashboard`), color: "hover:text-blue-400" },
                       { icon: Pencil, action: () => {}, color: "hover:text-amber-400" },
                       { icon: Power, action: () => {}, color: "hover:text-red-400" } ].map((btn, i) => (
                      <button key={i} onClick={btn.action} className={`p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all ${btn.color}`}>
                        <btn.icon size={16} />
                      </button>
                    ))}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}