import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)

    .get("/livros/buscar", LivroController.listarLivroPorEditora)

    .get("/livros/:id", LivroController.buscarLivros)

    .post("/livros", LivroController.cadastrarLivros)

    .put("/livros/:id", LivroController.editarLivros)

    .delete("/livros/:id", LivroController.excluirLivros)

export default router;