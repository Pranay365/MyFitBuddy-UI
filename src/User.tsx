import React,{useState} from "react";
import "./user.scss";
import { Link } from "react-router-dom";
const userIcon = require("./person-outline.svg");
type ChildProps = {
  className: string;
};
const User: React.FC<ChildProps> = ({ className }) => {
  const [show,setShow]=useState(false);
  return (
    <div className={`${className} user`} onClick={(e)=>setShow((show)=>!show)}>
      {/*<Link to="/signup"><img src={userIcon}  /></Link>*/}
      <img src={userIcon} alt="user-icon" />
      <ul style={{display:`${show?"block":"none"}`}}>
       <li><Link to="/workout_history">Workout History</Link></li>
       <li><Link to="/nutrition_history">Nutrition History</Link></li>
       <li><Link to="/health_stats"> Health Stats</Link></li>
      </ul>
    </div>
    
  );
};

export default User;
