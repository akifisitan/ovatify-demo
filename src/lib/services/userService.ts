export async function getRecentlyAddedSongs(token: string, numberOfSongs: number | null) {
	console.log("Mocked getRecentlyAddedSongs |", token[0], numberOfSongs);
	const mockResponse = {
		data: {
			songs: [
				{
					id: "2Zwc08pwCgQ6TNfQ8ZDxh3",
					name: "Infinity Chasers",
					release_year: 2017,
					main_artist: "Fractal Dreamers",
					img_url: "https://i.scdn.co/image/ab67616d0000b273cf48e14a726ff6c9977fa641"
				},
				{
					id: "3io1vp9hVwvuHzI5iIeDhm",
					name: "Like You",
					release_year: 2013,
					main_artist: "Fox Stevenson",
					img_url: "https://i.scdn.co/image/ab67616d0000b273789858164ba4b65f2d26c5c0"
				},
				{
					id: "2DOsq2dfLJ6p2dTcSZYNda",
					name: "Love Wins Again",
					release_year: 2019,
					main_artist: "Koven",
					img_url: "https://i.scdn.co/image/ab67616d0000b27366017bc6a51e8b4c920d74c6"
				},
				{
					id: "0xRLmFcXFtWBl8suWRiKj3",
					name: "Guardian",
					release_year: 2012,
					main_artist: "Tristam",
					img_url: "https://i.scdn.co/image/ab67616d0000b273e030820bbd60a7a025be4dd0"
				},
				{
					id: "0zdGcBMexiugXnCdfVgAo8",
					name: "Good Enough",
					release_year: 2021,
					main_artist: "Koven",
					img_url: "https://i.scdn.co/image/ab67616d0000b273d711a5688eb04158eb209b02"
				},
				{
					id: "5wWrVP5z7uV6ZtRN4RPfgw",
					name: "Drifters",
					release_year: 2019,
					main_artist: "Elizaveta",
					img_url: "https://i.scdn.co/image/ab67616d0000b27319a51f12f4276053c6040ffc"
				},
				{
					id: "12h3MmGaan0abls3Xg1Mpy",
					name: "Hymn",
					release_year: 2015,
					main_artist: "Nightcall",
					img_url: "https://i.scdn.co/image/ab67616d0000b273178a94189603caae1161aada"
				},
				{
					id: "7GUF0ejPHEe03rOc4u4Baj",
					name: "Migraine",
					release_year: 2016,
					main_artist: "Ellis",
					img_url: "https://i.scdn.co/image/ab67616d0000b2738c2d4c4e73ac53c23fdac81d"
				},
				{
					id: "7a4wS53T33baaPfUxrVeEy",
					name: "Bury The Light",
					release_year: 2021,
					main_artist: "Casey Edwards",
					img_url: "https://i.scdn.co/image/ab67616d0000b2731a3b3e78b2673db1cf02fb48"
				},
				{
					id: "5Dwy0ywGt7gr3tDfLeUlZ7",
					name: 'Devil Trigger (From "Devil May Cry 5")',
					release_year: 2020,
					main_artist: "Kimi",
					img_url: "https://i.scdn.co/image/ab67616d0000b273fb78089ddbea57266caf1c8e"
				}
			]
		},
		error: null,
		status: 200
	} as any;
	return mockResponse;
}

