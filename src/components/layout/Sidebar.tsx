import {
  CheckSquare,
  FolderKanban,
  LayoutDashboard,
  Settings,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Tasks", icon: CheckSquare, href: "/tasks" },
  { label: "Projects", icon: FolderKanban, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 border-r">
      <nav className="flex flex-col p-4">
        {navItems.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            className="flex items-center gap-2 rounded-md p-2 hover:bg-muted">
            <Icon className="size-5" />
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
