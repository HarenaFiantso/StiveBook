import axios from "axios";
import { StorageProvider } from "./storage";

const fetch = axios.create({
  baseURL: "http://[::1]:8080"
});

const getAllUsers = async () => {
  return await fetch.get("/users", {
    headers: {
      Authorization: "Bearer" + StorageProvider.getItem("self").token
    }
  })
}

const getAllPosts = async () => {
  return await fetch.get("/posts", {
    headers: {
      Authorization: "Bearer" + StorageProvider.getItem("self").token
    }
  })
}

const getUserById = async (id) => {
  return await fetch.get(`/users/${id}`, {
    headers: {
      Authorization: "Bearer " + StorageProvider.getItem("self").token
    }
  })
}

const getPostComments = async (postId) => {
  return await fetch.get(`/posts/${postId}/comments`, {
    headers: {
      Authorization: "Bearer " + StorageProvider.getItem("self").token
    }
  })
}

const getPostReactions = async (postId) => {
  return await fetch.get(`/posts/${postId}/reactions`, {
    headers: {
      Authorization: "Bearer " + StorageProvider.getItem("self").token
    }
  })
}

const postReactions = async (postId, selfId) => {
  return await fetch.post(`/posts/${postId}/reactions`, {
    userId: selfId,
    type: 'LIKE'
  }, {
    headers: {
      Authorization: "Bearer " + StorageProvider.getItem("self").token
    }
  })
}

const postComments = async (postId, selfId, comment) => {
  return await fetch.put(`/posts/${postId}/comments`, {
    content: comment,
    userId: selfId
  }, {
    headers: {
      Authorization: "Bearer " + StorageProvider.getItem("self").token
    }
  }
  )
}

const postLogin = async (userInfo) => {
  return await fetch.post("/users/login", userInfo)
}

const postUser = async (user) => {
  return await fetch.post("/users", user);
}

const editUser = async (user) => {
  return await fetch.put("/users", user, {
    headers: {
      Authorization: "Bearer " + StorageProvider.getItem("self").token
    }
  })
}

const sendPost = async (post) => {
  return await fetch.put("/posts", post, {
    headers: {
      Authorization: "Bearer " + StorageProvider.getItem("self").token
    }
  })
}

export {
  getAllPosts,
  getAllUsers,
  getUserById,
  getPostComments,
  getPostReactions,
  postReactions,
  postComments,
  postLogin,
  postUser,
  editUser,
  sendPost
}