export async function getUserFavorites(token: string, numberOfSongs: number | null) {
	console.log("Mocked getUserFavorites |", token[0], numberOfSongs);
	const mockResponse = {
		data: {
			songs: [
				{
					id: "2Zwc08pwCgQ6TNfQ8ZDxh3",
					name: "Infinity Chasers",
					release_year: 2017,
					main_artist: "Fractal Dreamers",
					img_url: "https://i.scdn.co/image/ab67616d0000b273cf48e14a726ff6c9977fa641"
				},
				{
					id: "3io1vp9hVwvuHzI5iIeDhm",
					name: "Like You",
					release_year: 2013,
					main_artist: "Fox Stevenson",
					img_url: "https://i.scdn.co/image/ab67616d0000b273789858164ba4b65f2d26c5c0"
				},
				{
					id: "2DOsq2dfLJ6p2dTcSZYNda",
					name: "Love Wins Again",
					release_year: 2019,
					main_artist: "Koven",
					img_url: "https://i.scdn.co/image/ab67616d0000b27366017bc6a51e8b4c920d74c6"
				},
				{
					id: "0xRLmFcXFtWBl8suWRiKj3",
					name: "Guardian",
					release_year: 2012,
					main_artist: "Tristam",
					img_url: "https://i.scdn.co/image/ab67616d0000b273e030820bbd60a7a025be4dd0"
				},
				{
					id: "0zdGcBMexiugXnCdfVgAo8",
					name: "Good Enough",
					release_year: 2021,
					main_artist: "Koven",
					img_url: "https://i.scdn.co/image/ab67616d0000b273d711a5688eb04158eb209b02"
				},
				{
					id: "12h3MmGaan0abls3Xg1Mpy",
					name: "Hymn",
					release_year: 2015,
					main_artist: "Nightcall",
					img_url: "https://i.scdn.co/image/ab67616d0000b273178a94189603caae1161aada"
				},
				{
					id: "7a4wS53T33baaPfUxrVeEy",
					name: "Bury The Light",
					release_year: 2021,
					main_artist: "Casey Edwards",
					img_url: "https://i.scdn.co/image/ab67616d0000b2731a3b3e78b2673db1cf02fb48"
				},
				{
					id: "5Dwy0ywGt7gr3tDfLeUlZ7",
					name: 'Devil Trigger (From "Devil May Cry 5")',
					release_year: 2020,
					main_artist: "Kimi",
					img_url: "https://i.scdn.co/image/ab67616d0000b273fb78089ddbea57266caf1c8e"
				},
				{
					id: "5wWrVP5z7uV6ZtRN4RPfgw",
					name: "Drifters",
					release_year: 2019,
					main_artist: "Elizaveta",
					img_url: "https://i.scdn.co/image/ab67616d0000b27319a51f12f4276053c6040ffc"
				},
				{
					id: "7GUF0ejPHEe03rOc4u4Baj",
					name: "Migraine",
					release_year: 2016,
					main_artist: "Ellis",
					img_url: "https://i.scdn.co/image/ab67616d0000b2738c2d4c4e73ac53c23fdac81d"
				}
			]
		},
		error: null,
		status: 200
	} as any;
	return mockResponse;
}

export async function getEntityCount(
	token: string,
	entity: "artists" | "genres" | "moods" | "tempos",
	numberOfSongs: number = 10
) {
	// const response = await api.get(
	// 	`users/get-favorite-${entity}/?number_of_songs=${numberOfSongs}`,
	// 	token
	// );
	console.log("Mocked getEntityCount |", token[0], entity, numberOfSongs);
	let mockResponse;
	if (entity === "moods") {
		mockResponse = {
			data: {
				Excited: 7,
				Relaxed: 2,
				Happy: 1
			},
			error: null,
			status: 200
		} as any;
	} else if (entity === "artists") {
		mockResponse = {
			data: {
				Koven: 2,
				"The Luna Sequence": 1,
				"Casey Edwards": 1,
				"Fractal Dreamers": 1,
				Rayden: 1,
				Kimi: 1,
				Nightcall: 1,
				Tristam: 1,
				"Fox Stevenson": 1,
				"Anna Yvette": 1
			},
			error: null,
			status: 200
		} as any;
	} else if (entity === "genres") {
		mockResponse = {
			data: {
				"Melodic Dubstep": 2,
				Chillstep: 2,
				"Dancefloor Dnb": 2,
				Complextro: 2,
				"Gaming Edm": 2,
				"Future Rock": 1,
				"Sound Team": 1,
				Speedrun: 1,
				Brostep: 1,
				Edm: 1
			},
			error: null,
			status: 200
		} as any;
	} else if (entity === "tempos") {
		mockResponse = {
			data: {
				Fast: 7,
				Medium: 3
			},
			error: null,
			status: 200
		};
	}
	return mockResponse;
}

export async function editUserSongRating(token: string, songId: string, rating: number) {
	const body = {
		song_id: songId,
		rating: rating
	};
	// const response = await api.put(`users/edit-song-rating/`, token, body);
	// console.log(response);
	console.log("Mocked editUserSongRating |", token[0], body);
	const mockResponse = {
		data: {
			message: "User rating updated successfully"
		},
		error: null,
		status: 201
	} as any;
	return mockResponse;
}

export async function deleteUserSongRating(token: string, songId: string) {
	// const response = await api.del(`users/delete-song-rating/?song_id=${songId}`, token);
	// console.log(response);
	console.log("Mocked deleteUserSongRating |", token[0], songId);
	const mockResponse = {
		data: null,
		error: null,
		status: 204
	} as any;
	return mockResponse;
}

export async function editUserProfile(
	token: string,
	body: {
		username?: string;
		img_url?: string;
		data_processing_consent?: boolean;
		data_sharing_consent?: boolean;
	}
) {
	// return await api.put(`users/edit-user-preferences/`, token, body);
	console.log("Mocked editUserProfile |", token[0], body);
	const mockResponse = {
		data: null,
		error: null,
		status: 204
	} as any;
	return mockResponse;
}

export async function getUserProfileStats(token: string) {
	// return await api.get("users/get-profile-stats/", token);
	console.log("Mocked getUserProfileStats |", token[0]);
	const mockResponse = {
		data: {
			rated_count: 11,
			friend_count: 3,
			rating_average: 4.82
		},
		error: null,
		status: 200
	} as any;
	return mockResponse;
}

