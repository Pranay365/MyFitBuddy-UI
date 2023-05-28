import "./SCSS/home.scss";
import { setWantsLogin} from "./actions/login"
import {connect} from "react-redux";

 function Home(props:any) {
  return (
    <div className="home" style={{opacity:props.wantsToLogin?0.3:1,backgroundColor:"none"}}>
      <div className="home-intro">
        <div className="home-intro-header">
          <h1 className="intro-header-name">Fitnoter</h1>
          <h3 className="intro-header-description">
            One Stop Solution to your fitness tracking journey
          </h3>
          <p className="register">
          <button  className="btn btn-main">START NOW</button>
          </p>
          <p className="login">
            <span className="existing-customer">Already a member?</span>
            <button onClick={props.setWantsLogin} className="btn btn-login">SIGN IN</button>
          </p>
        </div>
      </div>
      <div className="intro-body">
        <ul className="feature">
          <li className="feature-item">
            <p className="intro-body-description">
              Choose from hundreds of workouts and track your calories
            </p>
          </li>
          <li className="feature-item">
            <p className="intro-body-description">
              Track your nutrition intake based on your customized diet
            </p>
          </li>
          <li className="feature-item">
            <p className="intro-body-description">
              Get AI generated statistics and feedback based on your daily
              activities and more...
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps=({login}:{login:any})=>{
  return {wantsToLogin:login.wantsToLogin}
}
const mapDispatchToProps=(dispatch:Function)=>{
 return {
   setWantsLogin:()=>dispatch(setWantsLogin())
 }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);