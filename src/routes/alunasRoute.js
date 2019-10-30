const express = require("express")
const router = express.Router()
const controller = require('../controllers/alunasController')


router.get("/", controller.get)


router.get("/nasceuSp", controller.getSp)
router.get("/:id/idade", controller.getIdades)
router.get("/:id", controller.getById)
router.get("/:id/books", controller.getBooks)
router.post("/", controller.post)
/*router.post("/:id/books", controler.postBooks) */

module.exports = router


//a ordem das rotas altera o resultado de pesquisa, por esse motivo o sp está acima
// sempre ver se tem id, se tiver tem que colocar pra cima