import { groupDb } from "$lib/mock/mockGroupDb";
import { simulateNetworkLatency } from "$lib/mock/utils";

export async function createFriendGroup(token: string, groupName: string) {
	// const body = {
	// 	name: groupName,
	// 	description: ""
	// };
	// const response = await api.post(`users/create-friend-group/`, token, body);
	// console.log(response);
	await simulateNetworkLatency();
	console.log("Mocked createFriendGroup |", token[0], groupName);
	const mockResponse = {
		data: null,
		error: null,
		status: 201
	} as any;
	return mockResponse;
}

export async function getFriendGroupById(token: string, groupId: number) {
	// const response = await api.get(
	// 	`users/get-friend-group-by-id/?group_id=${groupId}&extended=true`,
	// 	token
	// );
	// console.log(response);
	// return response;
	await simulateNetworkLatency();
	console.log("Mocked getFriendGroupById |", token[0], groupId);
	const fg = groupDb.get(String(groupId));
	const mockResponse = {
		status: fg ? 200 : 404,
		data: { friend_group: fg as any },
		error: null
	};
	return mockResponse;
}

export async function getFriendGroups(token: string) {
	// const response = await api.get(`users/get-all-friend-groups-of-user/`, token);
	// console.log(response);
	// return response;
	await simulateNetworkLatency();
	console.log("Mocked getFriendGroups |", token[0]);
	const mockResponse = {
		data: { friend_groups: Array.from(groupDb.values()) },
		error: null,
		status: 200
	} as any;
	return mockResponse;
}

export async function addFriendToGroup(
	token: string,
	body: {
		group_id: number;
		friend_name: string;
	}
) {
	// return await api.put(`users/add-friend-to-group/`, token, body);
	await simulateNetworkLatency();
	console.log("Mocked addFriendToGroup |", token[0], body);
	const mockResponse = {
		status: 200,
		data: null,
		error: null
	} as any;
	return mockResponse;
}

export async function removeFriendFromGroup(
	token: string,
	body: {
		group_id: number;
		friend_name: string;
	}
) {
	// return await api.put(`users/remove-friend-from-group/`, token, body);
	await simulateNetworkLatency();
	console.log("Mocked removeFriendFromGroup |", token[0], body);
	const mockResponse = {
		status: 200,
		data: null,
		error: null
	} as any;
	return mockResponse;
}

export async function deleteFriendGroup(token: string, groupId: string) {
	// return await api.del(`users/delete-friend-group/?group_id=${groupId}`, token);
	await simulateNetworkLatency();
	console.log("Mocked deleteFriendGroup |", token[0], groupId);
	const mockResponse = {
		status: 204,
		data: null,
		error: null
	} as any;
	return mockResponse;
}

export async function getPlaylistsOfGroup(token: string, groupId: string) {
	// const response = await api.get(
	// 	`users/get-playlists-of-group/?group_id=${groupId}`,
	// 	token
	// );
	// console.log(response);
	// return response;
	await simulateNetworkLatency();
	console.log("Mocked getPlaylistsOfGroup |", token[0], groupId);
	const fg = groupDb.get(groupId);
	const mockResponse = {
		data: {
			items: fg?.playlists || [],
			count: fg?.playlists?.length || 0
		},
		error: null,
		status: 200
	};
	return mockResponse;
}

export async function createNewGroupPlaylist(token: string, groupId: number) {
	// const response = await api.post(`users/create-empty-playlist-in-group/`, token, {
	// 	playlist_name: "New Playlist",
	// 	group_id: groupId
	// });
	// return response;
	await simulateNetworkLatency();
	console.log("Mocked createNewGroupPlaylist |", token[0], groupId);
	const mockResponse = {
		status: 201,
		data: null,
		error: null
	} as any;
	return mockResponse;
}

export async function editFriendGroup(
	token: string,
	body: {
		group_id: number;
		name: string;
		description: string;
	}
) {
	// return await api.put(`users/edit-friend-group/`, token, body);
	await simulateNetworkLatency();
	console.log("Mocked editFriendGroup |", token[0], body);
	const mockResponse = {
		status: 200,
		data: null,
		error: null
	} as any;
	return mockResponse;
}
