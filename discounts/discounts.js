// const precio = 150;
// const descuento = 13;
const coupons = [
	"C10%",
	"C15%",
	"C25%",
]

function CalcularPrecioConDescuento(precio, descuento){
	const porcentajePrecioConDescuento = 100 - descuento;
	const precioConDescuento = (precio*porcentajePrecioConDescuento) / 100;

	return precioConDescuento;
}

function onClickDiscountPrice(){
	const inputPrice = document.getElementById("InputPrice");
	const priceValue = inputPrice.value;

	const inputCoupon = document.getElementById("InputCupon");
	const couponValue = inputCoupon.value;

	let discountValue = 0;

	if(priceValue == 0 || couponValue == ""){
		alert(`Ingrese valores correctos`);
	} else if(!coupons.includes(couponValue)){
		alert(`Cupón no válido`);
	} else {
		switch(couponValue){
			case coupons[0]:
				discountValue = 10;
				break;
			case coupons[1]:
				discountValue = 15;
				break;
			case coupons[2]:
				discountValue = 25;
				break;
		}
		const precioConDescuento = CalcularPrecioConDescuento(priceValue, discountValue);

		const resultP = document.getElementById("ResultP");
		resultP.innerText = `El precio con descuento es: $${precioConDescuento}`;
	}
}