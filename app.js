// Entrance Button Function
function entranceButtonFunc() {
    classAdd("entranceButtonDiv","d-none");
    classReplace("loginForm", "d-none", "d-block");
}

// Login Button Function
function loginButtonFunc() {
    const userNameDOM = document.querySelector("#inputUserName");
    let uName = userNameDOM.value;
    if (((uName.length >= 3) && (uName != undefined) && (uName != null))) {
        userName = uName;
        classReplace("loginForm", "d-block", "d-none");
        classReplace("infoTextDiv", "d-none", "d-block");
        document.querySelector("#infoUserName").innerHTML = userName;
    }
    else {
        uName.value = "";
        alert("Hatalı bilgi!!!");
    }
}

// Logout Button Function
function logoutButtonFunc() {
    classReplace("loginForm", "d-block", "d-none");
    classReplace("entranceButtonDiv", "d-none", "d-block");
}

// Class Replace Function
function classReplace(id, classOld, classNew) {
    let idDOM = document.querySelector(`#${id}`);
    idDOM.classList.replace(`${classOld}`, `${classNew}`);
}

// Class Add Function
function classAdd(id, classNew) {
    let idDOM = document.querySelector(`#${id}`);
    idDOM.classList.add(`${classNew}`);
}

// Date Info Part
const date = document.querySelector("#date");
const dayArray = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
const monthArray = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
let hour = new Date().getHours();
let minute = new Date().getMinutes();
let dayDate = new Date().getDate();
let month = monthArray[new Date().getMonth()];
let year = new Date().getFullYear();
let day = dayArray[new Date().getDay()];
date.innerHTML = `${hour}:${minute} - ${dayDate} ${month} ${year} - ${day}`;

// Entrance Button Part
const entranceButton = document.querySelector("#entranceButton");
entranceButton.onclick = entranceButtonFunc;

// Login Button and get userName Part
let userName;
const loginButton = document.querySelector("#loginButton");
loginButton.onclick = loginButtonFunc;

// Logout Button Part
const logoutButton = document.querySelector("#logoutButton");
logoutButton.onclick = logoutButtonFunc;