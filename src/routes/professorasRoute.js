const express = require("express")
const router = express.Router()
const controller = require('../controllers/professorasController')

router.get("/", controller.get)

// router.get("/SemCpf", controller.getSemCpf)

module.exports = router
