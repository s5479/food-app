const express = require("express");
const router = express.Router();

router.get("/foodData", (req, res) => {
  try {
    res.send([global.food_data, global.food_Category]);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
