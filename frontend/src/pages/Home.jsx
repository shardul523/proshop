import { SimpleGrid, Heading, Text, Container } from "@chakra-ui/react";
import products from "../products";
import ProductItem from "../components/ProductItem";

const Home = () => {
  return (
    <Container maxW={"container.lg"}>
      <Heading color={"teal.600"}>Latest Products</Heading>
      <SimpleGrid columns={[1, 3, 4, 4, 6]} spacing={5} py={10}>
        {products.map((product) => (
          <ProductItem product={product} key={product._id} />
        ))}
      </SimpleGrid>
    </Container>
  );
};
export default Home;
