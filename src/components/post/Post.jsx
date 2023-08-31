import React, { useState, useEffect } from "react";
import axios from "axios";
import "./post.css";

function Post() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    userId: "9b12d8e1-75b4-44e9-939f-e35807a27d35", // ID user nalaina tao am mock data
  });

  const API_URL = "http://localhost:8080";

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API_URL}/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleNewPostChange = (event) => {
    const { name, value } = event.target;
    setNewPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNewPostSubmit = async () => {
    try {
      const response = await axios.put(`${API_URL}/posts`, newPost);
      console.log("New post created:", response.data);
      fetchPosts();
      setNewPost({
        title: "",
        content: "",
        userId: "9b12d8e1-75b4-44e9-939f-e35807a27d35", // ID user nalaina tao am mock data
      });
    } catch (error) {
      console.error("Error creating new post:", error);
    }
  };

  return (
    <div>
      <div className="allPostContainer">
        <div className="eachPostContainer">
          <div>
            {posts.map((post) => (
              <div key={post.id}>
                <div className="postItem">
                  <h3>{post.user.username}</h3>
                  {post.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="newPostContainer">
        <h2>Create New Post</h2>
        <input
          type="text"
          placeholder="Post title"
          name="title"
          value={newPost.title}
          onChange={handleNewPostChange}
        />
        <textarea
          placeholder="Content"
          name="content"
          value={newPost.content}
          onChange={handleNewPostChange}
        />
        <button onClick={handleNewPostSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Post;
