import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CheckoutContainer from "../components/order/CheckoutContainer";
import FormContainer from "../components/common/FormContainer";
import Form from "../components/common/Form";
import FormInput from "../components/common/FormInput";
import Button from "../components/common/Button";

import { saveShippingAddress } from "../components/cart/cartSlice";
import CheckoutSteps from "../components/order/CheckoutSteps";

function ShippingAddressPage() {
  const addressRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const countryRef = useRef();
  const postalRef = useRef();
  const dispatch = useDispatch();
  const shippingAddress = useSelector((state) => state.cart.shippingAddress);
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const data = {
      address: addressRef.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value,
      country: countryRef.current.value,
      postalCode: postalRef.current.value,
    };

    dispatch(saveShippingAddress(data));
    navigate("/payment");
  };

  return (
    <CheckoutContainer>
      <CheckoutSteps currStep={1} />
      <FormContainer formTitle={"Shipping Address"}>
        <Form onSubmit={onSubmitHandler}>
          <FormInput
            id={"address"}
            label={"Address"}
            inputRef={addressRef}
            defaultValue={shippingAddress?.address}
            required
          />
          <div className="grid grid-cols-2 gap-5">
            <FormInput
              id={"city"}
              label={"City"}
              inputRef={cityRef}
              defaultValue={shippingAddress?.city}
              required
            />
            <FormInput
              id={"state"}
              label={"State"}
              inputRef={stateRef}
              defaultValue={shippingAddress?.state}
              required
            />
            <FormInput
              id={"country"}
              label={"Country"}
              inputRef={countryRef}
              defaultValue={shippingAddress.country}
              required
            />
            <FormInput
              id={"postal"}
              label={"Postal Code"}
              inputRef={postalRef}
              defaultValue={shippingAddress.postalCode}
              required
            />
          </div>
          <Button>Continue</Button>
        </Form>
      </FormContainer>
    </CheckoutContainer>
  );
}

export default ShippingAddressPage;
