import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({item, title, price, rating, image}) {
	const [, dispatch] = useStateValue();
	const removeFromBasket = () => {
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id: item
		});
	};
	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} alt="Checkout Product" />
			<div className="checkoutProduct__info">
				<h2 className="checkoutProduct__title">{title}</h2>
				<h3 className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</h3>
				<div className="checkoutProduct__rating">
					{Array(rating).fill().map((_) => <span role="img" aria-label="rating stars">⭐</span>)}
				</div>
				<button onClick={removeFromBasket} className="checkoutProduct__button">Remove from basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
