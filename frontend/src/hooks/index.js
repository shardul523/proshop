import { useSelector } from "react-redux";
import { useMutation, useQuery } from "@tanstack/react-query";

import { getItemQty, getAllItemsQty } from "../components/cart/cartSlice";
import { getUserProfile, login } from "../utils";

export const useItemQty = (item) => useSelector(getItemQty(item));

export const useAllItemsQty = () => useSelector(getAllItemsQty);

export const useLogin = () => {
  const { mutate: userLogin, status } = useMutation({
    mutationFn: login,
  });

  return { userLogin, status };
};

export const useProfile = () => {
  const {
    data: user,
    status,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUserProfile,
  });

  return { user, status, error };
};
