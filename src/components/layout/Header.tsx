import HeaderActions from "./HeaderActions";
import HeaderSearch from "./HeaderSearch";
import UserProfile from "./UserProfile";

export default function Header() {
  return (
    <header className="flex h-[74px] items-center justify-between border-b border-[#E8ECF4] bg-white px-8">
      {/* Search */}
      <HeaderSearch />

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <HeaderActions />

        <UserProfile />
      </div>
    </header>
  );
}