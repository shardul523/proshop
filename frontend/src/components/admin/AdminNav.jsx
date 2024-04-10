import { Link } from "react-router-dom";
import Nav from "../common/Nav";

function AdminNav() {
  return (
    <Nav navTitle={"Admin Menu"}>
      <Link className="dropdown-link" to={"/admin/productsList"}>
        Products
      </Link>
      <Link className="dropdown-link" to={"/admin/ordersList"}>
        Orders
      </Link>
      <Link className="dropdown-link" to={"/admin/usersList"}>
        Users
      </Link>
    </Nav>
  );
}
export default AdminNav;
