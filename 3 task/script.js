/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

// document.querySelector("#btn-container").addEventListener("click", () => {

// //   const tableBodyElement = document.createElement("tbody");
// //   const trElement = document.createElement("tr");
// //   const tdLoginElement = document.createElement("td");
// //   const tdAvatarElement = document.createElement("td");

// //   trElement.append(tdLoginElement, tdAvatarElement);
// //   tableBodyElement.append(trElement);
// //   document.querySelector("#output").append(tableBodyElement);
// });

document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#message").style.display = "none";
  document.querySelector("#output").style.backgroundColor = "#222";

  const renderUserCard = (user) => {
    const avatar = document.createElement("img");
    const login = document.createElement("h4");
    const card = document.createElement("div");

    // avatar.src = user.avatar_url;
    // login.innerText = `${user.login} `;

    card.append(avatar, login);
    document.querySelector("#output").append(card);
  };
  renderUserCard();

  const populateCard = () => {};
});

const getUsers = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const users = await response.json();

    return users;
  } catch (error) {
    console.error(error);
  }
};

console.log(getUsers());
