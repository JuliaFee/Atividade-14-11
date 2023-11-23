import {Router} from "express";
import rotaEstudante from "./estudante.router.js";
import rotasCurso from "./cursos.router.js";

const rotas = Router();

rotas.use("/estudantes", rotaEstudante);
rotas.use("/cursos", rotasCurso);

rotas.get("/", (req, res) => {
    return res.status(200).send({ message: "OK" });
});

export default rotas;