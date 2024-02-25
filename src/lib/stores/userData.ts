import type { UserData } from "$lib/types";
import { writable } from "svelte/store";

const initialUserDataState = {
	id: null,
	name: "",
	img_url: "",
	preferences: {
		data_processing: false,
		data_sharing: false
	}
} as UserData;

export const userData = writable(initialUserDataState);

export function resetUserData() {
	userData.set(initialUserDataState);
}

// const initialUserDataState = {
// 	id: "8rk0Huh902bhmog6ckYwcMux10h1",
// 	name: "akifisitan",
// 	img_url: "https://cdn.betterttv.net/emote/5f409d334510395d822c2885/3x.webp",
// 	preferences: {
// 		data_processing: true,
// 		data_sharing: true
// 	}
// } as UserData;
