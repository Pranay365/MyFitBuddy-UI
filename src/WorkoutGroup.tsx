import { useState } from "react";
import { editCart, workoutCollapseByName } from "./actions/workout";
import { connect } from "react-redux";
const EditIcon = require("./create-outline.svg");
import "./SCSS/workoutGroup.scss"
const GroupBox = ({ elements ,setCollapse,handleEdit}: { elements: any,setCollapse:any ,handleEdit:any}) => {
  const group = elements.reduce((group: any, el: any) => {
    group[el.workoutName] = group[el.workoutName] || [];
    group[el.workoutName].push(el);
    return group
  }, {});
  return (
    <>
      {Object.keys(group).map((el: any) => {
        return (
          <ul key={el} className="group-container">
            <li className="group-header">
              {group[el][0].collapse&&<span className="collapse" onClick={() => setCollapse(el)}>
                &#x25B2;
              </span>}
              {!group[el][0].collapse&&<span className="collapse" onClick={() => setCollapse(el)}>
                &#x25BC;
              </span>}
              {el}
            </li>
            {group[el].map((groupEl: any) => {
              return (
                <ul key={groupEl.workoutId}
                  className={`${
                    !group[el][0].collapse
                      ? "workouts workouts-visible"
                      : "workouts"
                  }`}
                >
                  <li className="workout-list-item">{groupEl.workoutName}</li>
                  <li className="workout-list-item">{groupEl.reps}</li>
                  <li className="workout-list-item">{groupEl.weight}</li>
                  <li className="workout-list-item" onClick={()=>handleEdit(groupEl.workoutId)}><img className="btn-edit"src={EditIcon} /></li>
                </ul>
              );
            })}
          </ul>
        );
      })}
    </>
  );
};
const mapStateToProps=(({workout}:{workout:any})=>{
 return {
    elements:workout.workouts
 }
})
const mapDispatchToProps=(dispatch:any)=>{
    return {
        setCollapse:(workoutName:string)=>dispatch(workoutCollapseByName(workoutName)),
        handleEdit:(workoutId:string)=>dispatch(editCart(workoutId))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GroupBox);
