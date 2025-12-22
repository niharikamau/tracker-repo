const username = document.querySelector("#username");
const password = document.querySelector("#password");
const login_form = document.querySelector("#login-form");

login_form.addEventListener("submit", (e) => {
    e.preventDefault();
    if ((username.value == "niharikamaurya._") && (password.value == "kumud123")) {
        location.href = "/tracker-repo/public/homepage.html";
    }
    else {
        alert("wrong username or password");
    }
}
);


