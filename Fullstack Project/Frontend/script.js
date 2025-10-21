function calculateBMI(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2);
}

function calculateBMR(weight, height, age, gender) {
  if (gender === "male") {
    return (10 * weight + 6.25 * height - 5 * age + 5).toFixed(2);
  } else {
    return (10 * weight + 6.25 * height - 5 * age - 161).toFixed(2);
  }
}

function getRecommendations(bmi, age) {
  let ageGroup;
  if (age <= 10) ageGroup = "child";
  else if (age <= 35) ageGroup = "young";
  else ageGroup = "aged";

  const dietOptions = {
    underweight: {
      child: [
        { name: "Oats and Milk", image: "oats.jpeg", description: "Rich in fiber and energy-boosting nutrients." },
        { name: "Eggs with Toast", image: "eggs-toast.jpeg", description: "Good source of protein and healthy carbs." },
        { name: "Vegetable Soup", image: "soup.jpeg", description: "Nutrient-packed and easy to digest." },
        { name: "Healthy Smoothies", image: "smoothie.jpeg", description: "Provides calories with fruits and dairy." },
        { name: "Grilled Chicken", image: "chicken.jpeg", description: "Lean protein for muscle growth." },
        { name: "Avocado Salad", image: "avocado-salad.jpeg", description: "Healthy fats and fiber-rich." }
      ],
      young: [
        { name: "Oats and Milk", image: "oats.jpeg", description: "Perfect breakfast to start your day with energy." },
        { name: "Eggs with Toast", image: "eggs-toast.jpeg", description: "Combines protein and carbs for a balanced meal." },
        { name: "Vegetable Soup", image: "soup.jpeg", description: "Low-calorie, nutrient-rich option for recovery." },
        { name: "Healthy Smoothies", image: "smoothie.jpeg", description: "High-calorie blend with fruits and milk." },
        { name: "Grilled Chicken", image: "chicken.jpeg", description: "Builds muscle and keeps you full longer." },
        { name: "Avocado Salad", image: "avocado-salad.jpeg", description: "Packed with good fats and fiber." }
      ],
      aged: [
        { name: "Oats and Milk", image: "oats.jpeg", description: "Heart-healthy and easy to digest." },
        { name: "Eggs with Toast", image: "eggs-toast.jpeg", description: "Supports muscle maintenance and energy." },
        { name: "Vegetable Soup", image: "soup.jpeg", description: "Gentle on the stomach, filled with nutrients." },
        { name: "Healthy Smoothies", image: "smoothie.jpeg", description: "Helps meet daily calorie needs efficiently." },
        { name: "Grilled Chicken", image: "chicken.jpeg", description: "Protein-rich for muscle health." },
        { name: "Avocado Salad", image: "avocado-salad.jpeg", description: "Improves heart health and digestion." }
      ]
    },
    normal: {
      child: [
        { name: "Poha", image: "poha.jpeg", description: "Light and nutritious Indian breakfast." },
        { name: "Veg Curry with Rice", image: "curry-rice.jpeg", description: "Balanced meal with carbs and veggies." },
        { name: "Fruit Salad", image: "fruit-salad.jpeg", description: "Full of vitamins, fiber, and hydration." },
        { name: "Pasta with Pesto", image: "pasta.jpeg", description: "Energy-rich and tasty meal." },
        { name: "Grilled Fish", image: "fish.jpeg", description: "Omega-3s for brain development." },
        { name: "Quinoa Salad", image: "quinoa.jpeg", description: "Protein-packed whole grain option." }
      ],
      young: [
        { name: "Poha", image: "poha.jpeg", description: "Ideal for breakfast or light dinner." },
        { name: "Veg Curry with Rice", image: "curry-rice.jpeg", description: "Provides complete nutrition with taste." },
        { name: "Fruit Salad", image: "fruit-salad.jpeg", description: "Boosts immunity and aids digestion." },
        { name: "Pasta with Pesto", image: "pasta.jpeg", description: "Good carbs for energy and basil flavor." },
        { name: "Grilled Fish", image: "fish.jpeg", description: "Essential fatty acids for a healthy body." },
        { name: "Quinoa Salad", image: "quinoa.jpeg", description: "Superfood with balanced nutrients." }
      ],
      aged: [
        { name: "Poha", image: "poha.jpeg", description: "Light on the stomach and nourishing." },
        { name: "Veg Curry with Rice", image: "curry-rice.jpeg", description: "Wholesome and easy to digest." },
        { name: "Fruit Salad", image: "fruit-salad.jpeg", description: "Hydrating and vitamin-rich snack." },
        { name: "Pasta with Pesto", image: "pasta.jpeg", description: "Flavored carbs for energy and satisfaction." },
        { name: "Grilled Fish", image: "fish.jpeg", description: "Supports joint and heart health." },
        { name: "Quinoa Salad", image: "quinoa.jpeg", description: "Maintains energy and muscle strength." }
      ]
    },
    overweight: {
      child: [
        { name: "Rice with Veggies", image: "vegrice.jpeg", description: "Fills up with fewer calories and nutrients." },
        { name: "Grilled Chicken", image: "chicken.jpeg", description: "Lean protein to reduce fat gain." },
        { name: "Boiled Egg Salad", image: "egg-salad.jpeg", description: "Protein-rich and filling." },
        { name: "Steak with Veggies", image: "steak.jpeg", description: "Balanced fat and protein meal." },
        { name: "Grilled Salmon", image: "salmon.jpeg", description: "Rich in omega-3 and low in carbs." },
        { name: "Avocado Toast", image: "avocado-toast.jpeg", description: "Healthy fats and fiber for fullness." }
      ],
      young: [
        { name: "Rice with Veggies", image: "vegrice.jpeg", description: "Fiber-rich to help digestion and weight control." },
        { name: "Grilled Chicken", image: "chicken.jpeg", description: "High protein, low fat option." },
        { name: "Boiled Egg Salad", image: "egg-salad.jpeg", description: "Keeps hunger away and builds muscle." },
        { name: "Steak with Veggies", image: "steak.jpeg", description: "Controlled fat with nutrient-dense greens." },
        { name: "Grilled Salmon", image: "salmon.jpeg", description: "Boosts metabolism and heart health." },
        { name: "Avocado Toast", image: "avocado-toast.jpeg", description: "Fiber and healthy fats for satiety." }
      ],
      aged: [
        { name: "Rice with Veggies", image: "vegrice.jpeg", description: "Digestive and weight-conscious meal." },
        { name: "Grilled Chicken", image: "chicken.jpeg", description: "Essential protein for aging muscles." },
        { name: "Boiled Egg Salad", image: "egg-salad.jpeg", description: "Nutritious, light, and filling." },
        { name: "Steak with Veggies", image: "steak.jpeg", description: "Muscle support and fiber balance." },
        { name: "Grilled Salmon", image: "salmon.jpeg", description: "Fights inflammation and supports joints." },
        { name: "Avocado Toast", image: "avocado-toast.jpeg", description: "Boosts satiety and heart function." }
      ]
    },
    obese: {
      child: [
        { name: "Vegetable Soup", image: "soup.jpeg", description: "Low-calorie, fiber-rich starter." },
        { name: "Rice with Lentils", image: "lentils.jpeg", description: "Wholesome and protein-packed." },
        { name: "Salad", image: "salad.jpeg", description: "Fresh, raw veggies for detox." },
        { name: "Grilled Salmon with Salad", image: "salmon-salad.jpeg", description: "Protein and greens in one meal." },
        { name: "Chicken and Veggies", image: "chicken-veg.jpeg", description: "Lean protein and fiber combo." },
        { name: "Steamed Vegetables", image: "steamed-veggies.jpeg", description: "Light and full of nutrients." }
      ],
      young: [
        { name: "Vegetable Soup", image: "soup.jpeg", description: "Filling without excess calories." },
        { name: "Rice with Lentils", image: "lentils.jpeg", description: "High fiber and plant protein." },
        { name: "Salad", image: "salad.jpeg", description: "Essential vitamins and hydration." },
        { name: "Grilled Salmon with Salad", image: "salmon-salad.jpeg", description: "Weight loss-friendly and nutritious." },
        { name: "Chicken and Veggies", image: "chicken-veg.jpeg", description: "Muscle-supportive and light." },
        { name: "Steamed Vegetables", image: "steamed-veggies.jpeg", description: "Digestive aid and low calorie." }
      ],
      aged: [
        { name: "Vegetable Soup", image: "soup.jpeg", description: "Great start to a light, healthy meal." },
        { name: "Rice with Lentils", image: "lentils.jpeg", description: "Balances sugar and boosts energy." },
        { name: "Salad", image: "salad.jpeg", description: "Fresh ingredients support digestion." },
        { name: "Grilled Salmon with Salad", image: "salmon-salad.jpeg", description: "Helps reduce cholesterol and weight." },
        { name: "Chicken and Veggies", image: "chicken-veg.jpeg", description: "Fulfilling and protein-rich." },
        { name: "Steamed Vegetables", image: "steamed-veggies.jpeg", description: "Soft and ideal for elderly digestion." }
      ]
    }
  };

  const exercisesByAge = {
    child: [
      { name: "Jumping Jacks", description: "Cardio for kids.", image: "jumping-jacks.png" },
      { name: "Hopping", description: "Strength and fun.", image: "hopping.png" },
      { name: "Frog Jumps", description: "Boost leg muscles.", image: "frogJump.png" }
    ],
    young: [
      { name: "Push-ups", description: "Upper body strength.", image: "pushup.gif" },
      { name: "Squats", description: "Leg and glute power.", image: "squats.webp" },
      { name: "Lunges", description: "Build balance and legs.", image: "lunges.png" }
    ],
    aged: [
      { name: "Walking", description: "Light cardio for endurance.", image: "walking.png" },
      { name: "Chair Squats", description: "Safe strength-building.", image: "chairSquat.png" },
      { name: "Arm Circles", description: "Gentle warm-up.", image: "armCircles.png" }
    ]
  };

  const yogaByAge = {
    child: [
      { name: "Vrikshasana", description: "Improves balance.", image: "vrikshasana.jpeg" },
      { name: "Cat-Cow Pose", description: "Increases flexibility.", image: "catCow.png" },
      { name: "Butterfly Pose", description: "Relaxes legs and hips.", image: "butterfly.png" }
    ],
    young: [
      { name: "Bhujangasana", description: "Spinal flexibility.", image: "bhujangasana.jpeg" },
      { name: "Tadasana", description: "Posture and balance.", image: "tadasana.png" },
      { name: "Trikonasana", description: "Stretches body sides.", image: "trikonasana.png" }
    ],
    aged: [
      { name: "Tadasana", description: "Grounding and focus.", image: "tadasana.png" },
      { name: "Balasana", description: "Relieves stress and fatigue.", image: "balasana.png" },
      { name: "Sukhasana", description: "Calms the mind.", image: "sukhasana.jpeg" }
    ]
  };

  let category;
  if (bmi < 18.5) category = "underweight";
  else if (bmi < 24.9) category = "normal";
  else if (bmi < 29.9) category = "overweight";
  else category = "obese";

  const dietPlan = dietOptions[category][ageGroup];
  const exercises = exercisesByAge[ageGroup];
  const yogaPoses = yogaByAge[ageGroup];

  return { dietPlan, exercises, yogaPoses };
}

document.getElementById('healthForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const age = parseInt(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);

  const bmi = calculateBMI(weight, height);
  const bmr = calculateBMR(weight, height, age, gender);
  const { dietPlan, exercises, yogaPoses } = getRecommendations(bmi, age);

  localStorage.setItem("bmi", bmi);
  localStorage.setItem("bmr", bmr);
  localStorage.setItem("diet", JSON.stringify(dietPlan));
  localStorage.setItem("exercises", JSON.stringify(exercises));
  localStorage.setItem("yoga", JSON.stringify(yogaPoses));

  window.location.href = "result.html";
});
