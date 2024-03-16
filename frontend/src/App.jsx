import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className=" grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <main className="lg:mx-auto max-w-screen-lg">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
