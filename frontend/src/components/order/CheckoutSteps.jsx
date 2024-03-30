import LinkButton from "../common/LinkButton";

function CheckoutSteps({ currStep }) {
  return (
    <nav className="flex mb-5 items-center">
      <LinkButton variant={"pill"}>Shipping</LinkButton>
      <div
        className={`flex-1 ${
          currStep < 2 ? "bg-secondary-300" : "bg-primary-500"
        } h-0.5`}
      />
      <LinkButton
        disabled={currStep < 2}
        variant={currStep < 2 ? "pillDisabled" : "pill"}
      >
        Payment
      </LinkButton>
      <div
        className={`flex-1 ${
          currStep < 3 ? "bg-secondary-300" : "bg-primary-500"
        } h-0.5`}
      />
      <LinkButton
        disabled={currStep < 3}
        variant={currStep < 3 ? "pillDisabled" : "pill"}
      >
        Place Order
      </LinkButton>
    </nav>
  );
}
export default CheckoutSteps;
