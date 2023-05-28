import { Constants } from "../constants";
export const login = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  return async (dispatch: any) => {
    dispatch({ type: Constants.LOGIN });
    username=encodeURIComponent(username);
    fetch(`http://localhost:3000/login/${username}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        registrationId: "3c581491-87dc-4664-974f-b4af5d30b2ec",
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status == 200) {
          console.log(res);
          dispatch({ type: Constants.LOGIN_SUCCESS });
        } else {
          dispatch({ type: Constants.LOGIN_FAILED });
        }
      })
      .catch((ex) => {
        console.log("error occurred", ex);
        dispatch({ type: Constants.LOGIN_FAILED });
      });
  };
};

export const setWantsLogin=()=>{
  return {type:Constants.USER_WANTS_LOGIN}
}