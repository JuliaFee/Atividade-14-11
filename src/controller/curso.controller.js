import { CursoList } from "../modules/cursos/cursoList.js";
import { Curso } from "../modules/cursos/curso.js";

const list = new CursoList()
export const getAllCursos = (req, res) => {
    const cursos = list.getAllCursos();

    if(!cursos.length){
        return res.status(404).send({ message: "não há registros de curso", origem:"Not Found" });
    }
    return res.status(200).send({ message: "Cursos: ", status:"OK", data: cursos});
};

export const getCursoById = (req, res) => {
    const { id } = req.params;

    const curso = list.getCursosById(id);

    if(!curso) {
        return res.status(404).send({ message: "Not found." });
    }
    return res.status(200).send({ message: `Curso ID: ${id}!`, data:curso });
};

export const createCurso = (req, res) => {
    const {nome, descricao, vagasLimite} = req.body;

    if(!nome || !descricao || !vagasLimite) {
        return res.status(400).send({ message: "Bad Request"});
    }
    
 const curso = new Curso(nome, descricao, vagasLimite);
    list.createCursos(curso);

    return res.status(200).send({ message: "OK", data: curso});
};

export const updateCurso = (req, res) => {
    const { id } = req.params;
    const {nome, descricao, vagasLimite} = req.body;

    if(!nome || !descricao || !vagasLimite) {
        return res.status(400).send({ message: "Bad Request"});
    }

    const curso = list.updateCursos(id, nome, descricao, vagasLimite);

    if(!curso) {
        return res.status(404).send({ message: "Not Found"});
    }

    return res.status(200).send({ message: `id: ${id} editado com sucesso`, data: curso });
};

export const deleteCurso = (req, res) => {
    const { id } = req.params;

    const cursos = list.excludecursos(id);

    list.excludecursos(id);
    return res.status(200).send({ message: `id: ${id} deletado com sucesso`, data: cursos });
}
