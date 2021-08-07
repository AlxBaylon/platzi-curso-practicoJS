const lista1 = [100, 250, 300, 200, 500, 40000];

const mitadLista1 = parseInt(lista1.length/2);

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

let mediana;

lista1.forEach((numero) =>{alert(numero);})

if(esPar(lista1.length)){
	ordenarLista(lista1);
	const elemento1 = lista1[mitadLista1 - 1];
	const elemento2 = lista1[mitadLista1];

	mediana = CalcularMediaAritmetica([elemento1, elemento2]);
} else if(!esPar(lista1.length)) {
	ordenarLista(lista1);
	mediana = lista1[mitadLista1];
}