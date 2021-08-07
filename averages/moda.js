const lista1 = [1,2,3,1,3,4,2,1,2];

const CalcularModa = (lista) => {
	const listaCount = {};

	lista.map(function (elemento) {
		if(listaCount[elemento]){
			listaCount[elemento] += 1;
		} else{
			listaCount[elemento] = 1;
		}
	});

	const listaArray = Object.entries(listaCount).sort((elementoA, elementoB) => {
		return elementoA[1] - elementoB[1];
	}
	);
	const	moda = listaArray[listaArray.length - 1];
	
	return moda;
}
