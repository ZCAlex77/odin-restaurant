const Card = (img, name, info) => {
  const div = document.createElement("div"),
    imgContainer = document.createElement("div"),
    h3 = document.createElement("h3"),
    p = document.createElement("p"),
    image = new Image();

  image.src = require(`../assets/${img}.jpg`);
  imgContainer.appendChild(image);
  h3.textContent = name;
  p.textContent = `Ingredients: ${info}`;

  div.classList.add("card");
  div.append(imgContainer, h3, p);
  return div;
};

export default Card;