export async function getUserProfile(token: string) {
	// return await api.get(`users/get-user-profile/`, token);
	console.log("Mocked getUserProfile |", token[0]);
	const mockResponse = {
		data: {
			id: "8rk0Huh902bhmog6ckYwcMux10h1",
			name: "akifisitan",
			img_url: "/images/avatars/bird.webp",
			preferences: {
				data_processing: false,
				data_sharing: true
			}
		},
		error: null,
		status: 200
	};
	return mockResponse;
}

export async function exportSongsByGenre(token: string, genre: string) {
	// return await api.get(`users/export-by-genre/?genre=${genre}`, token);
	console.log("Mocked exportSongsByGenre |", token[0], genre);
	const mockResponse = {
		data: [
			{
				id: "2DOsq2dfLJ6p2dTcSZYNda",
				name: "Love Wins Again",
				genres: ["Chillstep", "Melodic Dubstep"],
				artists: ["Koven"],
				albums: ["Love Wins Again"],
				instruments: [],
				release_year: 2019,
				duration: 224,
				tempo: "Fast",
				mood: "Excited",
				recorded_environment: "Studio",
				replay_count: 0,
				version: "2019-04-24",
				img_url: "https://i.scdn.co/image/ab67616d0000b27366017bc6a51e8b4c920d74c6"
			},
			{
				id: "0zdGcBMexiugXnCdfVgAo8",
				name: "Good Enough",
				genres: ["Chillstep", "Melodic Dubstep"],
				artists: ["Koven"],
				albums: ["Butterfly Effect (Deluxe)"],
				instruments: [],
				release_year: 2021,
				duration: 260,
				tempo: "Fast",
				mood: "Excited",
				recorded_environment: "Studio",
				replay_count: 0,
				version: "2021-03-11",
				img_url: "https://i.scdn.co/image/ab67616d0000b273d711a5688eb04158eb209b02"
			},
			{
				id: "5wWrVP5z7uV6ZtRN4RPfgw",
				name: "Drifters",
				genres: [
					"Gaming Edm",
					"Dancefloor Dnb",
					"Chillstep",
					"Deep Indie Singer-Songwriter"
				],
				artists: ["Elizaveta", "Feint"],
				albums: ["Drifters"],
				instruments: [],
				release_year: 2019,
				duration: 259,
				tempo: "Fast",
				mood: "Excited",
				recorded_environment: "Studio",
				replay_count: 0,
				version: "2019-01-04",
				img_url: "https://i.scdn.co/image/ab67616d0000b27319a51f12f4276053c6040ffc"
			}
		],
		error: null,
		status: 200
	} as any;
	return mockResponse;
}

export async function exportSongsByArtist(token: string, artist: string) {
	// return await api.get(`users/export-by-artist/?artist=${artist}`, token);
	console.log("Mocked exportSongsByArtist |", token[0], artist);
	const mockResponse = {
		data: [
			{
				id: "5wWrVP5z7uV6ZtRN4RPfgw",
				name: "Drifters",
				genres: [
					"Gaming Edm",
					"Dancefloor Dnb",
					"Chillstep",
					"Deep Indie Singer-Songwriter"
				],
				artists: ["Elizaveta", "Feint"],
				albums: ["Drifters"],
				instruments: [],
				release_year: 2019,
				duration: 259,
				tempo: "Fast",
				mood: "Excited",
				recorded_environment: "Studio",
				replay_count: 0,
				version: "2019-01-04",
				img_url: "https://i.scdn.co/image/ab67616d0000b27319a51f12f4276053c6040ffc"
			}
		],
		error: null,
		status: 200
	} as any;
	return mockResponse;
}

export async function getRecentAdditionCounts(token: string) {
	// const response = await api.get(`users/get-recent-addition-counts`, token);
	console.log("Mocked getRecentAdditionCounts |", token[0]);
	const mockResponse = {
		data: {
			song_counts: [
				{
					date: "21-02",
					count: 0
				},
				{
					date: "22-02",
					count: 0
				},
				{
					date: "23-02",
					count: 0
				},
				{
					date: "24-02",
					count: 0
				},
				{
					date: "25-02",
					count: 1
				}
			]
		},
		error: null,
		status: 200
	};
	return mockResponse;
}

export async function uploadSongFile(token: string, file: File) {
	console.log("Mocked uploadSongFile |", token[0], file);
	const mockResponse = {
		data: { items: [] },
		status: 201,
		error: null
	};
	return mockResponse;
}

export async function deleteUserFromDatabase(token: string) {
	// return await api.del("users/delete-user/", token);
	console.log("Mocked deleteUserFromDatabase |", token[0]);
	const mockResponse = {
		status: 204,
		error: null,
		data: null
	} as any;
	return mockResponse;
}
