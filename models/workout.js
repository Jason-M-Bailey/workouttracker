const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// use exercise.html to determine appropriate fields needed
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "enter exercise type",
      },

      name: {
        type: String,
        trim: true,
        required: "enter exercise name",
      },

      // from exercise.html - Duration (minutes)
      duration: {
        type: Number,
        required: "enter exercise duration in minutes",
      },

      // from exercise.html - Weight (lbs)
      weight: {
        type: Number,
        // required: "enter exercise weight in lbs",
      },

      // from exercise.html - Reps
      reps: {
        type: Number,
        // required: "enter reps",
      },

      // from exercise.html - Sets
      sets: {
        type: Number,
        // required: "enter sets",
      },

      // from exercise.html - Distance (miles)
      distance: {
        type: Number,
        // required: "enter distance in miles",
      },

      // CALORIES BURNED
      caloriesBurned: {
        type: Number,
        // required: "enter calories burned",
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
