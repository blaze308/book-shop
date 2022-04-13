const { Router } = require("express");
const router = Router();
const { checkAuth, timeStamp } = require("../middlewares/users.middleware");
const {
  getAllUsers,
  getUser,
  createUser,
} = require("../controllers/users.controller");

// get all users
router.get("/", checkAuth, getAllUsers);

router.get("/:id", checkAuth, getUser);

// add new user
router.post("/", timeStamp, createUser);

module.exports = router;
