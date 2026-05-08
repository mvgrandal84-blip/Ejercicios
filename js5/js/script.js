
let frutas = ["Pera", "Platano", "Kiwi", "Piña", "Fresa"]

let primera = frutas [0]
let ultima = frutas [frutas.length - 1]

document.getElementById("primeraFruta").innerHTML = primera
document.getElementById("ultimaFruta").innerHTML = ultima

let todas = ""
for (let i=0; i<frutas.length; i++){
	todas = todas + frutas[i] + " "
	}
document.getElementById("todas").innerHTML = todas