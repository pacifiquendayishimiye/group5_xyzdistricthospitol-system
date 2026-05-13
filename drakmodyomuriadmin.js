
// DARK MODE
const toggle = document.getElementById("darkModeToggle");

// load saved mode
if(localStorage.getItem("darkMode") === "on"){
  document.body.classList.add("dark-mode");
  toggle.textContent = "☀️";
}

toggle.onclick = function(){
  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){
    localStorage.setItem("darkMode","on");
    toggle.textContent = "☀️";
  }else{
    localStorage.setItem("darkMode","off");
    toggle.textContent = "🌙";
  }
};
