import { useState, useEffect } from "react";
import { get } from "../../utils/api";
import Post from "../post/Post";
import "./posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [userDetailsMap, setUserDetailsMap] = useState({});

  useEffect(() => {
    get("posts")
      .then((response) => {
        setPosts(response);
      })
      .catch((error) => {
        console.log("Error fetching posts:", error);
      });
  }, []);

  useEffect(() => {
    const getUserDetails = async (userId) => {
      try {
        const userResponse = await get(`users/${userId}`);
        setUserDetailsMap((prevMap) => ({
          ...prevMap,
          [userId]: userResponse,
        }));
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    posts.forEach((post) => {
      if (!userDetailsMap[post.userId]) {
        getUserDetails(post.userId);
      }
    });
  }, [posts, userDetailsMap]);

  return (
    <div className="posts">
      {posts.map((post) => {
        const userDetails = userDetailsMap[post.userId];
        if (userDetails) {
          return <Post post={post} user={userDetails} key={post.id} />;
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Posts;
