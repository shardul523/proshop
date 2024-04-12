import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function Nav({ navTitle, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="text-lg hover:bg-primary-700 py-1 px-2 rounded-lg flex items-center gap-1 z-50"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {navTitle}
        <IoMdArrowDropdown />
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute -right-2 mt-2 py-2 w-40 bg-secondary-100 border rounded shadow-lg `}
      >
        {children}
      </div>
    </div>
  );
}
export default Nav;
