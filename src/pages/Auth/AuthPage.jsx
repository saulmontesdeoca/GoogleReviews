import 'firebaseui/dist/firebaseui.css';
import { auth } from 'firebaseui';
import firebase from 'firebase/compat/app';
import { useEffect } from 'react';
import { auth as localAuth } from '../../util/firebase_config';

// Create AuthUI Instance
const ui = new auth.AuthUI(localAuth);

export default function AuthPage() {
		// Load the ui firebase interface
	useEffect(() => {
		ui.start('#firebaseui-auth-container', {
			signInFlow: 'popup',
			signInOptions: [
				firebase.auth.EmailAuthProvider.PROVIDER_ID,
				firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			],
			callbacks: {
				signInSuccessWithAuthResult: function (authResult) {
					return false; 
				},
			},
		});
	}, []);

	return (
		<>
			<div id='firebaseui-auth-container' />
		</>
	);
}



