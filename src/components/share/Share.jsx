import "./share.css";
import userImage from "../../assets/1.jpg";
import Image from "../../assets/3.png";
import Friend from "../../assets/4.png";
import Map from "../../assets/5.png";

function Share() {
  return (
    <div className="share__component">
      <div className="share__container">
        <div className="top">
          <img src={userImage} alt="" srcset="" />
          <input type="text" placeholder="What's on you mind?" />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button className="share__btn">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
