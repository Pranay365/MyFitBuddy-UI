import { Constants } from "../constants";
type WORKOUT={
    saving:boolean,
    saved:boolean,
    workouts:[];
}
export function workout(state:WORKOUT={saving:false,saved:false,workouts:[]},action:any){
    switch(action.type){
        case Constants.ADD_WORKOUT:
            let {type,...payload}=action;
            return {...state,workouts:[...state.workouts,payload]};
        case Constants.SAVING_WORKOUT:
            return {...state,saving:true}
        case Constants.SAVING_WORKOUT_SUCCESSFUL:
            return {...state,saving:false,saved:true,workouts:[]}
        default :
        return state;
    }
}