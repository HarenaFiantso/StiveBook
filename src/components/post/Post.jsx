import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./post.css";
import Comments from "../comments/Comments";
import { get } from "../../utils/api";

const Post = ({ post, user }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post._count.reactions);
  const [comments, setComments] = useState(post._count.comments);

  useEffect(() => {
    get(`posts/${post.id}/comments`)
      .then((response) => {
        setComments(response);
      })
      .catch((error) => {
        console.log("Error fetching comments:", error);
      });
  }, [post.id]);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={user.photo} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{user.username}</span>
              </Link>
              <span className="date">{post.createdAt}</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.content}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item" onClick={handleLike}>
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            {likeCount} Like(s)
          </div>

          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            {comments.length} Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
