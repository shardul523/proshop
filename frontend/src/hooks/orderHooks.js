import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

import { clearCart } from "../components/cart/cartSlice";

import {
  createOrder,
  getOrderById,
  getMyOrders,
  getAllOrders,
} from "../services/orderApi";

export function useCreateNewOrder() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate: createNewOrder, status } = useMutation({
    mutationFn: createOrder,
    onSuccess: (order) => {
      toast.success("Order created!");
      dispatch(clearCart());
      navigate(`/orders/${order._id}`);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createNewOrder, status };
}

export function useGetOrderById(orderId) {
  const {
    data: order,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => getOrderById(orderId),
  });

  return { order, isPending, isError };
}

export function useMyOrders() {
  const {
    data: orders,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["orders", "mine"],
    queryFn: getMyOrders,
  });
  return { orders, isPending, isError };
}

export function useAllOrders() {
  const { data: allOrders, isPending } = useQuery({
    queryKey: ["orders"],
    queryFn: getAllOrders,
  });
  return { allOrders, isPending };
}
