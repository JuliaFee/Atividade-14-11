import { Estudante } from "../modules/estudantes/estudante.js";
import { estudanteList } from "../modules/estudantes/estudanteList.js";

const list = new estudanteList();


export const getAllEstudantes = (req, res) => {

    const estudantes = list.getAllEstudantes();

    if(!estudantes.length){
        return res.status(404).send({ message: "não há cadastros", origem:"Not Found" });
    }
    return res.status(200).send({ message: "Cadastros: ", status:"OK", data: estudantes});
};

export const getEstudantesById = (req, res) => {
    const { id } = req.params;

    const estudante = list.getEstudantesById(id);

    if(!estudante) {
        return res.status(404).send({ message: "Not found." });
    }
    return res.status(200).send({ message: `Estudante ID: ${id}!`, data:estudante });
};

export const createEstudante = (req, res) => {
    const {nome, email, idade} = req.body;

    if(!nome || !email || !idade) {
        return res.status(400).send({ message: "Bad Request" });
    }
    
 const estudante = new Estudante(nome, email, idade);
    list.createEstudantes(estudante);

    return res.status(200).send({ message: "OK", data: estudante});
};

export const updateEstudante = (req, res) => {
    const { id } = req.params;
    const {nome, email, idade} = req.body;

    if(!nome || !email || !idade) {
        return res.status(400).send({ message: "Bad Request"});
    }

    const estudante = list.updateEstudantes(id, nome, email, idade);

    if(!estudante) {
        return res.status(404).send({ message: "Not Found"});
    }

    return res.status(200).send({ message: `id: ${id} editado com sucesso`, data: estudante });
};

export const deleteEstudante = (req, res) => {
    const { id } = req.params;

    const estudante = list.excludeEstudantes(id);

    if(!estudante) {
        return res.status(404).send({ message: "Not found" });
    }

    list.excludeEstudantes(id);
    return res.status(200).send({ message: `id: ${id} deletado com sucesso`, data: estudante });
}