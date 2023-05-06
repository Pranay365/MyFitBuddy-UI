import { Constants } from "../constants";
export const handleChange = (e: any) => {
  return {
    type: Constants.INPUT_CHANGED,
    name: e.target.name,
    value: e.target.value,
  };
};
