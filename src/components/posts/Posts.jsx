import Post from "../post/Post";
import "./posts.css";
import { get } from "../../utils/api";

function Posts() {
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
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
