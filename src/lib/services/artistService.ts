import { simulateNetworkLatency } from "$lib/mock/utils";

export async function getUserArtistNames(token: string) {
	await simulateNetworkLatency();
	console.log("Mocked getUserArtistNames |", token[0]);
	const mockResponse = {
		data: {
			artists: [
				"Kimi",
				"Casey Edwards",
				"Anna Yvette",
				"Fractal Dreamers",
				"Fox Stevenson",
				"Nightcall",
				"Feint",
				"Rayden",
				"Elizaveta",
				"Koven",
				"Tristam",
				"Ellis"
			]
		},
		error: null,
		status: 200
	} as any;
	return mockResponse;
}
