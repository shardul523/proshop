import { HStack, Flex, Text } from "@chakra-ui/react";
import { FaStarHalfAlt, FaRegStar, FaStar } from "react-icons/fa";

export default function Rating({ rating, numReviews }) {
  let fullStars = Math.floor(rating);
  let hasHalfStar = rating - fullStars > 0;
  let emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const resultStars = [];
  let id = 0;

  while (fullStars-- > 0) resultStars.push(<FaStar key={id++} />);
  if (hasHalfStar) resultStars.push(<FaStarHalfAlt key={id++} />);
  while (emptyStars-- > 0) resultStars.push(<FaRegStar key={id++} />);

  return (
    <HStack>
      <Flex color={"gold"}>{[...resultStars]}</Flex>
      {numReviews && <Text fontSize={"xs"}>{`${numReviews} reviews`}</Text>}
    </HStack>
  );
}
