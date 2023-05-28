import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Workout from "./Workout";
import "./SCSS/App.scss";
import WorkoutHistory from "./WorkoutHistory";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import Signup from "./Register";

const App = ({ wantsToLogin}: { wantsToLogin?: any}) => {
  return (
    <div className="container">
      <Header />

      <Routes>
        {
          <Route
            path="/"
            element={
              <div className="home-content">
                <Home />
                <div className={`login-container login-container-${wantsToLogin?"visible":"invisible"}`}>
                  {/* @ts-ignore*/}
                  <Login />
                </div>
              </div>
            }
          />
        }
        {/* @ts-ignore
        <Route path="/" element={<Login />} /> */}
        <Route path="/workout" element={<Workout />} />
        <Route path="/workout_history" element={<WorkoutHistory />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};
const mapStateToProps = ({login}: {login:any}) => {
  console.log(login.wantsToLogin)
  return {
    wantsToLogin: login.wantsToLogin,
  };
};

export default connect(mapStateToProps)(App);
