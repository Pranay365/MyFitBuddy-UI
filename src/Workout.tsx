import Input from "./Input";
import "./form.scss";
import "./workout.scss";
import { connect } from "react-redux";
import Spinner from "./Spinner/Spinner";
import { addToCart, saveWorkouts } from "./actions/workout";
import { handleChange } from "./actions/render";
function Workout({
  workouts = [],
  userid,
  saveWorkouts,
  addToCart,
  workoutName,
  reps,
  weight,
  handleChange,
  saving,
  saved,
}: {
  workouts: any;
  userid: string;
  addToCart: any;
  saveWorkouts: any;
  workoutName: string;
  reps: string;
  weight: string;
  handleChange: any;
  saving: boolean;
  saved: boolean;
}) {
  return (
    <>
      {saving && <Spinner />}
      <div className={saving ? "workout-list workout-list-blur" : "workout-list"}>
        <div className="form-container">
          <form className="workout">
            <label htmlFor="workoutName">Workout</label>
            <Input
              type="text"
              value={workoutName}
              name="workoutName"
              id="workoutName"
              onChange={handleChange}
            />
            <label htmlFor="reps">Reps</label>
            <Input
              type="text"
              value={reps}
              name="reps"
              id="reps"
              onChange={handleChange}
            />
            <label htmlFor="weight">Weight</label>
            <Input
              type="text"
              value={weight}
              name="weight"
              id="weight"
              onChange={handleChange}
            />
            <button
              className="btn-add"
              onClick={(e) =>
                addToCart(e, workoutName, workoutName, reps, weight)
              }
            >
              Add &rarr;
            </button>
            <button
              className="btn-save"
              onClick={(e) => saveWorkouts(e, userid, workouts)}
            >
              Save &rarr;
            </button>
          </form>
        </div>
        <div className="workouts">
          <ul className="workoutsInCart">
            {workouts.map((workout: any) => (
              <li id={workout.id}>
                {workout.workoutName}-{workout.reps} - {workout.weight}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {saved && <p>Workouts saved successfully</p>}
    </>
  );
}
const mapStateToProps = ({
  workout,
  render,
}: {
  workout: any;
  render: any;
}) => {
  return {
    workouts: workout.workouts,
    saving: workout.saving,
    saved: workout.saved,
    workoutName: render.workoutName,
    reps: render.reps,
    weight: render.weight,
    userid: render.username,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    handleChange: (e: any) => dispatch(handleChange(e)),
    addToCart: (
      e: any,
      workoutId: string,
      workoutName: string,
      reps: string,
      weight: string
    ) => {
      e.preventDefault();
      dispatch(addToCart({ workoutId, workoutName, reps, weight }));
    },
    saveWorkouts: (e: any, userid: string, workouts: any) => {
      e.preventDefault();
      dispatch(saveWorkouts(userid, workouts));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Workout);
