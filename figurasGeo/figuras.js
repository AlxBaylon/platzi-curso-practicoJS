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

function CalcularPeriTri(){
	const inputTriL1 = document.getElementById("InputTriL1");
	const inputTriL2 = document.getElementById("InputTriL2");
	const inputTriB = document.getElementById("InputTriB");
	
	const periTri = parseFloat(inputTriL1.value) + parseFloat(inputTriL2.value) + parseFloat(inputTriB.value);
	console.log(`El perímetro del triángulo es: ${periTri} cm`);
}

function CalcularAreaTri(baseTri, alturaTri){
	const inputTriB = document.getElementById("InputTriB");
	const inputTriH = document.getElementById("InputTriH");
	const areaTri = (inputTriB.value * inputTriH.value)/2;
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

function PerimetroCir(radioCir){
	const periCir = CalcularDiametro(radioCir) * Math.PI;
	return `El perímetro del Círculo es: ${periCir.toFixed(2)} cm`;
}
function AreaCir(radioCir){
	const areaCir = (radioCir**2) * Math.PI;
	console.log(`El área del círculo es: ${areaCir.toFixed(2)} cm2`);
}

function CalcularPeriCir(){
	const inputCirculo = document.getElementById("InputCirculo");
	const radius_value =  parseFloat(inputCirculo.value);

	const perimetro = PerimetroCir(radius_value);
	console.log(perimetro);
}
function CalcularAreaCir(){
	const inputCirculo = document.getElementById("InputCirculo");
	const radius_value =  parseFloat(inputCirculo.value);

	const area = AreaCir(radius_value);
}
console.groupEnd();

//----------------- Altura triángulo isósceles --------------------------------
function CalcularAlturaTriI(){
	const inputTriL1 = document.getElementById('InputTriIL1');
	const triL1 = parseFloat(inputTriL1.value);
 
	const inputTriL2 = document.getElementById('InputTriIL2');
	const triL2 =  parseFloat(inputTriL2.value);

	const inputBTri = document.getElementById('InputTriIB');
	const triB = parseFloat(inputBTri.value);

	if(triL2 !== triL1 || triB >= (triL1+triL2)){
		alert("No es un triángulo isósceles");
	} else {
		AlturaPitagoras(triL1, triB);
	}
}

function AlturaPitagoras(lado1, base){
	const nuevaBaseTri = base/2;
	const alturaTriI = Math.sqrt((lado1**2)-(nuevaBaseTri**2));
	alert(`La altura del triángulo isósceles es: ${alturaTriI.toFixed(2)}cm`);
} 