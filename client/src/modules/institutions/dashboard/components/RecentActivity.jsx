import { UserPlus, Building2, BookOpen, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function RecentActivity() {
  const activities = [
    { icon: UserPlus, title: "System Initialized", color: "text-blue-400" },
    { icon: GraduationCap, title: "Waitlist Enabled", color: "text-emerald-400" },
    { icon: Building2, title: "Institution Onboarded", color: "text-purple-400" },
    { icon: BookOpen, title: "Module Structure Ready", color: "text-amber-400" },
  ];

  return (
    <div className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl h-full">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">System Activity</h2>
        <p className="text-gray-400 text-sm mt-1">Real-time status updates.</p>
      </div>

      <div className="space-y-8 relative">
        {/* Timeline Line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-[1px] bg-white/10" />

        {activities.map((act, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="flex items-center gap-6 relative"
          >
            {/* Timeline Dot */}
            <div className={`w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center z-10 ${act.color}`}>
              <act.icon size={18} />
            </div>

            <div>
              <p className="font-medium text-white">{act.title}</p>
              <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Just now</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}