let hivTips = [
  {
    title: "What is HIV?",
    content: "HIV (Human Immunodeficiency Virus) attacks the immune system and weakens the body’s ability to fight infections."
  },
  {
    title: "How HIV is transmitted",
    content: "HIV is spread through unprotected sex, sharing needles, blood transfusion with infected blood, and from mother to child."
  },
  {
    title: "Prevention",
    content: "Use condoms, avoid sharing sharp objects, get tested regularly, and use PrEP if at risk."
  },
  {
    title: "Symptoms",
    content: "Early symptoms include fever, headache, sore throat, and rash. Later it weakens immunity."
  },
  {
    title: "Treatment",
    content: "There is no cure, but HIV can be controlled using ARVs (Antiretroviral drugs)."
  }
];


function displayHIV() {
  const container = document.getElementById("hivContainer");
  container.innerHTML = "";

  hivTips.forEach(tip => {
    container.innerHTML += `
      <div class="hiv-card">
        <h3>${tip.title}</h3>
        <p>${tip.content}</p>
      </div>
    `;
  });
}

displayHIV();