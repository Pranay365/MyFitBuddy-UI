import { Constants } from "../constants";
type WORKOUT = {
  saving: boolean;
  saved: boolean;
  workouts: {
    workoutId: string;
    workoutName: string;
    reps: number;
    weight: number;
    collapse: boolean;
  }[];
};

export function workout(
  state: WORKOUT = { saving: false, saved: false, workouts: [] },
  action: any
) {
  switch (action.type) {
    case Constants.ADD_WORKOUT:
      let { type, ...payload } = action;
      return { ...state, workouts: [...state.workouts, payload] };
    case Constants.SAVING_WORKOUT:
      return { ...state, saving: true };
    case Constants.SAVING_WORKOUT_SUCCESSFUL:
      return { ...state, saving: false, saved: true, workouts: [] };
    case Constants.EDIT_WORKOUT:
      const allOtherWorkouts = state.workouts.filter((workout) => {
        return workout.workoutId !== action.workoutId;
      });
      return { ...state, workouts: allOtherWorkouts };
    case Constants.WORKOUTS_COLLAPSE:
      const newWorkouts = state.workouts.map((w) => {
        if (w.workoutName == action.workoutName) {
          w.collapse = !w.collapse;
        }
        return w;
      });
      return { ...state, workouts: newWorkouts };
    default:
      return state;
  }
}
