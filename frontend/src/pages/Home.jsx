import { SimpleGrid, Heading, Text, Container } from "@chakra-ui/react";
import ProductItem from "../components/ProductItem";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:8000/api/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };

    fetchProducts();
  }, []);

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
