import { useEffect, useRef, useState } from "react";
import {
  Bell,
  CheckCircle2,
  UserPlus,
  GraduationCap,
  IndianRupee,
} from "lucide-react";

export default function NotificationMenu() {
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Dummy Data (Later from API)

  const notifications = [
    {
      id: 1,
      title: "New Student Registered",
      message: "Rahul joined Degree College.",
      icon: GraduationCap,
      time: "2 min ago",
    },

    {
      id: 2,
      title: "Fee Received",
      message: "₹25,000 paid successfully.",
      icon: IndianRupee,
      time: "15 min ago",
    },

    {
      id: 3,
      title: "Teacher Added",
      message: "Anitha added to Science Department.",
      icon: UserPlus,
      time: "1 hour ago",
    },

    {
      id: 4,
      title: "Attendance Completed",
      message: "Today's attendance submitted.",
      icon: CheckCircle2,
      time: "Today",
    },
  ];

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="
                    relative
                    p-2
                    rounded-xl
                    hover:bg-gray-100
                    dark:hover:bg-gray-700
                    transition
                "
      >
        <Bell size={20} />

        {notifications.length > 0 && (
          <span
            className="
                                absolute
                                -top-1
                                -right-1
                                w-5
                                h-5
                                rounded-full
                                bg-red-600
                                text-white
                                text-xs
                                flex
                                items-center
                                justify-center
                            "
          >
            {notifications.length}
          </span>
        )}
      </button>

      {open && (
        <div
          className="
                            absolute
                            right-0
                            mt-3
                            w-96
                            rounded-2xl
                            bg-white
                            dark:bg-gray-800
                            border
                            shadow-xl
                            overflow-hidden
                            z-50
                        "
        >
          <div
            className="
                                flex
                                justify-between
                                items-center
                                p-4
                                border-b
                            "
          >
            <h2 className="font-bold">Notifications</h2>

            <button
              className="
                                    text-blue-600
                                    text-sm
                                "
            >
              Mark all read
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  className="
                                                w-full
                                                text-left
                                                p-4
                                                hover:bg-gray-100
                                                dark:hover:bg-gray-700
                                                transition
                                            "
                >
                  <div className="flex gap-3">
                    <div
                      className="
                                                        mt-1
                                                        text-blue-600
                                                    "
                    >
                      <Icon size={20} />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-medium">{item.title}</h3>

                      <p
                        className="
                                                            text-sm
                                                            text-gray-500
                                                            mt-1
                                                        "
                      >
                        {item.message}
                      </p>

                      <p
                        className="
                                                            text-xs
                                                            mt-2
                                                            text-gray-400
                                                        "
                      >
                        {item.time}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div
            className="
                                p-4
                                border-t
                                text-center
                            "
          >
            <button
              className="
                                    text-blue-600
                                    font-medium
                                "
            >
              View All Notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
