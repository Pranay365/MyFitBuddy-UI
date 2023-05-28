import { set } from "../types";
import { Constants } from "../constants";

export default function fetchStats(
  id: string,
  workoutName: string,
  startDate: string,
  endDate: string
) {
  return async (dispatch: any) => {
    dispatch({ type: Constants.FETCHING_STATS });
    const statsResJSON = await fetch(
      `http://localhost:3000/stats/${id}/${workoutName}?startDate=${startDate}&endDate=${endDate}`,
      {
        credentials: "include",
      }
    );
    const statsResObj = await statsResJSON.json();
    const statsBody = JSON.parse(statsResObj.body);
    const stats = statsBody.reduce(
      (acc: { xData: string[]; yData: number[] }, statForDay: any) => {
        acc.xData = acc.xData || [];
        acc.yData = acc.yData || [];
        let key = Object.keys(statForDay)[0];
        acc.xData.push(key);
        let value = statForDay[key].reduce((sum: number, el: set) => {
          sum += el.reps / el.weight;
          return sum;
        }, 0);
        acc.yData.push(value / statForDay[key].length); 
        console.log(acc)
        return acc;
      },
      {}
    );
    // sort it such that {date1:val1,date2:val2,date3:val3} is sorted 
    console.log(stats);
    dispatch({ type: Constants.FETCHING_STATS_SUCCESSFUL, stats });
  };
}
