
document.getElementById ('login-btn').addEventListener ('click', () => {

    const inputNumber = document.getElementById ('number-input')
    const inputPassword = document.getElementById ('password-input')
    if (inputNumber.value.length != 11) {
        alert ("Invalid number, please write 11 digit number")
          return;
    }
    if ( typeof inputNumber.value ==="string" && typeof inputPassword.value === "string") {

        alert ('Login Succesfully')
        window.location.assign ("/home")
    }else {

          alert ('Please type placeholder number')
    }
})