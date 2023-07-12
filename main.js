// const addRedBorder = (id) => {
//     element = document.querySelector("#" + id)
//     element.style.border = "5px solid red"
// }

// addRedBorder("quinta");

const ingressos = [];

const highlightCard = (selector) => {
  let element = document.querySelector(selector);
  element.classList.toggle("card-highlight");
};

const checkKeyboardCode = () => {
  document.addEventListener(
    "keydown",
    (event) => {
      let name = event.key;
      let code = event.code;
      //Alert the key name and key code on keydown
      alert(`key pressed ${name} \r\n Key code value: ${code}`);
    },
    false
  );
};

const addKeyboarEventListeners = () => {
  document.addEventListener(
    "keydown",
    (event) => {
      let ingresso1 = document.getElementById("quinta");
      let ingresso2 = document.getElementById("sexta");
      let ingresso3 = document.getElementById("sabado");
      let ingresso4 = document.getElementById("domingo");

      let code = event.code;

      if (code == "Digit1") {
        ingresso1.classList.toggle("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
      }

      if (code == "Digit2") {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.toggle("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
      }

      if (code == "Digit3") {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.toggle("card-highlight");
        ingresso4.classList.remove("card-highlight");
      }

      if (code == "Digit4") {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.toggle("card-highlight");
      }
    },
    false
  );
};

const selectedCard = (selector) => {
  let element = document.querySelector(selector);
  element.classList.toggle("card-selected");
  if (ingressos.includes(selector)) ingressos.pop(selector);
  else ingressos.push(selector);
};

const showSelectedCard = () => {
  if (ingressos.lenght > 0) alert("Ingressos Selecionados:" + ingressos);
};

addKeyboarEventListeners();
