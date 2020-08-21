import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
	document.title = "Sign in / Register - Amazone Clone";
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const login = e => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(email, password)
			.then(auth => {
				history.push('/');
			})
			.catch(e => alert(e.message));
	};
	const register = e => {
		e.preventDefault();
		auth.createUserWithEmailAndPassword(email, password)
			.then(auth => {
				history.push('/');
			})
			.catch(e => alert(e.message));
	};
	return (
		<div className="login">
			<Link to="/">
				<img className="login__logo" src="https://upload.wikimedia.org/wikipedia//commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon-logo" />
			</Link>
			<div className="login__container">
				<h1>Sign-in</h1>
				<form>
					<label>
						Email<br />
						<input value={email} onChange={e => setEmail(e.target.value)} className="login__input" type="email" required />
					</label>
					<label>
						Password<br />
						<input value={password} onChange={e => setPassword(e.target.value)} className="login__input" type="password" required />
					</label>
					<button onClick={login} type="submit">Sign In</button>
				</form>
				<p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
				<button onClick={register}>Create your Amazon account</button>
			</div>
		</div>
	);
}

export default Login;
