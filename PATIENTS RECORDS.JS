// ==========================
// LOAD DATA
// ==========================
let patients = JSON.parse(localStorage.getItem("xyzHospitalPatients")) || [];

// ==========================
// SELECT ELEMENTS
// ==========================
const form = document.getElementById("patientForm");
const table = document.getElementById("patientTable");

// ==========================
// CALCULATE AGE
// ==========================
function calculateAge(dob){
  let birth = new Date(dob);
  let today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  return age;
}

// ==========================
// SAVE DATA
// ==========================
function savePatients(){
  localStorage.setItem("xyzHospitalPatients", JSON.stringify(patients));
}

// ==========================
// DISPLAY
// ==========================
function displayPatients(){
  table.innerHTML = "";

  patients.forEach((p, index) => {
    table.innerHTML += `
      <tr>
        <td>${p.fullName}</td>
        <td>${calculateAge(p.dob)}</td>
        <td>${p.gender}</td>
        <td>${p.phone}</td>
        <td>${p.village}</td>
        <td>${p.condition}</td>
        <td>${p.doctor}</td>
        <td>${p.status}</td>
        <td>
          <button onclick="editPatient(${index})">Edit</button>
          <button onclick="dischargePatient(${index})">Discharge</button>
          <button onclick="deletePatient(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

// ==========================
// ADD PATIENT
// ==========================
form.addEventListener("submit", function(e){
  e.preventDefault();

  let patient = {
    id: "PAT-" + Date.now(),
    fullName: document.getElementById("fullName").value,
    dob: document.getElementById("dob").value,
    gender: document.getElementById("gender").value,
    phone: document.getElementById("phone").value,
    village: document.getElementById("village").value,
    condition: document.getElementById("condition").value,
    admissionDate: document.getElementById("admissionDate").value,
    doctor: document.getElementById("doctor").value,
    status: "Admitted"
  };

  patients.push(patient);

  savePatients();   // 💾 SAVE
  displayPatients();
  form.reset();
});

// ==========================
// DELETE
// ==========================
function deletePatient(index){
  if(confirm("Delete this patient?")){
    patients.splice(index,1);
    savePatients();
    displayPatients();
  }
}

// ==========================
// DISCHARGE
// ==========================
function dischargePatient(index){
  patients[index].status = "Discharged";
  savePatients();
  displayPatients();
}

// ==========================
// EDIT
// ==========================
function editPatient(index){
  let p = patients[index];

  document.getElementById("fullName").value = p.fullName;
  document.getElementById("dob").value = p.dob;
  document.getElementById("gender").value = p.gender;
  document.getElementById("phone").value = p.phone;
  document.getElementById("village").value = p.village;
  document.getElementById("condition").value = p.condition;
  document.getElementById("admissionDate").value = p.admissionDate;
  document.getElementById("doctor").value = p.doctor;

  patients.splice(index,1); // remove old
  savePatients();
  displayPatients();
}

// ==========================
// INIT
// ==========================
displayPatients();