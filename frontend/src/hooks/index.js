import { useSelector } from "react-redux";
import { getItemQty, getAllItemsQty } from "../components/cart/cartSlice";

export const useItemQty = (item) => useSelector(getItemQty(item));

export const useAllItemsQty = () => useSelector(getAllItemsQty);
