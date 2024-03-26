import axios from "axios";
import constants from "./constants.json";

const { BASE_URL, USER_SIGNIN, USER_PROFILE, LOGOUT, USER_SIGNUP } = constants;

export async function signup({ name, email, password }) {
  try {
    await axios.post(`${BASE_URL}/${USER_SIGNUP}`, { name, email, password });
  } catch (err) {
    console.error(err);
    throw new Error("User could not be signed up");
  }
}

export async function login({ email, password }) {
  try {
    await axios.post(`${BASE_URL}/${USER_SIGNIN}`, {
      email,
      password,
    });
  } catch (err) {
    console.log(err);
    throw new Error("Error in Logging In");
  }
}

export async function getUserProfile() {
  const { data: serverRes } = await axios.get(`${BASE_URL}/${USER_PROFILE}`, {
    withCredentials: true,
  });

  const { user } = serverRes.data;
  return user;
}

export async function logout() {
  try {
    await axios.delete(`${BASE_URL}/${LOGOUT}`, { withCredentials: true });
  } catch (err) {
    console.error(err);
    throw new Error("User could not be logged out");
  }
}
