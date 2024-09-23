//Lấy ra elements của trang

const formSignUp = document.getElementById('formSignUp');
const firstNameElement = document.getElementById('first_name');
const lastNameElement = document.getElementById('last_name');
const emailElement = document.getElementById('email');
const passwordElement = document.getElementById('password');


const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const passwordError= document.getElementById('passwordError');



const userLocal = JSON.parse(localStorage.getItem("users")) || [];


function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


formSignUp.addEventListener('submit', function(e) {
    e.preventDefault()


    if(!firstNameElement.value) {
        firstNameError.style.display = "block";
    } else {
        firstNameError.style.display = "none";
    }

    if(!lastNameElement.value) {
        lastNameError.style.display = "block";
    } else {
        lastNameError.style.display = "none";
    }

    if(!emailElement.value) {
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
        if(!validateEmail(emailElement.value)) {
            emailError.style.display = "block";
            emailError.innerHTML = 'Email không đúng định dạng'

        }
    }

    if(!passwordElement.value) {
        passwordError.style.display = "block";
    } else {
        passwordError.style.display = "none";
    }
    


    if(
        firstNameElement.value && 
        lastNameElement.value &&
        emailElement.value &&
        passwordElement.value &&
        validateEmail(emailElement.value)
    ) {

        const user = {
            id: userLocal.length + 1,
            first_name: firstNameElement.value,
            last_name: lastNameElement.value,
            email: emailElement.value,
            password: passwordElement.value,
        };



        const exist_user = users.filter((u) =>u.email === user.email);
        const exist_userLocal = userLocal.filter((us) => us.email === user.email);

        if( exist_userLocal.length > 0 || exist_user.length > 0){
            alert("Email này đã có tài khoản")
        } else {
            userLocal.push(user)

        }
        

        localStorage.setItem("users", JSON.stringify(userLocal));

        setTimeout(function () {
            window.location.href = "/login/login.html"
        },1000)
    }
});