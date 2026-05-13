let appointments = JSON.parse(localStorage.getItem("xyzHospitalAppointments")) || [];

const tableBody = document.getElementById("tableBody");

function displayAppointments(){
  tableBody.innerHTML = "";

  if(appointments.length === 0){
    tableBody.innerHTML = "<tr><td colspan='6'>No data found</td></tr>";
    return;
  }

  appointments.forEach((a)=>{
    tableBody.innerHTML += `
      <tr>
        <td>${a.name}</td>
        <td>${a.department}</td>
        <td>${a.doctor}</td>
        <td>${a.date}</td>
        <td>${a.time}</td>
        <td>${a.status}</td>
      </tr>
    `;
  });
}

displayAppointments();