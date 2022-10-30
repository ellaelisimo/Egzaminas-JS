const createheaderFooter = () => {
  const header = document.createElement("header");
  const footer = document.createElement("footer");

  document.body.prepend(header);
  document.body.append(footer);
};

createheaderFooter();

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const converterInput = document.querySelector("#search").value;

  const divPoundsElement = document.createElement("div");
  const poundsElement = document.createElement("h3");
  const spanPoundsElement = document.createElement("span");

  document.querySelector("#output").append(divPoundsElement);
  divPoundsElement.append(poundsElement);
  poundsElement.append(spanPoundsElement);

  const divGramsElement = document.createElement("div");
  const gramsElement = document.createElement("h3");
  const spanGramsElement = document.createElement("span");

  document.querySelector("#output").append(divGramsElement);
  divGramsElement.append(gramsElement);
  gramsElement.append(spanGramsElement);

  const divOuncesElement = document.createElement("div");
  const ouncesElement = document.createElement("h3");
  const spanOuncesElement = document.createElement("span");

  document.querySelector("#output").append(divOuncesElement);
  divOuncesElement.append(ouncesElement);
  ouncesElement.append(spanOuncesElement);

  if (converterInput) {
    const kilogram = Number(converterInput);

    const pounds = kilogram * (2.2046).toFixed(4);
    const grams = kilogram / 0.001;
    const ounces = kilogram * (35.274).toFixed(2);

    poundsElement.innerText = `Pounds (lb): ${pounds}`;
    gramsElement.innerText = `Grams (g): ${grams}`;
    ouncesElement.innerText = `Ounces (oz): ${ounces}`;
  } else {
    poundsElement.innerText = " ";
    gramsElement.innerText = " ";
    ouncesElement.innerText = " ";
  }
});
