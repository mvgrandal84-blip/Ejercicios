
const array = [1,2,3,4,5]
	
document.getElementById("array").innerHTML = array

const arrayDoble = array.map(duplicar)

document.getElementById("arrayDoble").innerHTML = arrayDoble

const arrayMayorTres = arrayDoble.filter(mayorTres )

document.getElementById("arrayMayorTres").innerHTML = arrayMayorTres


function duplicar(x) {
    return x * 2
}   

function mayorTres(x) {
    return x > 3
}
