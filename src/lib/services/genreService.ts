import { genreDb } from "$lib/mock/mockGenreDb";
import { simulateNetworkLatency } from "$lib/mock/utils";

export async function getRandomSongGenres(token: string, number: number) {
	await simulateNetworkLatency();
	console.log("Mocked getRandomSongGenres |", token[0], number);
	const mockResponse = [
		{
			id: 244,
			name: "Turkish Pop",
			img_url: "https://i.scdn.co/image/ab67616d0000b273bc8e04d6c37ce05eff398ddd"
		},
		{
			id: 223,
			name: "Turkish Hip Hop",
			img_url: "https://i.scdn.co/image/ab67616d0000b273bc818f91ee751496cfafd3ae"
		},
		{
			id: 224,
			name: "Turkish Trap",
			img_url: "https://i.scdn.co/image/ab67616d0000b27363d8013f0ee485242669e606"
		},
		{
			id: 228,
			name: "Rap",
			img_url: "https://i.scdn.co/image/ab67616d0000b273a5e9944cc01971c02583ba49"
		},
		{
			id: 232,
			name: "Pop",
			img_url: "https://i.scdn.co/image/ab67616d0000b273e8cdb38d791a31b4732b3070"
		},
		{
			id: 226,
			name: "Hip Hop",
			img_url: "https://i.scdn.co/image/ab67616d0000b2734d3fa5ce7ba599f4fd7803ef"
		},
		{
			id: 258,
			name: "Pop Dance",
			img_url: "https://i.scdn.co/image/ab67616d0000b273864f951a4d0a097a4a178539"
		},
		{
			id: 261,
			name: "Pop Rap",
			img_url: "https://i.scdn.co/image/ab67616d0000b2734a7f13cd6d9d7d1ab9bfda35"
		},
		{
			id: 266,
			name: "Trap",
			img_url: "https://i.scdn.co/image/ab67616d0000b2734d3fa5ce7ba599f4fd7803ef"
		},
		{
			id: 256,
			name: "Edm",
			img_url: "https://i.scdn.co/image/ab67616d0000b273e030820bbd60a7a025be4dd0"
		}
	] as any;
	return mockResponse;
}

export async function getSongsByGenreName(
	token: string,
	number: number,
	genreName: string
) {
	await simulateNetworkLatency();
	console.log("Mocked getSongsByGenreName |", token[0], number, genreName);
	// @ts-ignore
	return genreDb[genreName].songs;
}

export async function getUserGenreNames(token: string) {
	await simulateNetworkLatency();
	console.log("Mocked getUserGenreNames |", token[0]);
	const mockResponse = {
		data: {
			genres: [
				"Chillstep",
				"Edm",
				"Complextro",
				"Speedrun",
				"Dancefloor Dnb",
				"Brostep",
				"Gaming Edm",
				"Electro House",
				"Deep Indie Singer-Songwriter",
				"Sound Team",
				"Melodic Dubstep",
				"Filthstep"
			]
		},
		error: null,
		status: 200
	} as any;
	return mockResponse;
}
