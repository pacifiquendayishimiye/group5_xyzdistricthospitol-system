// ==========================
// LOAD DATA
// ==========================
let medicines = JSON.parse(localStorage.getItem("xyzHospitalMedications")) || [];

// ==========================
// SELECT ELEMENTS
// ==========================
const form = document.getElementById("medicineForm");
const table = document.getElementById("medicineTable");

// ==========================
// SAVE DATA
// ==========================
function saveMedicines(){
  localStorage.setItem("xyzHospitalMedications", JSON.stringify(medicines));
}

// ==========================
// STOCK STATUS
// ==========================
function getStatus(stock){
  if(stock <= 0) return "Out of Stock";
  if(stock < 20) return "Low Stock";
  return "In Stock";
}

// ==========================
// DISPLAY
// ==========================
function displayMedicines(){
  table.innerHTML = "";

  medicines.forEach((m, i) => {
    table.innerHTML += `
      <tr>
        <td>${m.name}</td>
        <td>${m.category}</td>
        <td>${m.stock}</td>
        <td>${m.expiry}</td>
        <td>${m.price}</td>
        <td>${m.status}</td>
        <td>
          <button onclick="updateStock(${i})">Update</button>
          <button onclick="deleteMedicine(${i})">Delete</button>
        </td>
      </tr>
    `;
  });
}

// ==========================
// ADD MEDICINE
// ==========================
form.addEventListener("submit", function(e){
  e.preventDefault();

  let stock = parseInt(document.getElementById("quantity").value);

  let newMed = {
    name: document.getElementById("medName").value,
    category: document.getElementById("category").value,
    stock: stock,
    expiry: document.getElementById("expiry").value,
    price: document.getElementById("price").value,
    status: getStatus(stock)
  };

  medicines.push(newMed);

  saveMedicines();   // 💾 SAVE
  form.reset();
  displayMedicines();
});

// ==========================
// UPDATE STOCK
// ==========================
function updateStock(i){
  let newStock = prompt("Enter new stock:");

  if(newStock !== null){
    newStock = parseInt(newStock);

    medicines[i].stock = newStock;
    medicines[i].status = getStatus(newStock);

    saveMedicines();   // 💾 SAVE
    displayMedicines();
  }
}

// ==========================
// DELETE
// ==========================
function deleteMedicine(i){
  if(confirm("Delete this medicine?")){
    medicines.splice(i,1);

    saveMedicines();   // 💾 SAVE
    displayMedicines();
  }
}

// ==========================
// INIT
// ==========================
displayMedicines();