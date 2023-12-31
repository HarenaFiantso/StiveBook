import "./leftbar.css";
import Friends from "../../assets/additionnal pics/1.png";
import Groups from "../../assets/additionnal pics/2.png";
import Market from "../../assets/additionnal pics/3.png";
import Watch from "../../assets/additionnal pics/4.png";
import Memories from "../../assets/additionnal pics/5.png";
import Events from "../../assets/additionnal pics/6.png";
import Gaming from "../../assets/additionnal pics/7.png";
import Gallery from "../../assets/additionnal pics/8.png";
import Videos from "../../assets/additionnal pics/9.png";
import Messages from "../../assets/additionnal pics/10.png";
import Tutorials from "../../assets/additionnal pics/11.png";
import Courses from "../../assets/additionnal pics/12.png";
import Fund from "../../assets/additionnal pics/13.png";

const Leftbar = () => {

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
