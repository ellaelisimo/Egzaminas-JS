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
    const users = await response.json();

    showUsers(users);
  } catch (error) {
    console.error(error);
  }
};

const showUsers = (users) => {
  users.forEach((user) => {
    const usersCard = document.createElement("div");
    const login = document.createElement("h4");
    const userAvatar = document.createElement("img");

    login.innerText = user.login;
    userAvatar.src = user.avatar_url;

    usersCard.append(login, userAvatar);
    document.querySelector("#output").append(usersCard);
  });
};

document.querySelector("#btn").addEventListener("click", async (event) => {
  event.preventDefault();

  await getUsers();

  document.querySelector("#message").style.display = "none";
  document.querySelector("#output").style.backgroundColor = "#222";
});
