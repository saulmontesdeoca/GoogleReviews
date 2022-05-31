import 'firebaseui/dist/firebaseui.css';
import { auth } from 'firebaseui';
import firebase from 'firebase/compat/app';
import { useEffect } from 'react';
import { auth as localAuth } from '../../util/firebase_config';

// Create AuthUI Instance
const ui = new auth.AuthUI(localAuth);

export default function AuthPage() {
		// Load the ui firebase interface
	const config = {
		signInFlow: 'popup',
		signInSuccessUrl: 'http://localhost:3000/home',
		signInOptions: [
			{
				provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
				requireDisplayName: true,
			},
			{
				provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
				scopes: [
				  'https://www.googleapis.com/auth/contacts.readonly'
				],
				customParameters: {
				  // Forces account selection even when one account
				  // is available.
				  prompt: 'select_account'
				}
			  },
			// firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		],
		callbacks: {
			signInSuccessWithAuthResult: function (authResult, redirectUrl) {
				// User successfully signed in.
				// Return type determines whether we continue the redirect automatically
				// or whether we leave that to developer to handle.
				console.log('authResult', authResult);
				return true; 
			},
		},
		
		}
	useEffect(() => {
		ui.start('#firebaseui-auth-container', config);
	}, []);

	return (
		<div style={{textAlign: 'center', marginTop: 200}}>
			<img src="/images/googlereviews.png" alt="logo" style={{height: 140, maxHeight: '80%'}}/>
			<div id='firebaseui-auth-container' />
		</div>
	);
}



