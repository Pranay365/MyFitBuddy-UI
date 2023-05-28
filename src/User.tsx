import React, { useState } from "react";
import "./SCSS/user.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setWantsLogin } from "./actions/login";
const userIcon = require("./person-outline.svg");
type ChildProps = {
  className: string;
  isLoggedIn: boolean;
  openLoginDialog?: any;
};
const User: React.FC<ChildProps> = ({ className, isLoggedIn,openLoginDialog }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`${className} user`}
      onClick={(e) => setShow((show) => !show)}
    >
      {/*<Link to="/signup"><img src={userIcon}  /></Link>*/}
      <img src={userIcon} alt="user-icon" />
      <ul
        className="nav-list"
        style={{ display: `${show ? "block" : "none"}` }}
      >
        {!isLoggedIn && (
          <li className="list-item" onClick={openLoginDialog}>
            <Link className="nav-link" to="/">
              LOGIN
            </Link>
          </li>
        )}
        {!isLoggedIn && (
          <li className="list-item">
            <Link className="nav-link" to="/">
              SIGN UP
            </Link>
          </li>
        )}
        {isLoggedIn && (
          <li className="list-item">
            <Link className="nav-link" to="/workout_history">
              Workout tracker
            </Link>
          </li>
        )}
        {isLoggedIn && (
          <li className="list-item">
            <Link className="nav-link" to="/workout_history">
              Workout History
            </Link>
          </li>
        )}
        {isLoggedIn && (
          <li className="list-item">
            <Link className="nav-link" to="/nutrition_history">
              Nutrition History
            </Link>
          </li>
        )}
        {isLoggedIn && (
          <li className="list-item">
            <Link className="nav-link" to="/health_stats">
              {" "}
              Health Stats
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
const mapStateToProps = ({ login }: { login: any }) => {
  return {
    isLoggedIn: login.isLoggedIn,
  };
};
const mapDispatchToProps=(dispatch:any)=>{
  return {
    openLoginDialog:(e:any)=>dispatch(setWantsLogin())
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(User);
