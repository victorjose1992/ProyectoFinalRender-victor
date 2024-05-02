const express = require('express');
const router = express.Router();
const { register, login, modifyProfile } = require('../controllers/user.controller');
const { isAuth } = require("../../middleware/auth")// ruta privada
const upload = require("../../middleware/upload.file")

// con la fincuon upload gestiono la subida y validacion de los archivo, donde "imagen" hace referencia al modelo de datos 
//router.post('/register', upload.single("image"), register);
router.post('/register', register);
router.post("/login", login);
router.put("/update", [isAuth], modifyProfile)


module.exports = router;