import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <Grid templateRows={"auto 1fr auto"} templateColumns={"1fr"} minH={"100vh"}>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Outlet />
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  );
};
export default App;
