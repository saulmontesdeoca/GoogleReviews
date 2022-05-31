import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import shallow from 'zustand/shallow';
import useUserStore from '../store/user.store';
import { auth } from '../util/firebase_config';

export default function useApp() {
    const [isAuth, setIsAuth, setUser, currentUser] = useUserStore(
		state => [state.isAuth, state.setIsAuth, state.setUser,state.currentUser],
		shallow
	);
    // auth stuff
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				setIsAuth(true);
                console.log('user logged', user);
			} else {
				setIsAuth(false);
			}
			setUser(user);
		});

		// Cleanup suscription
		return () => unsubscribe();
	}, []);
    return { isAuth, currentUser };
};

