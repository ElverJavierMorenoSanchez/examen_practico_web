import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/students";

export const getStudents = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.error(error);
    return error.response.data || [];
  }
};

export const getStudent = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    console.log("🚀 ~ getStudent ~ response:", response);
    return response?.data;
  } catch (error) {
    console.error(error.response.data);
    return error.response.data || [];
  }
};

export const postStudent = async (student) => {
  try {
    const response = await axios.post(`${API_URL}`, student);
    return response?.data;
  } catch (error) {
    console.error(error.response.data);
    return error.response.data || [];
  }
};

export const putStudent = async (id, student) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, student);
    return response?.data;
  } catch (error) {
    console.error(error.response.data);
    return error.response.data || [];
  }
};

export const deleteStudent = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response?.data;
  } catch (error) {
    console.error(error.response.data);
    return error.response.data || [];
  }
};
