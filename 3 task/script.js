// taip ir nesugebėjua išsiaiškint, kame problema ir kaip ją spręst...

const ENDPOINT = "https://api.github.com/users";

const createheaderFooter = () => {
  const header = document.createElement("header");
  const footer = document.createElement("footer");

  document.body.prepend(header);
  document.body.append(footer);
};

createheaderFooter();

const getUsers = async () => {
  try {
    const response = await fetch(ENDPOINT);
    if (response.ok) {
      const data = await response.json();
      return data.users;
    }
  } catch (error) {
    console.error(error);
  }
};

const showUsers = async (user) => {
  await getUsers();
  const userAvatar = document.createElement("img");
  const login = document.createElement("h4");
  const card = document.querySelector("div");

  userAvatar.src = user.avatar_url;
  login = user.login;

  document.querySelector("#output").append(card);
  card.append(userAvatar, login);
};

document.querySelector("#btn").addEventListener("click", async (event) => {
  event.preventDefault();

  document.querySelector("#message").style.display = "none";
  document.querySelector("#output").style.backgroundColor = "#222";
});
