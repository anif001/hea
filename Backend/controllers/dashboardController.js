const DashboardDetails = require('../models/DashBoardDetails');
const User = require('../models/User');

const calculateAndSaveHealthDetails = async (req, res) => {
  try {
    const { email } = req.body;  // You can get the email from the session or JWT token
    const { age, gender, height, weight, incomeClass, activityLevel } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not found!' });
    }

    // Calculate BMI
    const bmi = weight / ((height / 100) ** 2);
    let bmiCategory = '';
    if (bmi < 18.5) {
      bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obese';
    }

    // Calculate BMR (Mifflin-St Jeor Equation)
    let bmr;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Create the dashboard details object
    const dashboardDetails = new DashboardDetails({
      userId: user._id,  // Link to the user
      age,
      gender,
      height,
      weight,
      bmi,
      bmr,
      bmiCategory,
      incomeClass,
      activityLevel,
    });

    // Save the dashboard details, overwrite if an existing record exists
    await DashboardDetails.findOneAndUpdate(
      { userId: user._id },  // Find the existing record for the user
      { $set: dashboardDetails.toObject() },  // Overwrite the existing record
      { upsert: true, new: true }  // Create if not found, update if exists
    );

    // Redirect or respond with a success message
    res.redirect('/dashboard.html');
  } catch (error) {
    console.error('Error while calculating and saving health details:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { calculateAndSaveHealthDetails };
