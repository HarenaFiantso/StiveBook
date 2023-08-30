import axios from "axios";
const host = "http://[::1]:8080";

export const getAllUsers = async () => {
  return await axios.get(
    host.concat('/users')
  );
}

export const getUserById = async (userUuid) => {
  return await axios.get(
    host.concat("/users/", userUuid)
  );
}

export const createUser = async (form) => {
  return await axios.post(
    host.concat("/users"),
    form
  );
}

export const updateUser = async (email, newData) => {
  return await axios.put(
    host.concat("/users"),
    { ...newData, email }
  );
}

export const getReaction = async (postUuid) => {
  return await axios.get(
    host.concat("/posts/", postUuid, "/reactions")
  )
}

export const sendReactionToPost = async (postUuid, data) => {
  return await axios.post(
    host.concat("/posts/", postUuid, "/reactions"),
    data
  );
}

export const deleteAReaction = async (postUuid, data) => {
  return await axios.delete(
    host.concat("/posts/", postUuid, "/reactions"),
    data
  )
}

export const getPosts = async () => {
  return await axios.get(
    host.concat("/posts")
  )
}

export const getPostById = async (uuid) => {
  return await axios.get(
    host.concat("/posts/", uuid)
  );
}

export const createPostOrUpdate = async (post) => {
  return await axios.post(
    host.concat("/posts"),
    post
  )
}

export const postComment = async (postId, content) => {
  return await axios.post(host.concat("/posts/", postId, "/comments"), { postId, content });
}

export const getCommentById = async (postId) => {
  return await axios.get(host.concat("posts/", postId, "/comments"));
}