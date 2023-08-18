import {
  Card,
  CardBody,
  Image,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { Route, Link as RouterLink } from "react-router-dom";
import Rating from "./Rating";

const ProductItem = ({ product }) => (
  <Card maxW={"container.md"}>
    <CardBody
      display={"flex"}
      flexDir={"column"}
      justifyContent={"space-around"}
    >
      <ChakraLink as={RouterLink} to={`/products/${product._id}`}>
        {console.log(product.image)}
        <Image src={product.image} />
      </ChakraLink>
      <ChakraLink as={RouterLink} to={`/products/${product._id}`}>
        <Text color={"teal.600"} fontWeight={"bold"}>
          {product.name}
        </Text>
      </ChakraLink>
      <Rating rating={product.rating} numReviews={product.numReviews} />
      <Text color={"teal.700"}>${product.price}</Text>
    </CardBody>
  </Card>
);

export default ProductItem;
