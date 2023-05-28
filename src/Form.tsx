import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "./actions/login";
import { handleChange } from "./actions/render";
import Input from "./Input";
import "./SCSS/form.scss";
function Form(props: any) {
  return (
    <form className="signup" onSubmit={props.handleSubmit}>
      <p className="form-header">{props.type} To Fitnoter</p>
      <Input
        id="username"
        name="username"
        type="text"
        value={props.username}
        onChange={props.handleChange}
      />
      {props.type == "signup" && (
        <>
          <Input
            type="text"
            name="id"
            value={props.id}
            onChange={props.handleChange}
      
          />
        </>
      )}
      <Input
        type="password"
        name="password"
        value={props.password}
        onChange={props.handleChange}
      />
      {props.type == "signup" && (
        <>
          <label className="label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <Input
            type="password"
            name="confirmPassword"
            value={props.confirmPassword}
            onChange={props.handleChange}
          />
        </>
      )}
      <button className="btn btn-login"
        onClick={(e) => props.handleSubmit(e, props.username, props.password)}
      >
        {props.type == "signup" ? "Signup" : "Login"}
      </button>
      {props.isLoggedIn && <Navigate replace to="/workout" />}
      {props.isLoginFailed && (
        <h1 style={{ color: "red" }}>Login Failed!Please try again</h1>
      )}
    </form>
  );
}
const mapStateToProps = ({ login, render }: { login: any; render: any }) => {
  return {
    id: render.id,
    confirmPassword: render.confirmPassword,
    username: render.username,
    password: render.password,
    isLoggedIn: login.isLoggedIn,
    isLoginFailed: login.isLoginFailed,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    handleChange: (e: any) => dispatch(handleChange(e)),
    handleSubmit: (e: any, username: string, password: string) => {
      e.preventDefault();
      dispatch(login({ username, password }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
