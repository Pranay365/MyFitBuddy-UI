import { Constants } from "../constants";
import {convertToObj} from "./util";
export function addToCart({workoutId,workoutName,reps,weight}:{workoutId:string;workoutName:string;reps:string;weight:string}){
 return {type:Constants.ADD_WORKOUT,workoutId,workoutName,reps,weight};
}
export function fetchWorkouts(){

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
        body:JSON.stringify({clockin:"12:30",clockout:"14:30",workouts:convertToObj("workoutId",workouts)})
        }).then(res=>res.json()).then(()=>{
            dispatch({type:Constants.SAVING_WORKOUT_SUCCESSFUL});
        })
    }
}