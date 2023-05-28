import { Constants } from "../constants";
const defaultstate={
    isLoading:false,
    stats:{xData:[],yData:[]}
}
export function workoutStats(state=defaultstate,action:any){
    switch(action.type){
        case Constants.FETCHING_STATS:
            return {...state,isLoading:true}
        case Constants.FETCHING_STATS_SUCCESSFUL:
            return {...state,isLoading:false,stats:action.stats}
        default:
            return state;
    }
}