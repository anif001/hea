/* window.onload = function () {
  const params = new URLSearchParams(window.location.search);

  const bmi = parseFloat(params.get("bmi"));
  const bmr = parseFloat(params.get("bmr"));
  const dietPlan = JSON.parse(decodeURIComponent(params.get("diet")));
  const exercises = JSON.parse(decodeURIComponent(params.get("exercises")));
  const yogaPoses = JSON.parse(decodeURIComponent(params.get("yoga")));

  const bmiCategory = getBMICategory(bmi);

  document.getElementById("bmi").innerText = `BMI: ${bmi.toFixed(1)}`;
  document.getElementById("bmr").innerText =` BMR: ${bmr} kcal/day`;
  document.getElementById("bmiCategory").innerText = `Category: ${bmiCategory}`;

  // Populate cards
  populateCards("dietPlan", dietPlan);
  populateCards("exercises", exercises);
  populateCards("yoga", yogaPoses);

  // Hide all sections initially
  showSection(null);

  document.getElementById("showDietBtn").addEventListener("click", () => showSection("dietSection"));
  document.getElementById("showExercisesBtn").addEventListener("click", () => showSection("exerciseSection"));
  document.getElementById("showYogaBtn").addEventListener("click", () => showSection("yogaSection"));
};

function getBMICategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 24.9) return "Normal weight";
  if (bmi < 29.9) return "Overweight";
  return "Obese";
}

function populateCards(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h4>${item.name}</h4>
      ${item.description ? <p class="desc">${item.description}</p> : ""}
      ${item.rate ? <p>Price: ₹${item.rate}/day</p> : ""}
    `;
    container.appendChild(card);
  });
}

function showSection(sectionId) {
  const sections = ["dietSection", "exerciseSection", "yogaSection"];
  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (id === sectionId) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
} */