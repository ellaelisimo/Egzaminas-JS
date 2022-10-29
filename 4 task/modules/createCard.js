import { addRowCard } from "./addRowCard.js";

const createElementWithParams = (tagName, params) => {
  const element = document.createElement(tagName);

  Object.assign(element, params);

  return element;
};

const populateCard = (cars, tbodyCardElement) => {
  cars.forEach((car) => {
    addRowCard(car, tbodyCardElement);
  });
};

const createCard = (cars) => {
  const cardTableElement = document.createElement("table");
  const cardTheadElement = document.createElement("thead");
  const tbodyCardElement = document.createElement("tbody");

  const brandHeader = createElementWithParams("th", { innerText: "Brand" });
  const modelHeader = createElementWithParams("th", { innerText: "Model" });

  cardTheadElement.append(brandHeader, modelHeader);

  populateCard(cars, tbodyCardElement);

  cardTableElement.append(cardTheadElement, tbodyCardElement);
  document.querySelector("#output").append(cardTableElement);
};

export { createCard, createElementWithParams, populateCard };
