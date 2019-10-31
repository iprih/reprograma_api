const express = require("express")
const router = express.Router()
const controller = require('../controllers/professorasController')

router.get("/", controller.get)
router.get("/:id", controller.getById)
// router.get("/SemCpf", controller.getSemCpf)

router.post("/", controller.post)


module.exports = router
