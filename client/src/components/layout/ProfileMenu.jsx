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

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleLogout() {
    logout();

    navigate("/login", { replace: true });
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="
                    flex
                    items-center
                    gap-3
                    px-3
                    py-2
                    rounded-xl
                    hover:bg-gray-100
                    dark:hover:bg-gray-700
                    transition
                "
      >
        <div
          className="
                        w-10
                        h-10
                        rounded-full
                        bg-blue-600
                        text-white
                        flex
                        items-center
                        justify-center
                        font-semibold
                    "
        >
          {user?.firstName?.charAt(0).toUpperCase()}
        </div>

        <div className="text-left">
          <p className="font-medium">{user?.firstName}</p>

          <p className="text-xs text-gray-500">Administrator</p>
        </div>

        <ChevronDown size={18} />
      </button>

      {open && (
        <div
          className="
                            absolute
                            right-0
                            mt-3
                            w-64
                            rounded-2xl
                            border
                            bg-white
                            dark:bg-gray-800
                            shadow-xl
                            overflow-hidden
                            z-50
                        "
        >
          <div className="p-4 border-b">
            <h3 className="font-semibold">
              {user?.firstName} {user?.lastName}
            </h3>

            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>

          <button
            className="
                                w-full
                                flex
                                items-center
                                gap-3
                                px-4
                                py-3
                                hover:bg-gray-100
                                dark:hover:bg-gray-700
                            "
          >
            <User size={18} />
            My Profile
          </button>

          <button
            className="
                                w-full
                                flex
                                items-center
                                gap-3
                                px-4
                                py-3
                                hover:bg-gray-100
                                dark:hover:bg-gray-700
                            "
          >
            <KeyRound size={18} />
            Change Password
          </button>

          <hr />

          <button
            onClick={handleLogout}
            className="
                                w-full
                                flex
                                items-center
                                gap-3
                                px-4
                                py-3
                                text-red-600
                                hover:bg-red-50
                                dark:hover:bg-red-900/20
                            "
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
