import {createStore,combineReducers,applyMiddleware} from "redux";
import login from "./reducers/login";
import render from "./reducers/render";
import {workout} from "./reducers/workout";
import thunk from "redux-thunk";
const reducers=combineReducers({login,render,workout});
const logger=(store:any)=>(next:any)=>(action:any)=>{
 console.log("Previous state",store.getState())
 next(action);
 console.log("next state",store.getState())
}
const store = applyMiddleware(thunk,logger)(createStore)(reducers);

export default store;
