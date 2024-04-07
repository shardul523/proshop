import axios from "axios";
import constants from "./constants.json";

const { BASE_URL, USER_PROFILE } = constants;

export async function updateUserDetails(details) {
  try {
    await axios.patch(`${BASE_URL}/${USER_PROFILE}`, details, {
      withCredentials: true,
    });
  } catch (err) {
    console.error(err);
    throw new Error("User Details could not be updated!");
  }
}
