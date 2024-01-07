// inputs
const userName = document.getElementById("signupName");
const userEmail = document.getElementById("signupEmail");
const userPass = document.getElementById("signupPass");

// errors
const errorName = document.getElementById("invalidName");
const errorEmail = document.getElementById("invalidEmail");
const errorPass = document.getElementById("invalidPass");
const errorEmailExist = document.getElementById("incorrect");

//success
const success = document.getElementById("success");

//signUp button 
const signUpBtn = document.getElementById("signUpBtn");


let users = [];

if (localStorage.getItem("users_list") != null) {
  users = JSON.parse(localStorage.getItem("users_list"));
}

function newUser() {
  let user = {
    name: userName.value,
    email: userEmail.value,
    pass: userPass.value,
  };
  users.push(user);
  localStorage.setItem("users_list", JSON.stringify(users));
}

function clear() {
  userName.value = "";
  userEmail.value = "";
  userPass.value = "";
}

function nameValidation(){
  success.classList.add("d-none");
  let nameRegex = /^[a-zA-Z]+\w*$/;
  if (nameRegex.test(userName.value)) {
    errorName.classList.add("d-none");
    userName.style.border = "2px solid green";
    return true
  } else {
    errorName.classList.remove("d-none");
    userName.style.border = "2px solid red";
    return false
  }
}

function emailValidation() {
  success.classList.add("d-none");
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailRegex.test(userEmail.value)){
    errorEmail.classList.add("d-none");
    userEmail.style.border = "2px solid green";
    return true
  }else {
    errorEmail.classList.remove("d-none");
    userEmail.style.border = "2px solid red";
    return false
  }
}

function passValidation() {
 success.classList.add("d-none");
  let passRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (passRegex.test(userPass.value)){
    errorPass.classList.add("d-none");
    userPass.style.border = "2px solid green";
    return true
  }else {
    errorPass.classList.remove("d-none");
    userPass.style.border = "2px solid red";
    return false
  }
}

let emailCheck;
function emailExist() {
    emailCheck = 0;
    for (let index = 0; index < users.length; index++) {
            if (userEmail.value == users[index].email){
                emailCheck = 1 ;
            }}
    return emailCheck;
}

signUpBtn.addEventListener("click",function(){
    emailExist();
    if (emailExist()== 1) {
        errorEmailExist.classList.remove("d-none");
        userEmail.style.border = "2px solid red";
    }
    else if (nameValidation()== true && emailValidation()==true && passValidation()==true && emailExist()== 0){
        success.classList.remove("d-none")
        newUser();
        clear();
    }
} )