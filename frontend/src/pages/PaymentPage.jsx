import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import CheckoutSteps from "../components/order/CheckoutSteps";
import FormContainer from "../components/common/FormContainer";
import Form from "../components/common/Form";
import FormRadioInput from "../components/common/FormRadioInput";
import CheckoutContainer from "../components/order/CheckoutContainer";
import Button from "../components/common/Button";

import { savePaymentMethod } from "../components/cart/cartSlice";

function PaymentPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currPaymentMethod = useSelector((state) => state.cart.paymentMethod);
  const [selectedOption, setSelectedOption] = useState(currPaymentMethod);

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(savePaymentMethod(selectedOption));

    navigate("/checkout/place-order");
  };

  return (
    <CheckoutContainer>
      <CheckoutSteps currStep={2} />
      <FormContainer formTitle={"Payment Method"}>
        <Form onSubmit={onSubmitHandler}>
          <div className="flex gap-10 flex-wrap ml-3">
            <FormRadioInput
              label={"PayPal"}
              value={"PayPal"}
              name={"payment"}
              selectedOption={selectedOption}
              handleChange={handleChange}
            />
            <FormRadioInput
              label={"Net Banking"}
              value={"Net Banking"}
              name={"payment"}
              selectedOption={selectedOption}
              handleChange={handleChange}
            />
          </div>
          <div>
            <Button type="submit">Continue</Button>
          </div>
        </Form>
      </FormContainer>
    </CheckoutContainer>
  );
}
export default PaymentPage;
