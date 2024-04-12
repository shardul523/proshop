import { FaArrowLeft } from "react-icons/fa6";

import LinkButton from "./LinkButton";

function BackButton() {
  return (
    <LinkButton to={-1} variant={"neutral-rounded"}>
      <FaArrowLeft />
    </LinkButton>
  );
}

export default BackButton;
