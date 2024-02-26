export async function sendFriendRequest(token: string, friendUsername: string) {
	// const body = {
	// 	username: friendUsername
	// };
	// const response = await api.post(`users/send-friend-request/`, token, body);
	console.log("Mocked sendFriendRequest |", token[0], friendUsername);
	const mockResponse = {
		status: 200,
		error: null,
		data: null
	};
	return mockResponse;
}

export async function cancelFriendRequest(token: string, friendUsername: string) {
	// const body = {
	// 	username: friendUsername
	// };
	// const response = await api.post(`users/cancel-friend-request/`, token, body);
	// return response;
	console.log("Mocked cancelFriendRequest |", token[0], friendUsername);
	const mockResponse = {
		status: 200,
		error: null,
		data: null
	};
	return mockResponse;
}

export async function acceptFriendRequest(token: string, friendUsername: string) {
	// const body = {
	// 	username: friendUsername
	// };
	// return await api.post(`users/accept-friend-request/`, token, body);
	console.log("Mocked acceptFriendRequest |", token[0], friendUsername);
	const mockResponse = {
		status: 200,
		error: null,
		data: null
	};
	return mockResponse;
}

export async function rejectFriendRequest(token: string, friendUsername: string) {
	// const body = {
	// 	username: friendUsername
	// };
	// const response = await api.post("users/reject-friend-request/", token, body);
	console.log("Mocked rejectFriendRequest |", token[0], friendUsername);
	const mockResponse = {
		status: 200,
		error: null,
		data: null
	};
	return mockResponse;
}

export async function getUserIncomingFriendRequestCount(token: string) {
	// const response = await api.get(`users/get-incoming-request-count/`, token);
	// console.log(response);
	// return response;
	console.log("Mocked getUserIncomingFriendRequestCount |", token[0]);
	const mockResponse = {
		data: {
			count: 1
		},
		error: null,
		status: 200
	} as any;
	return mockResponse;
}

export async function getUserIncomingFriendRequests(token: string) {
	// const response = await api.get(`users/get-all-incoming-requests/`, token);
	// console.log(response);
	// return response;
	console.log("Mocked getUserIncomingFriendRequests |", token[0]);
	const mockResponse = {
		data: {
			requests: [
				{
					id: "FJy62xD40UUcafkXsf6OM6ywjv43",
					name: "xero1337",
					img_url: "https://cdn.betterttv.net/emote/60257bf1d47a0b2db8d1a56d/3x.webp"
				}
			]
		},
		error: null,
		status: 200
	};
	return mockResponse;
}

export async function getUserOutgoingFriendRequests(token: string) {
	// const response = await api.get(`users/get-all-outgoing-requests/`, token);
	// console.log(response);
	// return response;
	console.log("Mocked getUserOutgoingFriendRequests |", token[0]);
	const mockResponse = {
		data: {
			requests: [
				{
					id: "loF0yZLq4afTQ9CRWIwvDbvOm5f2",
					name: "pirlomania",
					img_url: "https://cdn.betterttv.net/emote/5694fa70720c7d4179f14d50/3x.webp"
				},
				{
					id: "UPidReJdkFcemiAkDNhvgwUgHvq1",
					name: "eo1903",
					img_url: "https://cdn.betterttv.net/emote/5f2b04201ab9be446c4e58d9/3x.webp"
				}
			]
		},
		error: null,
		status: 200
	};
	return mockResponse;
}

export async function getUserFriends(token: string) {
	// const response = await api.get(`users/get-all-friends/`, token);
	// console.log(response);
	// return response;
	console.log("Mocked getUserFriends |", token[0]);
	const mockResponse = {
		data: {
			friends: [
				{
					id: "1CeBdlPuPfXwUybIM26p3TAVBOn2",
					name: "akif23",
					img_url: "https://cdn.betterttv.net/emote/5f2b04201ab9be446c4e58d9/3x.webp"
				},
				{
					id: "Aliw0soYldSwNGwT9GoPSil1OxQ2",
					name: "johncena",
					img_url: "https://cdn.betterttv.net/emote/6083074c39b5010444d04da1/3x.webp"
				},
				{
					id: "pTDszgSapvN9dvNM6FFGxKnKnZe2",
					name: "mike77",
					img_url: "https://cdn.betterttv.net/emote/6037ae107c74605395f3419b/3x.webp"
				}
			]
		},
		error: null,
		status: 200
	};
	return mockResponse;
}

