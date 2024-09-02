const express = require("express");
const { authenticateToken } = require('../Middlewares/authMiddleware');
const { updateUser, getCurrentUserProfile } = require("../Controllers/userController");

const router = express.Router();

router.put('/updateProfile/:id', authenticateToken, updateUser);
router.get("/profile", authenticateToken, getCurrentUserProfile);

module.exports = router;