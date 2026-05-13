let patients = [];

function addPatient() {
  const patient = {
    id: "XYZ-" + Date.now(),
    name: document.getElementById("pname").value,
    dob: document.getElementById("dob").value,
    gender: document.getElementById("gender").value
  };

  patients.push(patient);
  displayPatients();
}

function displayPatients() {
  let table = document.getElementById("patientTable");
  table.innerHTML = "";

  patients.forEach((p, index) => {
    table.innerHTML += `
      <tr>
        <td>${p.id}</td>
        <td>${p.name}</td>
        <td>${p.dob}</td>
        <td>${p.gender}</td>
        <td>
          <button onclick="deletePatient(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function deletePatient(index) {
  patients.splice(index, 1);
  displayPatients();
}