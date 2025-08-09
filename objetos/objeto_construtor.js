
function Pessoa(nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

pessoa = new Pessoa("william", "matias", 42)

console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa.idade)