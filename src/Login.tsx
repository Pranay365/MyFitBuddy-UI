
import Form from "./Form";
import { connect } from "react-redux";
import Spinner from "./Spinner/Spinner";

function Login({ isLoginProgress }: { isLoginProgress: boolean }) {
  return (
    <div className="form-container">
      {isLoginProgress ? <Spinner /> : <Form type="login"/>}
    </div>
  );
}
const mapStateToProps = ({  login }: { login: any }) => ({
  isLoginFailed: login.isLoginProgress,
});
export default connect(mapStateToProps)(Login);
