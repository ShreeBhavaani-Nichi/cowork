import SidebarFooter from "./SidebarFooter";
import SidebarLogo from "./SidebarLogo";
import SidebarNav from "./SidebarNav";

export default function Sidebar() {
  return (
    <aside
      className="
        fixed
        left-0
        top-0
        z-40
        flex
        h-screen
        w-[305px]
        flex-col
        border-r
        border-[#E8ECF4]
        bg-white
      "
    >
      <SidebarLogo />

      <SidebarNav />

      <SidebarFooter />
    </aside>
  );
}