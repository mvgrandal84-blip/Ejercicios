
let nombre = ""
function saludar(nombre) {
	return "Hola " + nombre
	}

function numeroMayor(n1, n2){
		if (n1 > n2){
			return n1
		}	
		else if (n1 < n2){
			return n2
		}	
		else {
			return "Son iguales"
		}
	}
	
	document.getElementById("saludar").innerHTML = saludar("Eneko")
	document.getElementById("numMayor").innerHTML = numeroMayor(15 , 15)
	
	
	
	
