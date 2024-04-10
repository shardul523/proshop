import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";

import Nav from "../common/Nav";

import { unauthenticate } from "./authSlice";
import { logout } from "../../services/authApi";

function UserNav({ name }) {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

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
      queryClient.invalidateQueries({
        queryKey: ["orders", "mine"],
      });
      toast.success("User logged Out successfully!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <Nav
      navTitle={
        <>
          <FaUser />
          {name}
        </>
      }
    >
      <Link to={"/profile"} className="dropdown-link">
        Profile
      </Link>
      <button
        onClick={onLogoutHandler}
        className="dropdown-link w-full text-left"
      >
        Logout
      </button>
    </Nav>
  );
}
export default UserNav;
