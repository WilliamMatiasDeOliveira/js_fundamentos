
let text = "Hello, World"
// CONVERT STRING PARA ARRAY
// se colocar aspas sem espaço a frase sera retornada letra por letra
let array = text.split(",") // <- ponto de quebra para virar um indice no array

for(let i = 0; i< array.length; i++){
    console.log(array[i] + "\n")
}

// O METODO JOIN SE TRATA DE UM METODO DE ARRAY
// Convert array em string
let string = array.join(",") // <-aki vai o separador
console.log(string)