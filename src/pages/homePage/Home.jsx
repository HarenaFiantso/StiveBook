import Navbar from "../../components/navbar/Navbar";
import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";
import "./home.css";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Leftbar />
        <div style={{ flex: 6 }}>
          <Share />
          <Posts />
        </div>
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
