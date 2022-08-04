import "../styles/header.css";

const Header = (function(){
  const header = document.createElement("header");
  const h1 = document.createElement("h1");

  h1.textContent = "Alex's awesome dishes!";

  header.append(h1);

  return header;
})();

export default Header;