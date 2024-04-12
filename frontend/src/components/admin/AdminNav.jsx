import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { IoMdArrowDropdown } from "react-icons/io";

function AdminNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={
            "cursor-pointer flex gap-2 items-center text-lg hover:bg-primary-700 px-2 py-1 rounded-lg"
          }
        >
          <span>Admin</span>
          <IoMdArrowDropdown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="p-0">
          <Link className="dropdown-link w-full rounded" to={"/admin/products"}>
            Products
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0">
          <Link className="dropdown-link w-full rounded" to={"/admin/orders"}>
            Orders
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0">
          <Link className="dropdown-link w-full rounded" to={"/admin/users"}>
            Users
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    // <Nav navTitle={"Admin Menu"}>
    //   <Link className="dropdown-link" to={"/admin/products"}>
    //     Products
    //   </Link>
    //   <Link className="dropdown-link" to={"/admin/orders"}>
    //     Orders
    //   </Link>
    //   <Link className="dropdown-link" to={"/admin/users"}>
    //     Users
    //   </Link>
    // </Nav>
  );
}
export default AdminNav;
