import "../styles/menu.css";
import Card from "./Card";

const Menu = (function(){
  const div = document.createElement("div");
  div.id = "menu";

  const dishes = [
    ["sandwich", "A normal sandwich", "bread, ham, cheese, tomato, salad"],
    ["fried-eggs", "Fried eggs", "eggs"],
    ["salad", "Salad", "salad, tomato, meat, boiled eggs"],
    ["fries", "Fries", "potatoes"],
  ];
  dishes.forEach((dish) => {
    div.appendChild(Card(...dish));
  });

  return div;
})();

export default Menu;