import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Container from "./components/common/Container";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";

function App() {
  return (
    <div className=" grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <main className="my-5 overflow-auto">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