export async function suggestSong(
	token: string,
	body: { receiver_user: string; song_id: string }
) {
	// const response = await api.post(`users/suggest-song/`, token, body);
	console.log("Mocked suggestSong |", token[0], body);
	const mockResponse = {
		status: 200,
		data: null,
		error: null
	};
	return mockResponse;
}

export async function getFriendSuggestionCount(token: string) {
	console.log("Mocked getFriendSuggestionCount |", token[0]);
	const mockResponse = {
		data: {
			count: 0
		},
		error: null,
		status: 200
	};

	return mockResponse;
}

export async function setFriendSuggestionsAsSeen(token: string) {
	// return await api.put(`users/set-suggestion-seen/`, token, null);
	console.log("Mocked setFriendSuggestionsAsSeen |", token[0]);
	const mockResponse = {
		status: 200,
		data: null,
		error: null
	};
	return mockResponse;
}

export async function getFriendSuggestions(token: string) {
	// return await api.get(`users/get-suggestions/`, token);
	console.log("Mocked getFriendSuggestions |", token[0]);
	const mockResponse = {
		data: {
			items: [
				{
					id: 41,
					suggester_name: "akif23",
					suggester_img_url:
						"https://cdn.betterttv.net/emote/5f2b04201ab9be446c4e58d9/3x.webp",
					song_id: "4lQ0R8gZMc16khvAEWsZLG",
					song_img_url:
						"https://i.scdn.co/image/ab67616d0000b2735a11e6ccee5233eb49c64885",
					song_name: "Sanctuary In Dying Light"
				},
				{
					id: 42,
					suggester_name: "johncena",
					suggester_img_url:
						"https://cdn.betterttv.net/emote/6083074c39b5010444d04da1/3x.webp",
					song_id: "01V3FamQ70LSYhkDXz47Wt",
					song_img_url:
						"https://i.scdn.co/image/ab67616d0000b273071d26376b20e532b3129494",
					song_name: "Overhours"
				},
				{
					id: 43,
					suggester_name: "mike77",
					suggester_img_url:
						"https://cdn.betterttv.net/emote/6037ae107c74605395f3419b/3x.webp",
					song_id: "1M85o2ruB9uTj68dIXj6dJ",

					song_img_url:
						"https://i.scdn.co/image/ab67616d0000b273cb5e9973c66bfd141e144f0e",
					song_name: "Vagrant"
				}
			]
		},
		error: null,
		status: 200
	} as any;
	return mockResponse;
}

export async function deleteFriendSuggestion(token: string, suggestionId: string) {
	// return await api.del(
	// 	`users/delete-suggestion/?suggestion_id=${suggestionId}`,
	// 	token
	// );
	console.log("Mocked deleteFriendSuggestion |", token[0], suggestionId);
	const mockResponse = {
		data: {
			message: "Suggestion deleted successfully"
		},
		error: null,
		status: 200
	} as any;
	return mockResponse;
}

export async function removeFriend(token: string, friendUsername: string) {
	// const response = await api.del(
	// 	`users/remove-friend/?friend_username=${friendUsername}`,
	// 	token
	// );
	// console.log(response);
	console.log("Mocked removeFriend |", token[0], friendUsername);
	const mockResponse = {
		data: {
			detail: "Friend removed successfully"
		},
		error: null,
		status: 200
	};
	return mockResponse;
}

export async function getConsentFriends(token: string) {
	// const response = await api.get(`users/get-all-data-sharing-friends/`, token);
	// console.log(response);
	// return response;
	console.log("Mocked getConsentFriends |", token[0]);
	const mockResponse = {
		data: {
			friends: [
				{
					id: "1CeBdlPuPfXwUybIM26p3TAVBOn2",
					name: "akif23",
					img_url: "https://cdn.betterttv.net/emote/5f2b04201ab9be446c4e58d9/3x.webp"
				},
				{
					id: "Aliw0soYldSwNGwT9GoPSil1OxQ2",
					name: "johncena",
					img_url: "https://cdn.betterttv.net/emote/6083074c39b5010444d04da1/3x.webp"
				},
				{
					id: "pTDszgSapvN9dvNM6FFGxKnKnZe2",
					name: "mike77",
					img_url: "https://cdn.betterttv.net/emote/6037ae107c74605395f3419b/3x.webp"
				}
			]
		},
		error: null,
		status: 200
	} as any;
	return mockResponse;
}
