const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },

    // runValidators to check new exercises meet schema reqs
    { new: true, runValidators: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },

        // sum of the calories burned
        totalCaloriesBurned: {
          $sum: "$exercises.caloriesBurned",
        },
      },
    },
  ])
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
          // console.log(`total duration: ${totalDuration}`),
        },

        // sum of the calories burned
        calories_burned: {
          $sum: "$exercises.caloriesBurned",
          // console.log(`calories burned: ${calories_burned}`);
        },
      },
    },
  ])

    // can we arrange the data correctly?
    .sort({ _id: -1 })

    // only show last 7 workouts -- this is not the same as showing the last 7 days
    .limit(7)

    .then((dbWorkouts) => {
      // console.log(dbWorkouts);
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// posts to offline db
router.post("/api/workouts/bulk", (req, res) => {
  // console.log(req.body);
  Workout.insertMany(req.body).then((dbWorkout) => {
    res.json(dbWorkout);
  });
});

module.exports = router;
