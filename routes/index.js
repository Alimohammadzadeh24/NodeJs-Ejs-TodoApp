const express = require("express")
const todosController = require('../controllers/todos')

const router = express.Router()

router.get('/' , todosController.getIndex)

module.exports = router;