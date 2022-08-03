import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import "./styles/general.css";

const render = () => {
  const container = document.createElement("div"),
    main = document.createElement("main");

  container.id = "content";
  main.append(About(), Menu(), Contact());

  container.append(Header(), Nav(), main);
  document.body.appendChild(container);
};

render();
