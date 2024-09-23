const formLogin = document.getElementById('formLogin');
const emailElement = document.getElementById('email');
const passwordElement = document.getElementById('password');


formLogin.addEventListener('submit', function(e) {
    e.preventDefault();


    const userLocal = JSON.parse(localStorage.getItem("users")) || [];


    const exist_user = users.filter((u) =>u.email === emailElement.value && u.password === passwordElement.value);

    const exist_userLocal = userLocal.filter((us) => us.email === emailElement.value && us.password === passwordElement.value);


    if(!emailElement.value && !passwordElement.value) {
        alert("Hãy nhập đủ thông tin")
    } else if(exist_user.length > 0 || exist_userLocal.length > 0) {
        let firstNameUser;
        let lastNameUser;
        
        if(exist_user.length > 0) {
            for(let i = 0; i < users.length ; i++) {
                if(users[i].email == emailElement.value) {
                    firstNameUser = users[i].first_name;
                    lastNameUser = users[i].last_name;
                }
            }
        }
        if(exist_userLocal.length > 0) {
            for(let i = 0; i < userLocal.length ; i++) {
                if(userLocal[i].email == emailElement.value ) {
                    firstNameUser = userLocal[i].first_name;
                    lastNameUser = userLocal[i].last_name;
                }
            }
        }

        alert("Xin chào" + " " + firstNameUser + " " + lastNameUser)

    
    } else {
        alert("Thông tin tài khoản không chính xác")
    }

    setTimeout(function () {
        window.location.href = "/html/index.html"
    },1000)

});
