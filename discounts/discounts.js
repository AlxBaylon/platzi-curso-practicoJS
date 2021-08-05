// const precio = 150;
// const descuento = 13;

function CalcularPrecioConDescuento(precio, descuento){
	const porcentajePrecioConDescuento = 100 - descuento;
	const precioConDescuento = (precio*porcentajePrecioConDescuento) / 100;

	return precioConDescuento;
}

function onClickDiscountPrice(){
	const inputPrice = document.getElementById("InputPrice");
	const priceValue = inputPrice.value;

	const inputDiscount = document.getElementById("InputDiscount");
	const discountValue = inputDiscount.value;

	if(priceValue == 0 || discountValue == 0){
		alert(`Ingrese valores correctos`);
	} else {
		const precioConDescuento = CalcularPrecioConDescuento(priceValue, discountValue);

		const resultP = document.getElementById("ResultP");
		resultP.innerText = `El precio con descuento es: $${precioConDescuento}`;
	}
}