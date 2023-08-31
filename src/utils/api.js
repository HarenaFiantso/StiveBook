import axios from "axios";
import Cookies from "js-cookie";

const host = "http://localhost:8080";
const token = Cookies.get('token');

const post = async (url, body) => {
  try {
    const response = await axios.post(`${host}/${url}`, body, {
      headers: token ? { Authorization: `Bearer ${token}` } : '',
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const put = async (url, body) => {
  try {
    const response = await axios.put(`${host}/${url}`, body, {
      headers: token ? { Authorization: `Bearer ${token}` } : '',
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const get = async (url) => {
  try {
    const response = await axios.get(`${host}/${url}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : '',
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const remove = async (url) => {
  try {
    const response = await axios.delete(`${host}/${url}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : '',
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { post, get, put, remove };