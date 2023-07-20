import { Box, Container, Flex, Center } from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box>
      <Container>
        <Flex flexDir={"column"}>
          <Center>ProShop &copy; {currentYear}</Center>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
