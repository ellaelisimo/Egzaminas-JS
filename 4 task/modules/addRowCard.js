import { createElementWithParams } from "./createCard.js";

const getCardDataElement = (text) => {
  const tdElement = createElementWithParams("td", { textContent: text });

  return tdElement;
};

const addRowCard = (car, tbodyCardElement) => {
  const rowCardElement = document.createElement("tr");

  const { brand, models } = car;
  const brandElement = getCardDataElement(brand);
  const modelsElement = getCardDataElement(models);

  rowCardElement.append(brandElement, modelsElement);
  tbodyCardElement.append(rowCardElement);
};

export { addRowCard };
