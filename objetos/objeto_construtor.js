
// function Pessoa(nome, sobrenome, idade){
//     this.nome = nome
//     this.sobrenome = sobrenome
//     this.idade = idade
//     this.nome_completo = function(){
//         return `${this.nome} ${this.sobrenome}`
//     }
// }

// pessoa = new Pessoa("william", "matias", 42)

// console.log(pessoa.nome)
// console.log(pessoa.sobrenome)
// console.log(pessoa.idade)
// console.log(pessoa.nome_completo())

function Pessoa(n, s, i) {
    this.nome = n
    this.sobrenome = s
    this.idade = i

    // show
    this.show = function () {
        return `Nome : ${this.nome} Sobrenome: ${this.sobrenome} Idade: ${this.idade}`
    }

    // create
    this.create = function (novo_nome, novo_sobrenome, nova_idade) {
        this.nome = novo_nome
        this.sobrenome = novo_sobrenome
        this.idade = nova_idade
    }
    this.read = function () {
        console.log(pessoa.nome)
        console.log(pessoa.sobrenome)
        console.log(pessoa.idade)
    }
    this.update = function (novo_nome, novo_sobrenome, nova_idade) {

        if (novo_nome != ""){
            this.nome = novo_nome
        }

        if(novo_sobrenome != ""){
            this.sobrenome = novo_sobrenome
        }

        if(nova_idade != ""){
            this.idade = nova_idade
        }
        
    }

    this.delete = function(){
        this.nome = ""
        this.sobrenome = ""
        this.idade = ""
    }
}

pessoa = new Pessoa("william", "matias", 42)

pessoa = new Pessoa("william", "matias", 42)
console.log(pessoa.show())

pessoa.create("maria", "silva", 23)
console.log(pessoa.show())

pessoa.read()

pessoa = new Pessoa("william", "matias", 42)

pessoa.update("alvaro", "",15)
console.log(pessoa.sobrenome)

pessoa.update("alvaro", "",32)
console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa.idade)

pessoa.delete()
console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa.idade)

