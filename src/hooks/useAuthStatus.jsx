
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useAuthStatus = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [checkingStatus, setCheckingStatus] = useState(true);

	useEffect(() => {
		const auth = getAuth();
        // use the unsubscribe returned from onAuthStateChanged for cleanup
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setLoggedIn(true);
			}
			setCheckingStatus(false);
		});
		return unsubscribe;
	});
console.log(loggedIn)
	return { loggedIn, checkingStatus };
};
