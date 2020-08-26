import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, rating, image }) {
	const [, dispatch] = useStateValue();
	const addToBasket = () => {
		console.log({
			id,
			title,
			price,
			rating,
			image
		});
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id,
				title,
				price,
				rating,
				image
			}
		});
	};
	return (
		<div className="product">
			<div className="product__info">
				<h2>{title}</h2>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating).fill().map((_) => (<span role="img" aria-label="rating-stars">⭐</span>))}
				</div>
			</div>
			<img src={image} alt="Product" />
			<button onClick={addToBasket}>Add to basket</button>
		</div>
	);
}

export default Product;
