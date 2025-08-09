
let cliente = {
    nome: "william",
    sobrenome: "matias",
    idade: 42,

    nome_completo: function(){
        return `${this.nome} ${this.sobrenome}`
    },

    alterar_nome: function(novo_nome){
        this.nome = novo_nome
    }
}

console.log(cliente.nome_completo())
cliente.alterar_nome('maria')
console.log(cliente.nome_completo())
