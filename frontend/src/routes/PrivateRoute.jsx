import { Outlet, Navigate } from "react-router-dom";
import { useProfile } from "../hooks/userHooks";

function PrivateRoute() {
  const { auth } = useProfile();

  return auth.isLoggedIn ? <Outlet /> : <Navigate to={"/sign-in"} />;
}

export default PrivateRoute;
