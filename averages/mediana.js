const lista1 = [100, 250, 300, 200, 500, 40000];

const ordenarLista = (arrayNum) => {
	arrayNum.sort((a,b) => a-b);
};

function esPar(numero){
	if(numero%2 === 0){
		return true;
	} else if(numero%2 !== 0){
		return false;
	}
}

function CalcularMediaAritmetica(lista) {
	// let sumaLista = 0;
	// for(let i=0; i < lista.length; i++){
	// 	sumaLista += lista[i]
	// }
	const sumaLista = lista.reduce(
		function (valorAcumulado, nuevoElemento) {
			return valorAcumulado + nuevoElemento
		}, 0
	);
	const promedioLista = sumaLista/lista.length;
	return promedioLista;
}

const CalcularMediana = (array) => {
	ordenarLista(array);
	const mitadLista1 = parseInt(array.length/2);
	if(esPar(array.length)){
		const elemento1 = array[mitadLista1 - 1];
		const elemento2 = array[mitadLista1];
	
		return mediana = CalcularMediaAritmetica([elemento1, elemento2]);
	} else if(!esPar(array.length)) {
		return mediana = array[mitadLista1];
	}
}
