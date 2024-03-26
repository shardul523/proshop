import { useSelector, useDispatch } from "react-redux";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { authenticate, unauthenticate } from "../components/user/authSlice";
import { getItemQty, getAllItemsQty } from "../components/cart/cartSlice";
import { getUserProfile, login, signup } from "../services/authApi";
import { useEffect } from "react";

export const useItemQty = (item) => useSelector(getItemQty(item));

export const useAllItemsQty = () => useSelector(getAllItemsQty);

export const useLogin = () => {
  const dispatch = useDispatch();

  const { mutate: userLogin, status } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success("User logged in successfully");
      dispatch(authenticate());
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
    onSuccess: () => {
      toast.success("User Signed up successfully");
      dispatch(authenticate());
    },
    onError: () => {
      toast.error("User could not be signed up");
    },
  });

  return { userSignup, status };
};

export const useProfile = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    data: user,
    status,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUserProfile,
    enabled: auth?.isLoggedIn,
  });

  const isLoading = auth.isLoggedIn ? status === "pending" : false;

  useEffect(() => {
    if (error) dispatch(unauthenticate());
  }, [error, dispatch]);

  return { auth, user, isLoading, error };
};
