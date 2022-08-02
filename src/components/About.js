import "../styles/about.css";

const About = () => {
  const div = document.createElement("div"),
    firstH2 = document.createElement("h2"),
    secondH2 = document.createElement("h2"),
    firstP = document.createElement("p"),
    secondP = document.createElement("p");

  div.id = "about";

  firstH2.textContent = "Feel the taste of food you'd cook at home!";
  firstP.textContent =
    'At "Alex\'s awesome dishes!" we try our best to offer you the food you could cook at home. Aren\'t you tired of making food after a hard day at work? Do you often think "I\'m hungry but too lazy to cook"? If so, we are the solution!';
  secondH2.textContent =
    "Our food will remind you of the days you had time to cook for yourself!";
  secondP.textContent =
    "We offer you food that's not good enough for a restaurant but perfect for your standards! We serve a small variety of dishes that even a 7yo child could cook. So what are you waiting for? Come by the restaurant or place an order online, because we're sure that you'll do that!";
  div.append(firstH2, firstP, secondH2, secondP);
  return div;
};

export default About;
