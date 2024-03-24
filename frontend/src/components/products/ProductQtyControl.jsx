import { useDispatch, useSelector } from "react-redux";

import Divider from "../common/Divider";
import ProductQtyInput from "../cart/ProductQtyInput";
import Button from "../common/Button";
import LinkButton from "../common/LinkButton";

import {
  addItem,
  getItemQty,
  incrementQtyItem,
  decrementQtyItem,
} from "../cart/cartSlice";

function ProductQtyControl({ currProduct }) {
  const dispatch = useDispatch();
  const qty = useSelector(getItemQty(currProduct._id));

  const cartItem = {
    product: currProduct._id,
    unitPrice: currProduct.price,
    quantity: qty,
  };

  function addToCartHandler() {
    dispatch(addItem(cartItem));
  }

  function incrementItemHandler() {
    dispatch(incrementQtyItem(cartItem.product, currProduct.countInStock));
  }

  function decrementItemHandler() {
    dispatch(decrementQtyItem(cartItem.product));
  }

  return (
    <>
      <Divider />
      <div className="flex flex-col items-center gap-2">
        {qty > 0 ? (
          <>
            <ProductQtyInput
              qty={qty}
              increment={incrementItemHandler}
              decrement={decrementItemHandler}
            />
            <LinkButton to={"/cart"}>Go to Cart</LinkButton>
          </>
        ) : (
          <Button onClick={addToCartHandler}>Add To Cart</Button>
        )}
      </div>
    </>
  );
}
export default ProductQtyControl;
