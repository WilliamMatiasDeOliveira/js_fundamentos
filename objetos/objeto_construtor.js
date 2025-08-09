
function Pessoa(nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    this.nome_completo = function(){
        return `${this.nome} ${this.sobrenome}`
    }
}

pessoa = new Pessoa("william", "matias", 42)

console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa.idade)
console.log(pessoa.nome_completo())