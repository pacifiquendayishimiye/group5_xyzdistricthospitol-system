document.addEventListener("DOMContentLoaded", function(){

  const btn = document.getElementById("darkModeToggle");

  // Reba niba button ibonetse
  if(!btn) return;

  // Reba niba yari yarahisemo dark mbere nibyo
  if(localStorage.getItem("mode") === "dark"){
    document.body.classList.add("dark");
    btn.textContent = "☀️";
  }

  btn.onclick = function(){
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
      btn.textContent = "☀️";
      localStorage.setItem("mode", "dark");
    } else {
      btn.textContent = "🌙";
      localStorage.setItem("mode", "light");
    }
  };

});