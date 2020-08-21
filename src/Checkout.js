import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
	document.title = "Checkout - Amazone Clone";
	const [{ basket }] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="ad" />
				{basket?.length === 0 ? (
					<div className="checkout__title">
						<h2>Your basket is empty! shop now <span role="img" aria-label="shop now">🛒</span></h2>
					</div>
				) : (
					<div className="checkout__title">
						<h2>Your shopping basket</h2>
						{basket.map(item => <CheckoutProduct item={item.id} title={item.title} price={item.price} rating={item.rating} image={item.image} />)}
					</div>
				)}
			</div>
				{basket.length > 0 && (
					<div className="checkout__right">
						<Subtotal />
					</div>
				)}
		</div>
	);
}

export default Checkout;
