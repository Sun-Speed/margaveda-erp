import { Search, Command, Zap } from "lucide-react";
import OrganizationSwitcher from "./OrganizationSwitcher";
import ProfileMenu from "./ProfileMenu";
import NotificationMenu from "./NotificationMenu";

export default function Header() {
  return (
    // The backdrop-blur and border-b give it that "floating" glass look
    <header className="h-[72px] bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-6 sticky top-0 z-50">
      
      {/* Left Section: Branding & Context */}
      <div className="flex items-center gap-6">
        <OrganizationSwitcher />
        
        {/* The Search Bar - Deep, recessed look */}
        <div className="group flex items-center gap-3 px-4 py-2.5 bg-[#121212] border border-white/10 rounded-xl transition-all duration-500 w-72 hover:border-white/20 focus-within:w-96 focus-within:bg-[#1A1A1A] focus-within:border-indigo-500/50 focus-within:ring-4 focus-within:ring-indigo-500/10 shadow-2xl">
          <Search size={16} className="text-white/30 transition-colors group-focus-within:text-indigo-400" />
          <input
            placeholder="Explore MargaVeda..."
            className="outline-none bg-transparent text-sm text-white/80 placeholder:text-white/20 w-full"
          />
          <div className="flex items-center gap-0.5 border border-white/5 bg-[#1A1A1A] rounded-md px-1.5 py-0.5">
             <span className="text-[9px] font-bold text-white/30 uppercase">⌘K</span>
          </div>
        </div>
      </div>

      {/* Right Section: Enterprise Actions */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-[12px] font-medium text-white/40 hover:text-indigo-400 transition-colors">
          <Zap size={14} />
          <span>Status</span>
        </button>
        
        <NotificationMenu />
        
        {/* Subtle divider */}
        <div className="h-4 w-[1px] bg-white/10" />
        
        <ProfileMenu />
      </div>
    </header>
  );
}










// import { Search, Bell, Moon, Sun, ChevronDown } from "lucide-react";

// import Card from "@/components/ui/Card";
// import Button from "@/components/ui/Button";
// import IconButton from "@/components/ui/IconButton";
// import Input from "@/components/ui/Input";

// import { useTheme } from "@/contexts/ThemeContext";
// import { useInstitution } from "@/contexts/InstitutionContext";

// export default function Header() {
//   const { theme, toggleTheme } = useTheme();

//   const institutionContext = useInstitution?.();

//   const institution = institutionContext?.institution;

//   return (
//     <header
//       className="
//                 sticky
//                 top-0
//                 z-40
//                 bg-surface/90
//                 backdrop-blur-xl
//                 border-b
//                 border-border
//             "
//     >
//       <div
//         className="
//                     h-[var(--header-height)]
//                     px-6
//                     flex
//                     items-center
//                     justify-between
//                     gap-8
//                 "
//       >
//         {/* ================= Left ================= */}

//         <div
//           className="
//                         flex
//                         items-center
//                         gap-8
//                         min-w-0
//                     "
//         >
//           {/* Institution */}

//           <div
//             className="
//                             min-w-[220px]
//                             cursor-pointer
//                         "
//           >
//             <p
//               className="
//                                 text-xs
//                                 text-text-secondary
//                             "
//             >
//               Current Institution
//             </p>

//             <button
//               className="
//                                 flex
//                                 items-center
//                                 gap-2
//                                 mt-1
//                             "
//             >
//               <h2
//                 className="
//                                     font-semibold
//                                     text-text-primary
//                                     truncate
//                                 "
//               >
//                 {institution?.name || "Select Institution"}
//               </h2>

//               <ChevronDown size={16} />
//             </button>
//           </div>

//           {/* Search */}

//           <div className="w-[380px]">
//             <Input
//               placeholder="Search students, teachers, courses..."
//               icon={Search}
//             />
//           </div>
//         </div>

//         {/* ================= Right ================= */}

//         <div
//           className="
//                         flex
//                         items-center
//                         gap-2
//                     "
//         >
//           <IconButton
//             icon={theme === "dark" ? Sun : Moon}
//             variant="ghost"
//             onClick={toggleTheme}
//           />

//           <IconButton icon={Bell} badge={3} variant="ghost" />

//           <Button variant="ghost" className="gap-3">
//             <div
//               className="
//                                 w-10
//                                 h-10
//                                 rounded-full
//                                 bg-primary
//                                 text-white
//                                 flex
//                                 items-center
//                                 justify-center
//                                 font-semibold
//                             "
//             >
//               S
//             </div>

//             <div
//               className="
//                                 text-left
//                                 hidden
//                                 lg:block
//                             "
//             >
//               <p
//                 className="
//                                     text-sm
//                                     font-medium
//                                 "
//               >
//                 Sunil R
//               </p>

//               <p
//                 className="
//                                     text-xs
//                                     text-text-secondary
//                                 "
//               >
//                 Super Admin
//               </p>
//             </div>

//             <ChevronDown size={16} />
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// }
