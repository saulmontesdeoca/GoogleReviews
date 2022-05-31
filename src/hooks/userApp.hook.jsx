import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import shallow from 'zustand/shallow';
import useUserStore from '../store/user.store';
import { auth } from '../util/firebase_config';
import { db } from '../util/firebase_config';
import { collection, setDoc, getDoc, doc } from 'firebase/firestore';

export default function useApp() {
    const [isAuth, setIsAuth, setUser, currentUser] = useUserStore(
		state => [state.isAuth, state.setIsAuth, state.setUser,state.currentUser],
		shallow
	);

	const userInDB = async () => {
		const user = await auth.currentUser;
		const usersCollection = collection(db, "Users");
		const userRef = doc(db, "Users", user.uid);
		const userSnapshot = await getDoc(userRef);
		if (userSnapshot.exists()) {
			setUser(userSnapshot.data());
		} else {
			const newUser = {
				displayName: user.displayName,
				email: user.email,
				photoURL: user.photoURL,
				createdAt: Date.now(),
				reviews: [],
				reviewCount: 0,
			}
			await setDoc(doc(db, "Users",user.uid), newUser);
			setUser(newUser);
		}
	}

    // auth stuff
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				setIsAuth(true);
                console.log('user logged', user);
				userInDB();
			} else {
				setIsAuth(false);
				setUser(user);
			}
		});

		// Cleanup suscription
		return () => unsubscribe();
	}, []);
    return { isAuth, currentUser };
};

