/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
//sukurti header ir footer

const createheaderFooter = () => {
  const header = document.createElement("header");
  const footer = document.createElement("footer");

  document.body.prepend(header);
  document.body.append(footer);
};

createheaderFooter();

document
  .getElementById("submit-btn")
  .addEventListener("click", (event, valNum) => {
    event.preventDefault();

    const tableElement = document.createElement("table");
    const poundsElement = document.createElement("tr");
    const gramsElement = document.createElement("tr");
    const ouncesElement = document.createElement("tr");

    poundsElement.innerText = "Pounds:";
    gramsElement.innerText = "Grams:";
    ouncesElement.innerText = "Ounces:";

    tableElement.append(poundsElement, gramsElement, ouncesElement);
    document.getElementById("output").append(tableElement);

    const spanPoundsElement = document.createElement("span");
    const spanGramsElement = document.createElement("span");
    const spanOuncesElement = document.createElement("span");

    poundsElement.append(spanPoundsElement);
    gramsElement.append(spanGramsElement);
    ouncesElement.append(spanOuncesElement);

    spanPoundsElement.innerHTML = parseFloat(valNum * 2.2046);
    spanGramsElement.innerText = parseFloat(valNum / 0.001);
    spanOuncesElement.innerText = parseFloat(valNum * 35.274);
  });
