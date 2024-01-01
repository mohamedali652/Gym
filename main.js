// function formValidate() {


//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const tel = document.getElementById("tel").value.trim();
//     const error = document.querySelector(".error");

//     let text = "";


//     if (name.length < 3) {
//         text = "Please enter a valid name.";
//         error.innerHTML = text;
//         return false;
//     } else if (!/^\S+@\S+\.\S+$/.test(email)) {
//         text = "Please enter a valid email address.";
//         error.innerHTML = text;
//         return false;
//     } else if (isNaN(tel) || tel.length !== 10) {
//         text = "Please enter a valid phone number.";
//         error.innerHTML = text;
//         return false;
//     } else {
//         alert("Form submitted successfully!");
//         return true;
//     }
// }
function formvalidate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // تحقق مما إذا كان الحقل البريدي فارغًا
    if (email.trim() == "") {
        alert("Please enter your email address.");
        return false;
    }

    // التحقق من صحة عنوان البريد الإلكتروني
    var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email_regex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // تحقق مما إذا كان حقل كلمة المرور فارغًا
    if (password.trim() == "") {
        alert("Please enter your password.");
        return false;
    }

    // التحقق من صحة كلمة المرور
    var password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!password_regex.test(password)) {
        alert("Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number.");
        return false;
    }

    // إذا تم إدخال جميع الحقول بشكل صحيح
    return true;
}





