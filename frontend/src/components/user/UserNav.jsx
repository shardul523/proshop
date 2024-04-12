import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMdArrowDropdown } from "react-icons/io";

import { unauthenticate } from "./authSlice";
import { logout } from "../../services/authApi";

function UserNav({ name }) {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer text-lg hover:bg-primary-700 py-1 px-2 rounded-lg flex items-center gap-1">
          <FaUser />
          <span>{name}</span>
          <IoMdArrowDropdown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuItem className="p-0">
          <Link className="dropdown-link w-full rounded" to={"/profile"}>
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0">
          <button
            className="w-full dropdown-link rounded text-left"
            onClick={onLogoutHandler}
          >
            Logout
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    // <Nav
    //   navTitle={
    //     <>
    //       <FaUser />
    //       {name}
    //     </>
    //   }
    // >
    //   <Link to={"/profile"} className="dropdown-link">
    //     Profile
    //   </Link>
    //   <button
    //     onClick={onLogoutHandler}
    //     className="dropdown-link w-full text-left"
    //   >
    //     Logout
    //   </button>
    // </Nav>
  );
}
export default UserNav;
