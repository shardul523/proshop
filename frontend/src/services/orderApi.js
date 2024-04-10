import axios from "axios";
import constants from "./constants.json";

const { BASE_URL, ORDER_BASE } = constants;

export async function createOrder(cart) {
  try {
    const response = await axios.post(`${BASE_URL}/${ORDER_BASE}`, { cart });
    const { order } = response.data.data;
    return order;
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
}

export async function getOrderById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/${ORDER_BASE}/${id}`);
    const { order } = response.data.data;
    return order;
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
}

export async function getMyOrders() {
  try {
    const response = await axios.get(`${BASE_URL}/${ORDER_BASE}/my-orders`);
    const { orders } = response.data.data;
    return orders;
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
}

export async function getAllOrders() {
  try {
    const res = await axios.get(`${BASE_URL}/${ORDER_BASE}`);
    const { orders } = res.data.data;
    return orders;
  } catch (err) {
    console.error(err);
    throw new Error(err.message || err.error);
  }
}
