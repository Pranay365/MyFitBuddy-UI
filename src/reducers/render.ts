import { Constants } from "../constants";

function render(state = { username: "", password: "",confirmPassword:"",id:"",workoutId:"",workoutName:"",reps:"",weight:"" }, action: any) {
  switch (action.type) {
    case Constants.INPUT_CHANGED:
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
}

export default render;
