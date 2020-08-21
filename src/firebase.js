import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAV6m95AX3FmzHIscAvmQXPPJgTlM3NkZY",
	authDomain: "clone-4635e.firebaseapp.com",
	databaseURL: "https://clone-4635e.firebaseio.com",
	projectId: "clone-4635e",
	storageBucket: "clone-4635e.appspot.com",
	messagingSenderId: "240194779884",
	appId: "1:240194779884:web:5ad9dc3fcc59cc0cb343c9",
	measurementId: "G-JWM8XRVMF1"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };