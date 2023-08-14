import {
  Box,
  Center,
  Container,
  useDisclosure,
  useBreakpointValue,
  IconButton,
  Collapse,
  ButtonGroup,
  Flex,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Box as="header" bg={"teal.500"} color={"white"}>
      <Container as={"nav"} maxW={"container.xl"}>
        <Box
          display={"flex"}
          justifyContent={isDesktop ? "space-around" : "space-between"}
          py={2}
        >
          <Center fontWeight={"bold"} fontSize={"xl"}>
            ProShop
          </Center>
          {isDesktop && (
            <ButtonGroup>
              <NavLinks />
            </ButtonGroup>
          )}
          {!isDesktop && (
            <IconButton
              icon={<GiHamburgerMenu />}
              colorScheme="teal"
              onClick={onToggle}
            />
          )}
        </Box>
        {!isDesktop && (
          <Collapse in={isOpen} animateOpacity>
            <Flex flexDirection={"column"} justify={"flex-start"}>
              <NavLinks />
            </Flex>
          </Collapse>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;
