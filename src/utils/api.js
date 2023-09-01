import axios from "axios";
import Cookies from "js-cookie";

const host = "http://localhost:8080";
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.interceptors.request.use((config) => {
    const token = Cookies.get('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

const post = async (url, body) => {
    const response = await axios.post(`${host}/${url}`, body);
    return response.data;
};

const put = async (url, body) => {
    const response = await axios.put(`${host}/${url}`, body);
    return response.data;
};

const get = async (url) => {
    const response = await axios.get(`${host}/${url}`);
    return response.data;
};

const remove = async (url) => {
    const response = await axios.delete(`${host}/${url}`);
    return response.data;
};

export { post, get, put, remove };
