const submit_button = document.querySelector(".button");
submit_button.onclick = (e) => {
    e.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;

    localStorage.setItem("FirstName", fname);
    localStorage.setItem("LastName", lname);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", pass);
    localStorage.setItem("Cpassword", cpass);
    if (fname == "" && lname == "" && email == "" && pass == "" && cpass == "") {
        Swal.fire("Opps..!", "input field has no value!", "error");
    } else {
        if (pass.length >= 6 && pass.length <= 20) {
            if (pass !== cpass) {
                Swal.fire("Oops..!", "Mật khẩu không trùng khớp!", "error");
            } else {
                Swal.fire("Good job!", "Đăng ký thành công!", "success");
                setTimeout(() => {
                    location.href = "login.html";
                }, 5000);
            }
        } else {
            Swal.fire("Opps..!", "Ít nhất 6 kí tự!", "error");
        }
    }
};
// login function

const login = document.querySelector(".login");
login.onclick = (e) => {
    e.preventDefault();
    // catch the value which is type user login page
    const emailAddress = document.getElementById("emailAddress").value;
    const passWord = document.getElementById("passWord").value;

    // let's get value in localstorage which store user in registration field
    const Email = localStorage.getItem("Email");
    const Password = localStorage.getItem("Password");

    if (emailAddress == "" && passWord == "") {
        Swal.fire("Opps..!", "input field has no value!", "error");
    } else {
        if (emailAddress == Email && passWord == Password) {
            Swal.fire("Good job!", "login successful!", "success");
            setTimeout(() => {
                location.href = "main.html";
            }, 1000);
        } else {
            Swal.fire("Opps..!", "Something is wrong!", "error");
        }
    }
};
