const doctors = {
  OPD: ["Dr Jean", "Dr Claire"],
  Maternity: ["Dr Grace", "Dr Emmanuel"],
  Pediatrics: ["Dr Alice", "Dr Pierre"],
  Pharmacy: ["Pharm Marie"],
  Laboratory: ["Lab Eric"],
  Dental: ["Dr Solange"],
  Nutrition: ["Nutr Innocent"],
  HIV: ["Dr Vestine"],
  Emergency: ["Dr Olivier"]
};


const department = document.getElementById("department");
const doctor = document.getElementById("doctor");

department.addEventListener("change", () => {
  doctor.innerHTML = "<option>Select Doctor</option>";
  doctors[department.value].forEach(d => {
    let option = document.createElement("option");
    option.textContent = d;
    doctor.appendChild(option);
  });
});

const form = document.getElementById("appointmentForm");
const tableBody = document.getElementById("tableBody");

let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = {
    name: name.value,
    department: department.value,
    doctor: doctor.value,
    date: date.value,
    time: time.value,
    status: "Pending"
  };

  appointments.push(data);
  localStorage.setItem("appointments", JSON.stringify(appointments));
  display();
  form.reset();
});

function display() {
  tableBody.innerHTML = "";

  appointments.forEach((a, index) => {
    let row = `
      <tr>
        <td>${a.name}</td>
        <td>${a.department}</td>
        <td>${a.doctor}</td>
        <td>${a.date}</td>
        <td>${a.time}</td>
        <td>${a.status}</td>
        <td>
          <button class="action cancel" onclick="cancel(${index})">Cancel</button>
          <button class="action complete" onclick="complete(${index})">Complete</button>
        </td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

function cancel(i) {
  appointments[i].status = "Cancelled";
  localStorage.setItem("appointments", JSON.stringify(appointments));
  display();
}

function complete(i) {
  appointments[i].status = "Completed";
  localStorage.setItem("appointments", JSON.stringify(appointments));
  display();
}

display();