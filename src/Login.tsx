
import Form from "./Form";
import { connect } from "react-redux";
import Spinner from "./Spinner/Spinner";
import {setWantsLogin} from "./actions/login";
import "./SCSS/login.scss";
function Login({ isLoginProgress=false,handleClose }: { isLoginProgress: boolean,handleClose:any }) {
  return (
    <div className="form-container">
      <span className="login-close" onClick={handleClose}>X</span>
      {isLoginProgress ? <Spinner /> : <Form type="login"/>}
    </div>
  );
}
const mapStateToProps = ({  login }: { login: any }) => ({
  isLoginFailed: login.isLoginProgress,
});

const mapDispatchToProps=(dispatch:any)=>{
  return{
    handleClose:(e:any)=>dispatch(setWantsLogin())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);
