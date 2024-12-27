const express = require('express');
const router = express.Router();

const { signup, login } = require('../controllers/AuthControllers');
const { signupValidation, loginValidation } = require('../middlewares/authValidation');

router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);

module.exports = router;