const router = require("express").Router();
const path = require("path");


// route to display exercise.html page
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});


// route to display stats.html page
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
