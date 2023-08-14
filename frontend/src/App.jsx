import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <Grid templateRows={"auto 1fr auto"} templateColumns={"1fr"} minH={"100vh"}>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Home />
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  );
};
export default App;
