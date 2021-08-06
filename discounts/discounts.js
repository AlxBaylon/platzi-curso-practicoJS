// const precio = 150;
// const descuento = 13;
const coupons = [
	{name:"C10%", discount: 10},
	{name:"C15%", discount: 15},
	{name:"C25%", discount: 25},
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

	const isCouponValueValid = function (coupon) {
		return coupon.name === couponValue;
	}

	const userCoupon = coupons.find(isCouponValueValid);

	if(priceValue == 0 || couponValue == ""){
		alert(`Ingrese valores correctos`);
	} else if(!userCoupon){
		alert(`Cupón "${ couponValue }" no es válido`);
	} else {
		const discountValue = userCoupon.discount;
		const precioConDescuento = CalcularPrecioConDescuento(priceValue, discountValue);

		const resultP = document.getElementById("ResultP");
		resultP.innerText = `El precio con descuento es: $${precioConDescuento}`;
	}
}