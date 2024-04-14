import { Suspense } from "react";
import Loader from "./components/ui/Loader";
import { Outlet } from "react-router-dom";

function SuspenseLayout() {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
}

export default SuspenseLayout;
