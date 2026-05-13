let savedUser = "";
let savedPass = "";

function showRegister(){
    loginBox.classList.add("hidden");
    registerBox.classList.remove("hidden");
    forgotBox.classList.add("hidden");
}

function showLogin(){
    loginBox.classList.remove("hidden");
    registerBox.classList.add("hidden");
    forgotBox.classList.add("hidden");
}



function showForgot(){
    loginBox.classList.add("hidden");
    registerBox.classList.add("hidden");
    forgotBox.classList.remove("hidden");
}

function register(){
    savedUser = document.getElementById("regUser").value;
    savedPass = document.getElementById("regPass").value;

    msg.innerText = "Account created ✅💚💚🎉🎉";
    showLogin();
}

function login(){
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    if(user === savedUser && pass === savedPass){
        msg.innerText = "Login successful 🎉🎉🎉";
    }else{
        msg.innerText = "Wrong credentials ❌";
    }
}

function resetPassword(){
    let user = document.getElementById("forgotUser").value;
    let newPassword = document.getElementById("newPass").value;

    if(user === savedUser){
        savedPass = newPassword;
        msg.innerText = "Password reset successful 🔑🔑🔑🔑";
        showLogin();
    }else{
        msg.innerText = "User not found ❌😂😭👽";
    }
}

/* LANGUAGE */
const translations = {
  en:{hospital:"XYZ District Hospital",home:"HOME",services:"SERVICES",appointments:"APPOINTMENTS",records:"PATIENTS RECORDS",pharmacy:"PHARMACY",tips:"HEALTH TIPS",contact:"CONTACT",login:"LOGIN"},
  rw:{hospital:"Ibitaro bya XYZ",home:"AHABANZA",services:"SERIVISI",appointments:"GAHUNDA",records:"ABARWAYI",pharmacy:"FARUMASI",tips:"INAMA Z'UBUZIMA",contact:"TUVUGANE",login:"INJIRA"},
  fr:{hospital:"Hôpital XYZ",home:"ACCUEIL",services:"SERVICES",appointments:"RENDEZ-VOUS",records:"PATIENTS",pharmacy:"PHARMACIE",tips:"CONSEILS SANTÉ",contact:"CONTACT",login:"CONNEXION"}
};

function changeLang(lang){
  document.querySelectorAll("[data-key]").forEach(el=>{
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });

  document.getElementById("langBtn").innerText =
    lang==="en"?"English ▾":lang==="rw"?"Kinyarwanda ▾":"French ▾";

  localStorage.setItem("lang", lang);
}

window.onload=function(){
  changeLang(localStorage.getItem("lang")||"en");
};