import HeaderActions from "./HeaderActions";
import HeaderSearch from "./HeaderSearch";
import UserProfile from "./UserProfile";

export default function Header() {
  return (
    <header
      className="
        fixed
        top-0
        left-[305px]
        right-0
        z-30
        flex
        h-[74px]
        items-center
        justify-between
        border-b
        border-[#E8ECF4]
        bg-white
        px-8
      "
    >
      <HeaderSearch />

      <div className="flex items-center gap-4">
        <HeaderActions />

        <UserProfile />
      </div>
    </header>
  );
}