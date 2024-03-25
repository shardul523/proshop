import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

function App() {
  return (
    <div className=" grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <main className="my-5 overflow-auto px-10">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
