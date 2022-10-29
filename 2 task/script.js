/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let counter = 0;

document.getElementById("btn__element").addEventListener("click", () => {
  counter++;

  document.getElementById("btn__state").innerText = counter;
});

const FooterHeader = () => {
  const headerElement = document.createElement("header");
  const footerElement = document.createElement("footer");

  document.body.prepend(headerElement);
  document.body.append(footerElement);
};
FooterHeader();
