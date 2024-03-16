import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";
import Navlink from "./Navlink";
import logo from "../../assets/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <header className="bg-slate-800 text-slate-200">
      <div className="sm:flex justify-between lg:mx-auto max-w-screen-lg px-4 py-5 space-y-3 sm:space-y-0">
        <div className="flex justify-between">
          <div className="text-xl flex items-center">
            <img src={logo} alt="brand" /> <h1>ProShop</h1>
          </div>
          <Hamburger isOpen={isOpen} toggleOpen={toggleOpen} />
        </div>
        <Navbar isOpen={isOpen}>
          <ul className="sm:flex items-center gap-4 sm:gap-8 space-y-2 sm:space-y-0">
            <Navlink>
              <FaShoppingCart /> Cart
            </Navlink>
            <Navlink>
              <FaUser /> Sign In
            </Navlink>
          </ul>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
