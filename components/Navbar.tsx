import React from "react";
import { Search, ChevronDown, LayoutDashboard } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-6">
        {/* LOGO */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-indigo-500 flex items-center justify-center text-white font-bold">
            D
          </div>
          <span className="text-gray-900">
            DIGITAL<span className="text-indigo-600">VAULT</span>
          </span>
        </div>

        <div className="flex gap-10">
          {/* SEARCH BAR */}
          <div className="flex-1 max-w-2  xl min-w-2xl relative">
            <input
              type="text"
              placeholder="Search for bundles, templates, LUTs, presets..."
              className="w-full pl-4 pr-12 py-2.5 text-sm rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition">
              <Search size={18} />
            </button>
          </div>

          {/* RIGHT BUTTON */}
          <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
            <span className="text-sm font-medium flex items-center gap-1">
              <LayoutDashboard className="text-indigo-600" size={16} />
              Shop by Category
            </span>
          </button>
        </div>
      </div>

      {/* NAV LINKS */}
      <nav className="w-full ">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6 text-xs font-medium text-gray-700">
          <NavItem label="Video Bundles" />
          <NavItem label="Presets & LUTs" />
          <NavItem label="Templates" />
          <NavItem label="Graphics" />
          <NavItem label="Sound Effects" />
          <NavItem label="Courses" />
          <NavItem label="Freebies" isDropdown={false} />
        </div>
      </nav>
    </header>
  );
};

const NavItem = ({
  label,
  isDropdown = true,
}: {
  label: string;
  isDropdown?: boolean;
}) => {
  return (
    <div className="flex items-center gap-1 cursor-pointer hover:text-indigo-600 transition">
      <span>{label}</span>
      {isDropdown && <ChevronDown size={14} />}
    </div>
  );
};

export default Navbar;
