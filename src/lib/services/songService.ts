import { songDb } from "$lib/mock/mockSongDb";
import * as api from "$lib/utils/api";
import { getFromCache, saveToCache, songCache } from "$lib/utils/caches";

export async function searchSpotifySong(token: string, query: string) {
	const response = await api.get(`songs/search-spotify/?search_string=${query}`, token);
	return response;
}

export async function searchDatabaseSong(token: string, query: string) {
	console.log("Mocked searchDatabaseSong |", token[0], query);
	const mockResponse = {
		data: {
			message: "Songs found",
			songs_info: [
				{
					spotify_id: "1M85o2ruB9uTj68dIXj6dJ",
					track_name: "Vagrant",
					release_year: 2015,
					album_name: ["Vagrant"],
					artist: ["Veela", "Feint"],
					album_url: "https://i.scdn.co/image/ab67616d0000b273cb5e9973c66bfd141e144f0e"
				},
				{
					spotify_id: "0UKQrQDMVcKN3ngG1kthYN",
					track_name: "Fading Wind",
					release_year: 2021,
					album_name: ["Fading Wind"],
					artist: ["Feint"],
					album_url: "https://i.scdn.co/image/ab67616d0000b27394cfbf911b2101b7beaa8719"
				},
				{
					spotify_id: "0tHVAJpXYyjboR8jL0dK8n",
					track_name: "Beyond",
					release_year: 2023,
					album_name: ["Beyond"],
					artist: ["Mylk", "Feint"],
					album_url: "https://i.scdn.co/image/ab67616d0000b2732437f22fe5e9e3181a2bbabb"
				},
				{
					spotify_id: "15fhccPHabcXcrmIxKFHum",
					track_name: "Space Boy",
					release_year: 2022,
					album_name: ["Space Boy"],
					artist: ["Rameses B", "Veela", "Feint"],
					album_url: "https://i.scdn.co/image/ab67616d0000b273d269fcf439d979c2eaec7c9e"
				},
				{
					spotify_id: "2SslWikfXUjCUXnVqI9v88",
					track_name: "Horizons - Original Mix",
					release_year: 2013,
					album_name: ["Straight Up Drum & Bass! Vol. 3"],
					artist: ["Veela", "Feint"],
					album_url: "https://i.scdn.co/image/ab67616d0000b273ba4e5a8f7427a67decd6c40f"
				},
				{
					spotify_id: "2eQUzzwm9FKMtx98qsWsFf",
					track_name: "Outbreak",
					release_year: 2017,
					album_name: ["Outbreak"],
					artist: ["Mylk", "Feint"],
					album_url: "https://i.scdn.co/image/ab67616d0000b2735a993a10ef92f8ba442784b5"
				},
				{
					spotify_id: "3AayefDdUFxivRs79bX7kV",
					track_name: "We Won'T Be Alone",
					release_year: 2015,
					album_name: ["We Won'T Be Alone"],
					artist: ["Feint", "Laura Brehm"],
					album_url: "https://i.scdn.co/image/ab67616d0000b2735545b80a9fe26faccb5b6a51"
				},
				{
					spotify_id: "5HQTZbMOzO7LWmopuf4hVm",
					track_name: "Words",
					release_year: 2016,
					album_name: ["Words"],
					artist: ["Feint", "Laura Brehm"],
					album_url: "https://i.scdn.co/image/ab67616d0000b273af202a7e0acbdedb41c25de4"
				},
				{
					spotify_id: "5RkJMrhW5aU2zMuJcZUNmh",
					track_name: "Do Better",
					release_year: 2021,
					album_name: ["Do Better"],
					artist: ["Feint"],
					album_url: "https://i.scdn.co/image/ab67616d0000b2734f6559eb1f19f25cb4097afa"
				},
				{
					spotify_id: "5mk5IUHKpdL0MBr6IY69hV",
					track_name: "Worth The Lie",
					release_year: 2017,
					album_name: ["Worth The Lie"],
					artist: ["Koven", "Muzz", "Feint"],
					album_url: "https://i.scdn.co/image/ab67616d0000b2730bdbfd4656953ed1fc44f0e4"
				},
				{
					spotify_id: "5wWrVP5z7uV6ZtRN4RPfgw",
					track_name: "Drifters",
					release_year: 2019,
					album_name: ["Drifters"],
					artist: ["Elizaveta", "Feint"],
					album_url: "https://i.scdn.co/image/ab67616d0000b27319a51f12f4276053c6040ffc"
				},
				{
					spotify_id: "6LKJwN8aF3uYod3JUPXjQR",
					track_name: "Time Bomb",
					release_year: 2012,
					album_name: ["Monstercat - Best Of Dnb & Drumstep Vol. 1"],
					artist: ["Veela", "Feint", "Boyinaband"],
					album_url: "https://i.scdn.co/image/ab67616d0000b2736d9683f96953d37bfd3ed047"
				}
			]
		},
		error: null,
		status: 200
	} as any;
	return mockResponse;
}

export async function addSong(token: string, id: string, rating: number) {
	const body = {
		spotify_id: id,
		rating: rating
	};
	const response = await api.post("songs/add-song/", token, body);
	return response;
}

export async function getSongById(token: string, id: string) {
	const cachedMinutes = 2;
	const cachedData = getFromCache(songCache, id);
	if (cachedData.data && !cachedData.stale) {
		return cachedData.data;
	}
	const response = await api.get(`songs/get-song-by-id/?song_id=${id}`, token);
	// console.log("Mocked getSongById |", token[0], id);
	// const response = {
	// 	data: { message: "song found", song_info: songDb.get(id)! },
	// 	error: null,
	// 	status: 200
	// };
	console.log(response);
	if (response.status !== 200) {
		console.log("Error fetching song");
		console.log(response);
		return null;
	}
	const data = response.data.song_info;
	saveToCache(songCache, id, data, cachedMinutes);
	return data;
}

export async function getAllRecentSongs(token: string) {
	console.log("Mocked getAllRecentSongs |", token[0]);
	const mockResponse = [
		{
			id: "3Gpffv3gaD1UxQPeElIjCp",
			name: "Batık Gemi",
			release_year: 2023,
			main_artist: "Semicenk",
			img_url: "https://i.scdn.co/image/ab67616d0000b273bc8e04d6c37ce05eff398ddd"
		},
		{
			id: "0Zpns7PZG68NajOTaWzQqA",
			name: "Kalleş",
			release_year: 2023,
			main_artist: "Semicenk",
			img_url: "https://i.scdn.co/image/ab67616d0000b273bc8e04d6c37ce05eff398ddd"
		},
		{
			id: "2cJhhpxflevAtPFku1kxID",
			name: "Gurbet",
			release_year: 1989,
			main_artist: "Özdemir Erdoğan",
			img_url: "https://i.scdn.co/image/ab67616d0000b273f0e41bd269bd8f48bdb3a677"
		},
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
			id: "5d1EmpjegN3JqRH3KIOJEB",
			name: "Aloy'S Theme (Feat. Julie Elven) - Part 1 - Motherland",
			release_year: 2017,
			main_artist: "Julie Elven",
			img_url: "https://i.scdn.co/image/ab67616d0000b2732523b2f62d91b1c9a82a0645"
		}
	] as any;
	return mockResponse;
}
