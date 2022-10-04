import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (req, res) => {
        livros.find()
            .populate('autor')
            .exec((err, livros) => {
                res.status(200).json(livros);
            });
    }

    static buscarLivros = (req, res) => {
        const id = req.params.id;
        livros.findById(id)
        .populate("autor", "nome")
        .exec((err, livros) => {
            if (err) {
                res.status(400).send({
                    message: `${err.message} - Id não localizado`
                });
            } else {
                res.status(200).send(livros);
            }
        });
    }

    static cadastrarLivros = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - falha no cadastro`
                })
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static editarLivros = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {
            $set: req.body
        }, (err) => {
            if (!err) {
                res.status(200).send({
                    message: "Livro atualizado com sucesso"
                })
            } else {
                res.status(500).send({
                    message: err.message
                })
            }

        })
    }

    static excluirLivros = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err, livros) => {
            if (err) {
                res.status(400).send({
                    message: `${err.message} - Id não localizado`
                });
            } else {
                res.status(200).send(livros);
            }
        });
    }

    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora

        livros.find({'editora': editora}, {}, (err, livros) => {
            res.status(200).send(livros);
        })
    }
}

export default LivroController