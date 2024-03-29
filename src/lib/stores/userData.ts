import type { UserData } from "$lib/types";
import { writable } from "svelte/store";

// const initialUserDataState = {
// 	id: null,
// 	name: "",
// 	img_url: "",
// 	preferences: {
// 		data_processing: false,
// 		data_sharing: false
// 	}
// } as UserData;

const initialUserDataState = {
	id: "8rk0Huh902bhmog6ckYwcMux10h1",
	name: "akifisitan",
	img_url: "/images/avatars/bird.webp",
	preferences: {
		data_processing: true,
		data_sharing: true
	}
} as UserData;

export const userData = writable(initialUserDataState);

export function resetUserData() {
	userData.set(initialUserDataState);
}
