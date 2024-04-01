import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

import { clearCart } from "../components/cart/cartSlice";

import { createOrder } from "../services/orderApi";

export function useCreateNewOrder() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate: createNewOrder, status } = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      toast.success("Order created!");
      dispatch(clearCart());
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createNewOrder, status };
}
