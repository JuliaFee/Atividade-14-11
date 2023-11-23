export class CursoList {
    constructor() {
        this.cursos = [];
    }

    getAllCursos() {
        return this.cursos;
    }

    getCursosById(id) {
        return this.cursos.find((curso) => curso.id === id);
    }

    createCursos(curso) {
        this.cursos.push(curso);
    }
    
    updateCursos(id, nome, descricao, vagasLimite){
        const curso = this.getCursosById(id);

        if(!curso) {
            return null;
        }

        curso.nome = nome;
        curso.descricao = descricao;
        curso.vagasLimite = vagasLimite;

        return curso;
    }
    
    excludecursos(cursoID) {
     this.cursos = this.cursos.filter((curso) => curso.id !== cursoID);
        
    }
}