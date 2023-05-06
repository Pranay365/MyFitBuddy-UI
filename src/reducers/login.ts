import { Constants } from "../constants";
function login(
  state = {
    username: "",
    password: "",
    isLoggedIn: false,
    isLoginProgress: false,
    isLoginFailed:false
  },
  action: { type: string; [key: string]: string | number }
) {
  switch (action.type) {
    case Constants.LOGIN:
      return { ...state, isLoginProgress: true,isLoginFailed:false,isLoggedIn:false };
    case Constants.LOGIN_SUCCESS:
      return { ...state, isLoginProgress: false, isLoggedIn: true ,isLoginFailed:false};
    case Constants.LOGIN_FAILED:
      return {
        ...state,
        isLoginProgress: false,
        isLoggedIn: false,
        isLoginFailed:true,
      };
    default:
      return state;
  }
}
export default login;
