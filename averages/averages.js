const lista = [1,2,4,5,7,8];

function CalcularMediaAritmetica(lista) {
	let sumaLista = 0;
	for(let i=0; i < lista.length; i++){
		sumaLista += lista[i]
	}

	const promedioLista = sumaLista/lista.length;

	return promedioLista;
}