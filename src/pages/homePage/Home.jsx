import Navbar from "../../components/navbar/Navbar";
import Post from "../../components/post/Post";
import Share from "../../components/share/Share";

import "./home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Share />
      <Post />
    </div>
  );
}

export default Home;
