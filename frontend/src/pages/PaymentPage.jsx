import CheckoutSteps from "../components/order/CheckoutSteps";
import FormContainer from "../components/common/FormContainer";
import CheckoutContainer from "../components/order/CheckoutContainer";
import Button from "../components/common/Button";

function PaymentPage() {
  return (
    <CheckoutContainer>
      <CheckoutSteps currStep={2} />
      <FormContainer formTitle={"Payment Method"}>
        <form className="mt-5">
          <div className="space-x-2">
            <input type="radio" id="paypal" value={"paypal"} />
            <label htmlFor="paypal">PayPal</label>
          </div>
          <Button>Continue</Button>
        </form>
      </FormContainer>
    </CheckoutContainer>
  );
}
export default PaymentPage;
