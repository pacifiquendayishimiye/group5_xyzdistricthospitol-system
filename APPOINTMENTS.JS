document.addEventListener("DOMContentLoaded", function(){

  // 🧑‍⚕️ AMAZINA AVUYE KU IFOTO YAWE
  const doctors = {
    "OPD": ["Dr. Jean Mugabo", "Dr. Claire Uwimana"],
    "Maternity": ["Dr. Grace Nyirahabimana", "Dr. Emmanuel Nshuti"],
    "Pediatrics": ["Dr. Alice Mukamana", "Dr. Pierre Habimana"],
    "Pharmacy": ["Pharm. Marie Claudine"],
    "Laboratory": ["Lab. Eric Nshimiyimana"],
    "Dental": ["Dr. Solange Uwase"],
    "Nutrition": ["Nutr. Innocent Niyonsaba"],
    "HIV/AIDS & TB": ["Dr. Vestine Mukeshimana"],
    "Emergency": ["Dr. Olivier Ndayisaba"]
  };

  const dept = document.getElementById("department");
  const doctorSelect = document.getElementById("doctor");
  const form = document.getElementById("appointmentForm");

  // 🔄 Guhindura doctor bitewe na department
  dept.addEventListener("change", function(){

    let selectedDept = this.value;

    doctorSelect.innerHTML = '<option value="">Select Doctor</option>';

    if(doctors[selectedDept]){
      doctors[selectedDept].forEach(function(doc){
        let option = document.createElement("option");
        option.value = doc;
        option.textContent = doc;
        doctorSelect.appendChild(option);
      });
    }
  });

  // 💾 Kubika muri localStorage
  form.addEventListener("submit", function(e){
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      mutuelle: document.getElementById("mutuelle").value,
      phone: document.getElementById("phone").value,
      department: dept.value,
      doctor: doctorSelect.value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      reason: document.getElementById("reason").value
    };

    localStorage.setItem("appointment", JSON.stringify(data));

    alert("Appointment saved successfully ✅");

    form.reset();
    doctorSelect.innerHTML = '<option value="">Select Doctor</option>';
  });

});