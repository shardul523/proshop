import { Link } from "react-router-dom";
import Nav from "../common/Nav";

function AdminNav() {
  return (
    <Nav navTitle={"Admin Menu"}>
      <Link className="dropdown-link" to={"/admin/products"}>
        Products
      </Link>
      <Link className="dropdown-link" to={"/admin/orders"}>
        Orders
      </Link>
      <Link className="dropdown-link" to={"/admin/users"}>
        Users
      </Link>
    </Nav>
  );
}
export default AdminNav;
