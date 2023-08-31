import axios from "axios";
import Cookies from "js-cookie";

const host = "http://localhost:8080";
const token = Cookies.get('token');

const post = async (url, body) => {
    const response = await axios.post(`${host}/${url}`, body, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
        },
    });
    console.log(response.data)
    return response.data;
};

const put = async (url, body) => {
    const response = await axios.put(`${host}/${url}`, body, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
        },
    });
    return response.data;
};

const get = async (url) => {
    const response = await axios.get(`${host}/${url}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
        },
    });
    return response.data;
};

const remove = async (url) => {
    const response = await axios.delete(`${host}/${url}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
        },
    });
    return response.data;
};


export {post, get, put, remove};

