const container = document.getElementById("container");
const login = document.getElementById("login");
const register = document.getElementById("register");

login.addEventListener("click", () => {
    container.classList.remove("active");
});

register.addEventListener("click", () => {
    container.classList.add("active");
});
