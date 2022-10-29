/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

import { showCars } from "./modules/fetch.js";
import { createCard } from "./modules/createCard.js";

const cars = await showCars();

createCard(cars);

const FooterHeader = () => {
  const headerElement = document.createElement("header");
  const footerElement = document.createElement("footer");

  document.body.prepend(headerElement);
  document.body.append(footerElement);
};
FooterHeader();
