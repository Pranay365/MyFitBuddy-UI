import "./SCSS/logo.scss";
const logo = require("./pencil-sharp.svg");
function Logo() {
  return (
    <div className="logo-container">
      <h1 className="logo">F</h1>
      <img src={logo} className="logo-icon" />
    </div>
  );
}

export default Logo;
