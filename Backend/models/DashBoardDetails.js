const mongoose = require('mongoose');

const dashboardDetailsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Reference to the User model
    required: true,
  },
  age: Number,
  gender: String,
  height: Number,
  weight: Number,
  bmi: Number,
  bmr: Number,
  bmiCategory: String,  // e.g., Underweight, Normal weight, Overweight, Obese
  incomeClass: String,  // Middle Class or Rich
  activityLevel: String,  // Low, Moderate, High
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

dashboardDetailsSchema.pre('save', function(next) {
  // Update the updatedAt field whenever the document is saved
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('DashboardDetails', dashboardDetailsSchema);
