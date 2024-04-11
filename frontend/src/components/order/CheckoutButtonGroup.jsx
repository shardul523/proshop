import Button from "../common/Button";
import LinkButton from "../common/LinkButton";

function CheckoutButtonGroup({ prev, onClick }) {
  return (
    <div className="flex justify-end gap-5 mt-5">
      <LinkButton to={prev}>Go Back</LinkButton>
      <Button type="submit" onClick={onClick}>
        Continue
      </Button>
    </div>
  );
}
export default CheckoutButtonGroup;
