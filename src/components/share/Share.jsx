import "./share.css";
import userImage from "../../assets/1.jpg";
import Image from "../../assets/3.png";
import Friend from "../../assets/4.png";
import Map from "../../assets/5.png";
import { useContext } from "react";
import { UserContext } from "../../context/AuthContext.jsx";

function Share() {
  const { user } = useContext(UserContext);

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          {user ? (
              <img
                  src={user.photo || userImage}
                  alt=""
                  className="shareProfileImg"
              />
          ) : null}
          <input
            type="text"
            placeholder="What's on you mind?"
            className="shareInput"
          />
        </div>
        <hr />
        <div className="shareBottom">
          <div className="shareOptions">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="shareOption">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="shareOption">
              <img src={Map} alt="" />
              <span>Add place</span>
            </div>
            <div className="shareOption">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
