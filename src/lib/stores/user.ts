// import { auth } from "$lib/utils/firebase";
// import { onAuthStateChanged } from "firebase/auth";
import { writable } from "svelte/store";

// function userStore() {
// 	let unsubscribe: () => void;

// 	const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
// 		unsubscribe = onAuthStateChanged(auth, (user) => {
// 			set(user);
// 		});

// 		return () => unsubscribe();
// 	});

// 	return { subscribe };
// }

// export const user = userStore();

const initialUser = {
	async getIdToken() {
		return "NO_TOKEN";
	}
};

export const user = writable(initialUser);
