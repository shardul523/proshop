import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";
import Navlink from "./Navlink";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Badge from "./Badge";
import { useAllItemsQty, useProfile } from "../../hooks";
import UserNav from "../user/UserNav";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const allQty = useAllItemsQty();
  const { auth, user } = useProfile();

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <header className="bg-primary-600 text-secondary-200">
      <div className="sm:flex justify-between lg:mx-auto max-w-screen-xl px-4 py-3 space-y-7 sm:space-y-0">
        <div className="flex justify-between items-center">
          <Link to={"/"} className="text-xl flex items-center">
            <img src={logo} alt="brand" /> <span>ProShop</span>
          </Link>
          <Hamburger isOpen={isOpen} toggleOpen={toggleOpen} />
        </div>
        <Navbar isOpen={isOpen}>
          <ul className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-8 space-y-5 sm:space-y-0 ml-3">
            <li className="relative">
              <Navlink to={"/cart"}>
                <FaShoppingCart /> Cart
              </Navlink>
              {allQty > 0 && <Badge>{allQty}</Badge>}
            </li>
            <li>
              {!auth?.isLoggedIn && (
                <Navlink to={"/sign-in"}>
                  <FaUser /> Sign In
                </Navlink>
              )}
              {auth?.isLoggedIn && user && <UserNav name={user.name} />}
            </li>
          </ul>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
