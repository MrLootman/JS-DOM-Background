/* Ecrit ton code ci-dessous */

const leftSection = document.querySelector("#left-section");
const button = document.querySelector("#left-section > button");

// Gestion de l'événement

button.addEventListener("click", () => {
  const actualColor = leftSection.style.backgroundColor;

  leftSection.style.backgroundColor = actualColor !== "red" ? "red" : "white";
})

/* Partie 2 : */

const select = document.querySelector("select");
const form = document.querySelector("#right-section form");
const rightSection = document.querySelector("#right-section");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (select.value === "...") {
    return rightSection.style.backgroundColor = "white";
  }

  rightSection.style.backgroundColor = select.value;
})
