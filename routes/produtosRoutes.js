const express = require("express");

const router = express.Router();

const controllersProdutos = require("../controllers/produtosControllers");

router.get("/", controllersProdutos.getAll);
router.get("/:id", controllersProdutos.getById);
router.post("/", controllersProdutos.create);
router.put("/:id", controllersProdutos.update);
router.delete("/:id", controllersProdutos.remove);

module.exports = router;
