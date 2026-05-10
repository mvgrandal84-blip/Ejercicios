const string = "javascript"

document.getElementById("string").innerHTML = string
document.getElementById("mayusculas").innerHTML = string.toUpperCase()
document.getElementById("numeroLetras").innerHTML = string.length
document.getElementById("invertido").innerHTML = string.split("").reverse().join("")

