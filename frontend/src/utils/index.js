import axios from "axios";
import constants from "./constants.json";

const { BASE_URL, USER_SIGNIN, USER_PROFILE } = constants;

export function storeLocalCart(cart) {
  localStorage.setItem("cart", JSON.stringify({ cart }));
}

export function decimalFormatter(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

export async function login({ email, password }) {
  try {
    await axios.post(`${BASE_URL}/${USER_SIGNIN}`, {
      email,
      password,
    });
  } catch (err) {
    console.log(err);
  }
}

export async function getUserProfile() {
  const { data: serverRes } = await axios.get(`${BASE_URL}/${USER_PROFILE}`, {
    withCredentials: true,
  });
  console.log(serverRes);
  const { user } = serverRes.data;
  return user;
}
