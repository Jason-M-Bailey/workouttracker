const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
      },

      // from exercise.html - Reps
      reps: {
        type: Number,
      },

      // from exercise.html - Sets
      sets: {
        type: Number,
      },

      // from exercise.html - Distance (miles)
      distance: {
        type: Number,
      },

      // CALORIES BURNED
      caloriesBurned: {
        type: Number,
      }


    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
