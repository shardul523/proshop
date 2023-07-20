import { Button, ButtonGroup } from "@chakra-ui/react";
import { FaUser, FaShoppingCart } from "react-icons/fa";

const NavLinks = () => {
  return (
    <>
      <Button
        leftIcon={<FaShoppingCart />}
        colorScheme="teal"
        w={"fit-content"}
      >
        Cart
      </Button>
      <Button leftIcon={<FaUser />} colorScheme="teal" w={"fit-content"}>
        Sign In
      </Button>
    </>
  );
};

export default NavLinks;
