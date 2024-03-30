import { NavLink } from "react-router-dom";
import Button from "./Button";

function LinkButton({ to, children, disabled, ...props }) {
  return (
    <NavLink to={disabled ? "#" : to}>
      <Button disabled={disabled} {...props}>
        {children}
      </Button>
    </NavLink>
  );
}
export default LinkButton;
