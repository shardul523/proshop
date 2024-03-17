import { NavLink as RouterLink } from "react-router-dom";

function Navlink({ children, to }) {
  return (
    <RouterLink
      className="flex items-center gap-2 text-lg hover:bg-slate-500 py-1 px-2 rounded-lg"
      to={to}
    >
      {children}
    </RouterLink>
  );
}

export default Navlink;
