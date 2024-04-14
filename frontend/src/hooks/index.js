import { useSelector, useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { authenticate } from "../components/user/authSlice";
import { getItemQty, getAllItemsQty } from "../components/cart/cartSlice";
import { login, signup } from "../services/authApi";

export const useItemQty = (item) => useSelector(getItemQty(item));

export const useAllItemsQty = () => useSelector(getAllItemsQty);

export const useLogin = () => {
  const dispatch = useDispatch();

  const { mutate: userLogin, status } = useMutation({
    mutationFn: login,
    onSuccess: (userId) => {
      toast.success("User logged in successfully");
      dispatch(authenticate(userId));
    },
    onError: () => {
      toast.error("User could not be logged in");
    },
  });

  return { userLogin, status };
};

export const useSignup = () => {
  const dispatch = useDispatch();

  const { mutate: userSignup, status } = useMutation({
    mutationFn: signup,
    onSuccess: (userId) => {
      toast.success("User Signed up successfully");
      dispatch(authenticate(userId));
    },
    onError: () => {
      toast.error("User could not be signed up");
    },
  });

  return { userSignup, status };
};
