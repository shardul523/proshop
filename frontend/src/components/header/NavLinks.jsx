import { Button, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const NavLinks = () => (
  <>
    <LinkBox>
      <Button
        leftIcon={<FaShoppingCart />}
        colorScheme="teal"
        w={"fit-content"}
        onClick={() => navigate("/cart")}
      >
        <LinkOverlay as={RouterLink} to={"/cart"}>
          Cart
        </LinkOverlay>
      </Button>
    </LinkBox>

    <LinkBox>
      <Button
        leftIcon={<FaUser />}
        colorScheme="teal"
        w={"fit-content"}
        onClick={() => navigate("/sign-in")}
      >
        <LinkOverlay as={RouterLink} to={"/sign-in"}>
          Sign In
        </LinkOverlay>
      </Button>
    </LinkBox>
  </>
);

export default NavLinks;
