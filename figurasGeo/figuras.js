// -----Cuadrados ------------------------------------------
console.group("Cuadrados");
// const ladoCuad = 5;
// console.log(`El lado del cuadrado es: ${ladoCuad} cm`);

function CalcularPeriCuad(){
	const input = document.getElementById("InputCuadrado");
	const value = input.value;
	const periCuad = 4 * value;
	console.log(`El perímetro del cuadrado es: ${periCuad} cm`);
}

function CalcularAreaCuad(ladoCuad){
	const input = document.getElementById("InputCuadrado");
	const value = input.value;
	const areaCuad = value**2;
	console.log(`El área del cuadrado es: ${areaCuad} cm2`);
}
console.groupEnd();


// -----Triángulos------------------------------------------
console.group("Triángulos");
// const ladoTri1 = 6;
// const ladoTri2 = 6;
// const baseTri = 4;
// const alturaTri = 5.5;
// console.log(`Los lados del triángulo son: ${ladoTri1} cm, ${ladoTri2} cm`);
// console.log(`La base del triángulo es: ${baseTri} cm`);
// console.log(`La altura del triángulo es: ${alturaTri} cm`);

function CalcularPeriTri(ladoTri1, ladoTri2, baseTri){
	const periTri = ladoTri1 + ladoTri2 + baseTri;
	console.log(`El perímetro del triángulo es: ${periTri} cm`);
}

function CalcularAreaTri(baseTri, alturaTri){
	const areaTri = (baseTri * alturaTri)/2;
	console.log(`El área del triángulo es: ${areaTri} cm2`);
}
console.groupEnd();


// -----Círculos--------------------------------------------
console.group("Círculos");
// const radioCir = 5;
// const diamCir = radioCir * 2;
// const PI = Math.PI;
// console.log(`El radio del círculo es: ${radioCir} cm`);
// console.log(`El diámetro del círculo es: ${diamCir} cm`);

function CalcularDiametro(radio){
	return radio*2;
}

function CalcularPeriCir(radioCir){
	const periCir = CalcularDiametro(radioCir) * Math.PI;
	console.log(`El perímetro del Círculo es: ${periCir.toFixed(2)} cm`);
}

function CalcularAreaCir(radioCir){
	const areaCir = (radioCir**2) * Math.PI;
	console.log(`El área del círculo es: ${areaCir.toFixed(2)} cm2`);
}
console.groupEnd();