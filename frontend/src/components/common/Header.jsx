import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";
import Navlink from "./Navlink";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <header className="bg-slate-800 text-slate-200">
      <div className="sm:flex justify-between lg:mx-auto max-w-screen-lg px-4 py-3 space-y-7 sm:space-y-0">
        <div className="flex justify-between items-center">
          <Link to={"/"} className="text-xl flex items-center">
            <img src={logo} alt="brand" /> <span>ProShop</span>
          </Link>
          <Hamburger isOpen={isOpen} toggleOpen={toggleOpen} />
        </div>
        <Navbar isOpen={isOpen}>
          <ul className="sm:flex items-center sm:gap-8 space-y-5 sm:space-y-0 ml-3">
            <li>
              <Navlink to={"/cart"}>
                <FaShoppingCart /> Cart
              </Navlink>
            </li>
            <li>
              <Navlink to={"/sign-in"}>
                <FaUser /> Sign In
              </Navlink>
            </li>
          </ul>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
