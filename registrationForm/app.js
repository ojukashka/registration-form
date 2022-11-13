
const form = document.getElementById("form");
const userName = document.getElementById("username");
const lastName = document.getElementById("lastname");
const phoneNumber = document.getElementById("phoneNumber");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.querySelector("#togglePassword");
const password2 = document.getElementById("password2");
form.addEventListener("submit", (e) => {
e.preventDefault();
formValidation();
});
function formValidation() {
const userNameValue = userName.value.trim();
const lastNameValue = lastName.value.trim();
const phoneNumberValue = phoneNumber.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();
const regName = /[a-z]{2,19}/i;
const regNumber = /[0-9]{8}/;
const regPass = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)(?=.{8,})/;
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if (regName.test(userNameValue)) {
    setSuccessFor(userName);
} else if (userNameValue === "") {
    setErrorFor(userName, "Овог нэрээ оруулна уу");
} else {
    setErrorFor(userName, "Овог нэр буруу байна.");
}

if (regName.test(lastNameValue)) {
    setSuccessFor(lastName);
} else if (lastNameValue === "") {
    setErrorFor(lastName, "Овгоо оруулна уу");
} else {
    setErrorFor(lastName, "Овгоо зөв оруулна уу.");
}
if (phoneNumberValue === "") {
    setErrorFor(phoneNumber, "Утасны дугаараа оруулна уу.");
} else if (!regNumber.test(phoneNumberValue)) {
    setErrorFor(phoneNumber, "Буруу дугаар оруулсан байна.");
} else {
    setSuccessFor(phoneNumber);
}

if (emailValue === "") {
    setErrorFor(email, "И-мэйл хоосон байна.");
} else if (!regEmail.test(emailValue)) {
    setErrorFor(email, "Мэйл хаягаа зөв оруулна уу.");
} else {
    setSuccessFor(email);
}

if (passwordValue === "") {
    setErrorFor(password, "Нууц үг хоосон байна.");
} else if (!regPass.test(passwordValue)) {
    setErrorFor(password, "Нууц үг буруу байна");
    alert("Нууц үг тэмдэгт, тоо, үсгээс бүрдсэн 8-с дээш урттай байна.");
} else {
    setSuccessFor(password);
}

if (password2Value === "") {
    setErrorFor(password2, "Нууц үг хоосон байна.");
} else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Нууц үг таарахгүй байна.");
} else {
    setSuccessFor(password2);
}
}

function setErrorFor(input, message) {
const formControl = input.parentElement;
const small = formControl.querySelector("small");
formControl.className = "form-control error";
small.innerText = message;
}

function setSuccessFor(input) {
const formControl = input.parentElement;
formControl.className = "form-control success";
}
