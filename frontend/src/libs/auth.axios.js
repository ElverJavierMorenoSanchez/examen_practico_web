import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const signin = async ({ email, password }) => {
  console.log(API_URL);
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, {
      email,
      contrasena: password,
    });
    console.log(response);
    return response?.data;
  } catch (error) {
    console.error(error.response.data);
    return error.response.data || [];
  }
};
