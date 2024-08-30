// Receba uma sequência de três números e determine se estão em
// ordem crescente, decrescente ou desordenada.
// "Os números estão em ordem crescente."
// "Os números estão em ordem decrescente."
// "Os números estão desordenados."

var prompt = require('prompt-sync')()

let n1 = Number(prompt("Digite um número:"))
let n2 = Number(prompt("Digite outro número:"))
let n3 = Number(prompt("Digite mais um número:"))

if (n3 > n2 && n1 < n2) {
    console.log("Os números estão em ordem crescente")
} else if (n3 < n2 && n1 > n2) {
    console.log("Os números não estão em ordem decrescente")
} else {
    console.log("Os números não estão em ordem desordenada")
}