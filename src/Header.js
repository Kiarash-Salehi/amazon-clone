import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
	const [{ basket, user }] = useStateValue();
	const login = () => {
		if (user) {
			auth.signOut();
		} 
	};
	return (
		<nav className="header">
			<Link to="/">
				<img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" />
			</Link>
			<div className="header__search">
				<input type="search" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<Link to={!user && "/login"} className="header__link">
					<div onClick={login} className="header__option">
						<span>Hello {user?.email}</span>
						<span>{user ? 'Sign Out' : 'Sign In'}</span>
					</div>
				</Link>
				<Link to="/" className="header__link">
					<div className="header__option">
						<span>Returns </span>
						<span>& Orders</span>
					</div>
				</Link>
				<Link to="/" className="header__link">
					<div className="header__option">
						<span>Your </span>
						<span>Prime</span>
					</div>
				</Link>
				<Link to="/checkout" className="header__link">
					<div className="header__basketOption">
						<ShoppingBasketIcon />
						<span>{basket?.length}</span>
					</div>
				</Link>
			</div>
			
		</nav>
	);
}

export default Header;
