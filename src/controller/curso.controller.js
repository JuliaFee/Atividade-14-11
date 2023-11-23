export const getAllCursos = (req, res) => {
    if(!nome || !descricao || !vagasLimite) {
        return res.status(404).send({ message: "Nenhum curso foi registrado"});
    }
    return res.status(200).send({ message: "OK", status:"OK" });
};

export const getCursoById = (req, res) => {
    const { id } = req.params;
    if(!nome || !descricao || !vagasLimite) {
        return res.status(404).send({ message: "Not Found"});
    }
    return res.status(200).send({ message: `ID do curso: ${id}` });
    
};

export const createCurso = (req, res) => {
    const {nome, descricao,vagasLimite} = req.body;

    if(!nome || !descricao || !vagasLimite) {
        return res.status(400).send({ message: "Bad Request" });
    }
    return res.status(201).send({ message2: "Registrado com sucesso", message:`nome: ${nome}, descrição: ${descricao}, vagasLimite: ${vagasLimite}`});
};

export const updateCurso = (req, res) => {
    const { id } = req.params;
    const {nome, descricao,vagasLimite} = req.body;

    if(!nome || !descricao || !vagasLimite) {
        return res.status(400).send({ message: "Bad Request"});
    }

    return res.status(200).send({ message: `editado com sucesso`});
}

export const deleteCurso = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `deletado com sucesso` });
}