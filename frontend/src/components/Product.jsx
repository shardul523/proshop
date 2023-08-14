import {
  Card,
  CardBody,
  Image,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";

const Product = ({ product }) => (
  <Card maxW={"container.md"}>
    <CardBody
      display={"flex"}
      flexDir={"column"}
      justifyContent={"space-around"}
    >
      <ChakraLink href="#">
        {console.log(product.image)}
        <Image src={product.image} />
      </ChakraLink>
      <ChakraLink href="#">
        <Text color={"teal.600"} fontWeight={"bold"}>
          {product.name}
        </Text>
      </ChakraLink>
      <Text color={"teal.700"}>${product.price}</Text>
    </CardBody>
  </Card>
);

export default Product;
