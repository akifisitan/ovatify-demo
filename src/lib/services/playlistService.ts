import { playlistDb } from "$lib/mock/mockPlaylistDb";
import type { Playlist } from "$lib/types";
import { getFromCache, playlistCache, saveToCache } from "$lib/utils/caches";

export async function getPlaylistById(token: string, playlistId: string) {
	console.log("Mocked getPlaylistById |", token[0], playlistId);
	const cachedMinutes = 2;
	const cachedData = getFromCache(playlistCache, playlistId);
	if (cachedData.data && !cachedData.stale) {
		return cachedData.data as Playlist;
	}
	// const response = await api.get(
	// 	`users/get-playlist-by-id/?playlist_id=${playlistId}`,
	// 	token
	// );
	// if (response.status !== 200) {
	// 	console.log("Error fetching playlist");
	// 	console.log(response);
	// 	return null;
	// }
	// // const data = response.data.playlist as Playlist;
	const data = playlistDb.get(Number(playlistId)) as unknown as Playlist;
	// console.log(data);
	saveToCache(playlistCache, playlistId, data, cachedMinutes);
	return data;
}

export async function getUserPlaylists(token: string) {
	// const res = await api.get(`users/get-playlists/?number_of_playlists=999`, token);
	// console.log(res);
	// return res;
	console.log("Mocked getUserPlaylists |", token[0]);
	const mockResponse = {
		data: {
			items: [
				{
					id: 114,
					name: "The Luna Sequence",
					description: "",
					song_imgs: [
						"https://i.scdn.co/image/ab67616d0000b273b72ed25cbf66f27a4338c9ee",
						"https://i.scdn.co/image/ab67616d0000b2734eec2ee2b4d80ccc9eaf51d7",
						"https://i.scdn.co/image/ab67616d0000b2735a11e6ccee5233eb49c64885",
						"https://i.scdn.co/image/ab67616d0000b273d16d31dbb7bc4328e8ace46e"
					],
					user_id: "8rk0Huh902bhmog6ckYwcMux10h1",
					friend_group_id: null
				},
				{
					id: 113,
					name: "Feint",
					description: "Feint playlist",
					song_imgs: ["https://i.scdn.co/image/ab67616d0000b2735545b80a9fe26faccb5b6a51"],
					user_id: "8rk0Huh902bhmog6ckYwcMux10h1",
					friend_group_id: null
				},
				{
					id: 110,
					name: "EDM",
					description: "My EDM playlist",
					song_imgs: [
						"https://i.scdn.co/image/ab67616d0000b2732437f22fe5e9e3181a2bbabb",
						"https://i.scdn.co/image/ab67616d0000b273d269fcf439d979c2eaec7c9e",
						"https://i.scdn.co/image/ab67616d0000b273cb5e9973c66bfd141e144f0e",
						"https://i.scdn.co/image/ab67616d0000b273ba4e5a8f7427a67decd6c40f"
					],
					user_id: "8rk0Huh902bhmog6ckYwcMux10h1",
					friend_group_id: null
				},
				{
					id: 112,
					name: "Ovatify - Newly added",
					description: "",
					song_imgs: [
						"https://i.scdn.co/image/ab67616d0000b273e030820bbd60a7a025be4dd0",
						"https://i.scdn.co/image/ab67616d0000b273d711a5688eb04158eb209b02",
						"https://i.scdn.co/image/ab67616d0000b273178a94189603caae1161aada",
						"https://i.scdn.co/image/ab67616d0000b27366017bc6a51e8b4c920d74c6"
					],
					user_id: "8rk0Huh902bhmog6ckYwcMux10h1",
					friend_group_id: null
				}
			],
			count: 4
		},
		error: null,
		status: 200
	} as any;
	return mockResponse;
}

export async function createEmptyPlaylist(token: string) {
	// const response = await api.post(`users/create-empty-playlist/`, token, {
	// 	name: null,
	// 	description: ""
	// });
	// console.log(response);
	console.log("Mocked createEmptyPlaylist |", token[0]);
	const mockResponse = {
		data: {
			message: "Playlist created succesfully"
		},
		error: null,
		status: 201
	};
	return mockResponse;
}

export async function addSongToPlaylist(
	token: string,
	body: { playlist_id: string; song_id: string }
) {
	console.log("Mocked addSongToPlaylist |", token[0], body);
	// const response = await api.post(`users/add-song-to-playlist/`, token, body);
	// console.log(response);
	const mockResponse = {
		data: {
			message: "Added song to playlist"
		},
		error: null,
		status: 200
	};
	return mockResponse;
}

export async function removeSongFromPlaylist(
	token: string,
	playlistId: string,
	songId: string
) {
	console.log("Mocked removeSongFromPlaylist |", token[0], playlistId, songId);
	// const response = await api.del(
	// 	`users/remove-song-from-playlist/?playlist_id=${playlistId}&song_id=${songId}`,
	// 	token
	// );
	// console.log(response);
	const mockResponse = {
		data: {
			message: "Song removed from playlist successfully"
		},
		error: null,
		status: 200
	};
	return mockResponse;
}

export async function editPlaylist(
	token: string,
	body: { playlist_id: string; name?: string; description?: string }
) {
	// const response = await api.put(`users/edit-playlist/`, token, body);
	// console.log(response);
	console.log("Mocked editPlaylist |", token[0], body);
	const mockResponse = {
		data: {
			message: "Playlist edited successfully"
		},
		error: null,
		status: 200
	};
	return mockResponse;
}

export async function deletePlaylist(token: string, playlistId: string) {
	console.log("Mocked deletePlaylist |", token[0], playlistId);
	// const response = await api.del(
	// 	`users/delete-playlist/?playlist_id=${playlistId}`,
	// 	token
	// );
	// console.log(response);
	const mockResponse = {
		data: {
			message: "Playlist deleted successfully"
		},
		error: null,
		status: 200
	};

	return mockResponse;
}

export async function saveAsPlaylist(
	token: string,
	body: { name: string; description: string; songs: string[] }
) {
	console.log("Mocked saveAsPlaylist |", token[0], body);
	return {
		error: null,
		status: 201
	};
}
