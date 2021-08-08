// const lista = [40,60];

function CalcularPromedioArm(lista) {
	const sumaLista = lista.reduce(
		function (valorAcumulado, nuevoElemento) {
			return valorAcumulado + (1/nuevoElemento);
		}, 0
	);
	
	const promedioArm = lista.length/sumaLista;

	return promedioArm.toFixed(2);
}
