import {v4 as uuidv4} from 'uuid';

export class Curso {
    constructor(nome, descricao, vagasLimite) {
        this.id = uuidv4();
        this.nome = nome;
        this.descricao = descricao;
        this.vagasLimite = vagasLimite;
    }
}