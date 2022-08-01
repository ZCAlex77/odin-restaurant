import "../styles/nav.css";

const Nav = () => {
  const nav = document.createElement("nav"),
    links = document.createElement("ul");
  
  const handleClick = (thisLink) =>{
    document.querySelectorAll("nav > ul > li").forEach(link => link.classList.remove('active-link'));
    thisLink.classList.add('active-link');
  }

  ["About", "Menu", "Contact"].forEach((item) => {
    const link = document.createElement("li");

    link.textContent = item;
    link.onclick = function(){handleClick(this)};
    if(item === "About") link.classList.add('active-link');
    links.appendChild(link);
  });

  nav.appendChild(links);

  return nav;
};

export default Nav;
