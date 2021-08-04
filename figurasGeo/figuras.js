// -----Cuadrados ------------------------------------------
console.group("Cuadrados");
const ladoCuad = 5;
console.log(`El lado del cuadrado es: ${ladoCuad} cm`);

const periCuad = ladoCuad * 4;
console.log(`El perímetro del cuadrado es: ${periCuad} cm`);

const areaCuad = ladoCuad**2;
console.log(`El área del cuadrado es: ${areaCuad} cm2`);
console.groupEnd();


// -----Triángulos------------------------------------------
console.group("Triángulos");
const ladoTri1 = 6;
const ladoTri2 = 6;
const baseTri = 4;
const alturaTri = 5.5;
console.log(`Los lados del triángulo son: ${ladoTri1} cm, ${ladoTri2} cm`);
console.log(`La base del triángulo es: ${baseTri} cm`);
console.log(`La altura del triángulo es: ${alturaTri} cm`);

const periTri = ladoTri1 + ladoTri2 + baseTri;
console.log(`El perímetro del triángulo es: ${periTri} cm`);

const areaTri = (baseTri * alturaTri)/2;
console.log(`El área del triángulo es: ${areaTri} cm2`);
console.groupEnd();


// -----Círculos--------------------------------------------
console.group("Círculos");
const radioCir = 5;
const diamCir = radioCir * 2;
const PI = Math.PI;
console.log(`El radio del círculo es: ${radioCir} cm`);
console.log(`El diámetro del círculo es: ${diamCir} cm`);

const periCir = diamCir * PI;
console.log(`El perímetro del triángulo es: ${periCir.toFixed(2)} cm`);

const areaCir = (radioCir**2) * PI;
console.log(`El perímetro del triángulo es: ${areaCir.toFixed(2)} cm`);
console.groupEnd();