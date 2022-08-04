import "../styles/nav.css";

const Nav = (function(){
  const nav = document.createElement("nav"),
    links = document.createElement("ul");

  const handleClick = (thisLink) => {
    const displays = { about: "block", menu: "grid", contact: "block" };
    document
      .querySelectorAll("nav > ul > li")
      .forEach((link) => link.classList.remove("active-link"));
    thisLink.classList.add("active-link");
    document
      .querySelectorAll("main > div")
      .forEach((div) => (div.style.display = "none"));
    document.querySelector(
      `#${thisLink.getAttribute("data-link")}`
    ).style.display = displays[thisLink.getAttribute("data-link")];
  };

  ["About", "Menu", "Contact"].forEach((item) => {
    const link = document.createElement("li");
    link.setAttribute("data-link", item.toLowerCase());
    link.textContent = item;
    link.onclick = function () {
      handleClick(this);
    };
    if (item === "About") link.classList.add("active-link");
    links.appendChild(link);
  });

  nav.appendChild(links);

  return nav;
})();

export default Nav;
