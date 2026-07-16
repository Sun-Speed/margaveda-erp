import { Bell, Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import OrganizationSwitcher from "./OrganizationSwitcher";
import ProfileMenu from "./ProfileMenu";
import NotificationMenu from "./NotificationMenu";

export default function Header() {
  return (
    <header className="h-[72px] bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6 transition-colors duration-300">
      <div className="flex items-center gap-5">

    <OrganizationSwitcher />

    <div className="flex items-center gap-2">

        <Search size={18} />

        <input
            placeholder="Search..."
            className="
                outline-none
                bg-transparent
                text-sm
            "
        />

    </div>

</div>

      <div className="flex items-center gap-5">
        <ThemeToggle />

       <NotificationMenu />

        <ProfileMenu />
      </div>
    </header>
  );
}
