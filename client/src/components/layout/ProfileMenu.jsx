import { useState, useRef, useEffect } from "react";
import { User, KeyRound, LogOut, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export default function ProfileMenu() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 transition-colors"
      >
        <div className="w-9 h-9 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-semibold text-sm border border-indigo-500/30">
          {user?.firstName?.charAt(0).toUpperCase()}
        </div>
        <div className="text-left hidden md:block">
          <p className="font-medium text-sm text-white/90">{user?.firstName}</p>
          <p className="text-[10px] text-white/40 uppercase tracking-wider">Admin</p>
        </div>
        <ChevronDown size={14} className="text-white/40" />
      </button>

      {open && (
  <div 
    className="absolute right-0 mt-2 w-64 bg-[#121212] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200"
  >
    <div className="p-4 border-b border-white/5">
      <h3 className="font-semibold text-white/90">{user?.firstName} {user?.lastName}</h3>
      <p className="text-xs text-white/40">{user?.email}</p>
    </div>

    <div className="p-1">
      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:bg-white/5 rounded-lg transition-colors">
        <User size={16} /> My Profile
      </button>
      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:bg-white/5 rounded-lg transition-colors">
        <KeyRound size={16} /> Change Password
      </button>
      
      <div className="h-[1px] bg-white/5 my-1" />
      
      <button
        onClick={handleLogout}
        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
      >
        <LogOut size={16} /> Logout
      </button>
    </div>
  </div>
)}
    </div>
  );
}