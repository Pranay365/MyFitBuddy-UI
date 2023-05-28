import { useRef, useState } from "react";
import { useCanvas } from "./utility/chart";
import { connect } from "react-redux";
import fetchStats from "./actions/stats";
import "./SCSS/canvas.scss";
function Canvas({
  stats,
  fetchStats,
}: {
  stats: { isLoading: boolean; stats: { xData: string[]; yData: string[] } };
  fetchStats: any;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [interval, setInterval] = useState({ startDate: "", endDate: "" });
  useCanvas(canvasRef, stats.stats.xData, stats.stats.yData);
  function handleChange(e: any) {
    setInterval((interval) => {
      return { ...interval, [e.target.name]: e.target.value };
    });
  }
  function handleClick(e: any) {
    fetchStats("test", "bench", interval.startDate, interval.endDate);
  }
  return (
    <div className="canvas-container">
      <span className="page-description">
        The graph below shows your overall progress for a particular workout
        between start date to end date
      </span>
      <div className="date-picker">
        <input
          className="startDate"
          type="date"
          placeholder="start date"
          name="startDate"
          value={interval.startDate}
          onChange={handleChange}
        />
        <input
          className="endDate"
          type="date"
          name="endDate"
          placeholder="end date"
          value={interval.endDate}
          onChange={handleChange}
        />
        <button className="btn-apply" onClick={handleClick}>
          Apply &rarr;
        </button>
      </div>
      <canvas
        width={window.innerWidth / 2}
        height={window.innerHeight / 2}
        ref={canvasRef}
        style={{
          margin: "0",
          border: "2px solid #94a3b8",
        }}
        id="history"
      ></canvas>
      <span className="workout-stats-description">
        Your stats below is below expectation. No need to worry you can do
        better
      </span>
    </div>
  );
}
const mapStateToProps = ({ workoutStats }: any) => {
  return { stats: workoutStats };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchStats: (
      id: string,
      workoutName: string,
      startDate: string,
      endDate: string
    ) => dispatch(fetchStats(id, workoutName, startDate, endDate)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
