export class estudanteList {
    constructor() {
        this.estudantes = [];
    }

    getAllEstudantes() {
        return this.estudantes;
    }

    getEstudantesById(id) {
        return this.estudantes.find((estudante) => estudante.id === id);
    }

    createEstudantes(estudante) {
        this.estudantes.push(estudante);
    }
    
    updateEstudantes(id, nome, email, idade){
        const estudante = this.getEstudantesById(id);

        if(!estudante) {
            return null;
        }
        estudante.nome = nome;
        estudante.email = email;
        estudante.idade = idade;

        return estudante;
    }
    
    excludeEstudantes(estudanteId) {
     this.estudantes = this.estudantes.filter((estudante) => estudante.id !== estudanteId);
        
    }
}