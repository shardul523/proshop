import { NavLink } from "react-router-dom";
import Button from "./Button";

function LinkButton({ to, children, disabled, replace, ...props }) {
  return (
    <NavLink to={disabled ? "#" : to} replace={replace}>
      <Button disabled={disabled} {...props}>
        {children}
      </Button>
    </NavLink>
  );
}
export default LinkButton;
