import axios from "axios";
import constants from "./constants.json";

const { BASE_URL, CREATE_ORDER } = constants;

export async function createOrder(cart) {
  try {
    await axios.post(`${BASE_URL}/${CREATE_ORDER}`, { cart });
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
}
