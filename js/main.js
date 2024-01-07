let users = JSON.parse(localStorage.getItem("users_list"));

const signEmail = document.getElementById("signinEmail");
const signPass = document.getElementById("signinPass");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click",function(e){
    checkEmail();
    if(emailCheck == 1) {
        window.localStorage.setItem("loggedInUser",JSON.stringify(signnedInUser))
        window.location = "./home.html"
    }
    else {
        document.getElementById("incorrect").classList.remove("d-none")
    }
})


let emailCheck;
let signnedInUser =[]
function checkEmail() {
    emailCheck = 0;
    for (let index = 0; index < users.length; index++) {
            if (signEmail.value == users[index].email && signPass.value == users[index].pass){
                signnedInUser.push(users[index])
                emailCheck = 1;
            }}
    return emailCheck;
}
