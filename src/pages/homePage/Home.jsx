import Navbar from "../../components/navbar/Navbar";
import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";
import "./home.css";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    get("posts")
      .then((response) => {
        setPosts(response);
      })
      .catch((error) => {
        console.log("Error fetching posts:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Leftbar />
        <div style={{ flex: 6 }}>
          <Share />
          <Posts posts={posts} />
        </div>
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
