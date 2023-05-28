import { Constants } from "../constants";
import {convertToObj} from "./util";
import {v4} from "uuid";
export function addToCart({workoutName,reps,weight}:{workoutName:string;reps:string;weight:string}){
 return {type:Constants.ADD_WORKOUT,workoutId:v4(),workoutName,reps,weight,collapse:false};
}
export function workoutCollapseByName(workoutName:string){
  return { type: Constants.WORKOUTS_COLLAPSE, workoutName };
}
export function editCart(workoutId:string) {
    return {
      type: Constants.EDIT_WORKOUT,
      workoutId,
    };
}
export function saveWorkouts(userid:string,workouts:any){
    return (dispatch:any)=>{
        console.log("saving workout..");
        dispatch({type:Constants.SAVING_WORKOUT});
        let currentDate=new Date().toISOString();
        fetch(`http://localhost:3000/workouts/${currentDate}/${userid}`,{
        method:"POST",    
        credentials:"include",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify({clockin:"12:30",clockout:"14:30",workouts:convertToObj("workoutName",workouts)})
        }).then(res=>res.json()).then(()=>{
            dispatch({type:Constants.SAVING_WORKOUT_SUCCESSFUL});
        })
    }
}