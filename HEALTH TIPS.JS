// ==========================
// LOAD DATA
// ==========================
let tips = JSON.parse(localStorage.getItem("xyzHospitalHealthTips")) || [];

// ==========================
// SELECT ELEMENTS
// ==========================
const form = document.getElementById("tipForm");
const container = document.getElementById("tipsContainer");

// ==========================
// SAVE DATA in project
// ==========================
function saveTips(){
  localStorage.setItem("xyzHospitalHealthTips", JSON.stringify(tips));
}

// ==========================
// DISPLAY TIPS
// ==========================
function displayTips(){
  container.innerHTML = "";

  tips.forEach((t, i) => {
    container.innerHTML += `
      <div class="card">
        <h3>${t.title}</h3>
        <p>${t.content}</p>
        <button onclick="deleteTip(${i})">Delete</button>
      </div>
    `;
  });
}

// ==========================
// ADD TIP
// ==========================
form.addEventListener("submit", function(e){
  e.preventDefault();

  let newTip = {
    title: document.getElementById("title").value,
    content: document.getElementById("content").value
  };

  tips.push(newTip);

  saveTips();   // 💾 SAVE
  form.reset();
  displayTips();
});

// ==========================
// DELETE TIP
// ==========================
function deleteTip(i){
  if(confirm("Delete this tip?")){
    tips.splice(i,1);

    saveTips();   // 💾 SAVE
    displayTips();
  }
}

// ==========================
// INIT
// ==========================
displayTips();