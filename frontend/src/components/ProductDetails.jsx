import {
  SimpleGrid,
  Image,
  Heading,
  Box,
  Divider,
  Text,
  Flex,
  Card,
  CardBody,
  Button,
} from "@chakra-ui/react";
import Rating from "./Rating";
import { useEffect, useState } from "react";

export default function ProductDetails({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `http://localhost:8000/api/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [productId]);

  if (!product) return;

  const inStock = product?.countInStock > 0;

  return (
    <SimpleGrid columns={[1, null, 3]} spacing={10}>
      <Image rounded={10} src={product.image} />
      <Flex flexDir={"column"} gap={5}>
        <Heading as={"h3"} size={"lg"}>
          {product.name}
        </Heading>
        <Divider />
        <Rating numReviews={product.numReviews} rating={product.rating} />
        <Divider />
        <Text>{product.description}</Text>
      </Flex>
      <Card maxW={"container.sm"}>
        <CardBody
          display={"flex"}
          flexDir={"column"}
          justifyContent={"space-around"}
        >
          <Flex justify={"space-between"}>
            <Text>Price:</Text>
            <Text>${product.price}</Text>
          </Flex>
          <Divider />
          <Flex justify={"space-between"}>
            <Text>Status:</Text>
            <Text>{inStock ? "In Stock" : "Out of Stock!"}</Text>
          </Flex>
          <Divider />
          <Button colorScheme="teal" isDisabled={!inStock}>
            Add to Cart
          </Button>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
}
