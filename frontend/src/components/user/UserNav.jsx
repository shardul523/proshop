import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { toast } from "react-hot-toast";
import { logout } from "../../services/authApi";

import { useDispatch } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";

import { unauthenticate } from "./authSlice";

function UserNav({ name }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const popoverRef = useRef();

  // useEffect(() => {
  //   popoverRef.current.addEventListener("click", (e) => {
  //     console.log(popoverRef.current);
  //     console.log(e.target);
  //     if (e.target !== popoverRef.current) setIsOpen(false);
  //   });
  // }, []);

  const onLogoutHandler = async () => {
    try {
      await logout();
      dispatch(unauthenticate());
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success("User logged Out successfully!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="relative">
      <button
        className="text-lg hover:bg-primary-700 py-1 px-2 rounded-lg flex items-center gap-1"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <FaUser />
        {name}
        <IoMdArrowDropdown />
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-0 mt-2 py-2 w-40 bg-secondary-100 border rounded shadow-lg`}
        ref={popoverRef}
      >
        <Link
          to={"/profile"}
          className="block px-4 py-2 text-secondary-800 hover:bg-primary-500 hover:text-secondary-50"
        >
          Profile
        </Link>
        <button
          onClick={onLogoutHandler}
          className="block px-4 py-2 text-secondary-800 hover:bg-primary-500 hover:text-secondary-50 w-full text-left"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
export default UserNav;
