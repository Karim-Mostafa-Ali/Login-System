let user= [];
user = JSON.parse(window.localStorage.getItem("loggedInUser"));
const hiMessaga = document.getElementById("userName");
hiMessaga.innerHTML = user[0].name;
