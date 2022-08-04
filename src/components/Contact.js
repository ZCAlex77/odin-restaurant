import "../styles/contact.css";

const Contact = (function () {
  const div = document.createElement("div"),
    ul = document.createElement("ul"),
    p = document.createElement("p"),
    h2 = document.createElement("h2");

  div.id = "contact";

  h2.textContent = "Hey potential customer!";
  p.textContent =
    "It seems we made you hungry by showcasing all those amazing dishes. Here are some ways to get your hand on our food:";
  [
    "Call us at: 0000 000 000",
    "Email us at: alexsdishes@awesome.com",
    "Visit us at: Somewhere",
  ].forEach((text) => {
    let li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  });

  div.append(h2, p, ul);
  return div;
})();

export default Contact;
