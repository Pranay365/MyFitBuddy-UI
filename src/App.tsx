import * as React from "react";
import Header from "./Header";
import Login from "./Login";
import Workout from "./Workout";
import WorkoutHistory from "./WorkoutHistory";
import { Routes, Route } from "react-router-dom";
import Signup from "./Register";
const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        {/* @ts-ignore */}
        <Route path="/" element={<Login />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/workout_history" element={<WorkoutHistory />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
