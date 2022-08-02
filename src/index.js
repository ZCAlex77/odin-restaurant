import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import "./styles/general.css";

const render = () => {
  const container = document.querySelector("#content"),
    main = document.createElement("main");

  main.appendChild(About());

  container.append(Header(), Nav(), main);
};

render();
