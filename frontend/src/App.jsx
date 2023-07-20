import { Container, Heading } from "@chakra-ui/react";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Container as={"main"}>
        <Heading size={"sm"}>Welcome to ProShop</Heading>
      </Container>
      <Footer />
    </>
  );
};
export default App;
