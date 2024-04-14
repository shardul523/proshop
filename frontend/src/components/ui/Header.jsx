import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import Hamburger from "./Hamburger";
import Navbar from "./Navbar";
import Navlink from "./Navlink";
import Badge from "../common/Badge";
import UserNav from "../user/UserNav";
import AdminNav from "../admin/AdminNav";

import { useAllItemsQty } from "../../hooks";
import { useProfile } from "../../hooks/userHooks";
import logo from "../../assets/logo.png";
import SearchBox from "./SearchBox";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const allQty = useAllItemsQty();
  const { auth, user } = useProfile();

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <header className="bg-primary-600 text-secondary-200 sticky top-0 z-50">
      <div className="sm:flex justify-between items-center lg:mx-auto py-3 space-y-7 sm:space-y-0 px-10 max-w-screen-xl gap-5">
        <div className="flex justify-between items-center">
          <Link to={"/"} className="text-xl flex items-center">
            <img src={logo} alt="brand" /> <span>ProShop</span>
          </Link>
          <Hamburger isOpen={isOpen} toggleOpen={toggleOpen} />
        </div>
        <SearchBox />
        <Navbar isOpen={isOpen}>
          <ul className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-5 space-y-5 sm:space-y-0 ml-3">
            <li className="relative">
              <Navlink to={"/cart"}>
                <FaShoppingCart /> Cart
              </Navlink>
              {allQty > 0 && <Badge>{allQty}</Badge>}
            </li>
            {auth?.isLoggedIn && user?.isAdmin && (
              <li>
                <AdminNav />
              </li>
            )}
            <li>
              {!auth?.isLoggedIn || !user ? (
                <Navlink to={"/sign-in"}>
                  <FaUser /> Sign In
                </Navlink>
              ) : (
                <UserNav name={user.name} />
              )}
            </li>
          </ul>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
