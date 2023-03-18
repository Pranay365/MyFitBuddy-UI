import "./index.scss";

function render() {
  const h1: HTMLHeadElement = document.createElement("h1");
  h1.innerHTML = "Hello";
  document.body.appendChild(h1);
}

render();
render();
console.log("Hello");
