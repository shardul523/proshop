import { useParams } from "react-router-dom";
import { Button, Flex } from "@chakra-ui/react";
import ProductDetails from "../components/ProductDetails";

export default function Product() {
  const { productId } = useParams();

  return (
    <Flex flexDir={"column"} gap={10} p={10}>
      <Button maxW={"fit-content"}>Go Back</Button>
      <ProductDetails productId={productId} />
    </Flex>
  );
}
