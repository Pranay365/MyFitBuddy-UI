import "./index.scss";
import ReactDOM from "react-dom";
import "./common.scss";
import App from "./App";
import Canvas from "./Canvas";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Canvas />
    </Provider>
  </Router>,
  document.body
);