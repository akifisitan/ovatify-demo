import * as api from "$lib/utils/api";

export async function recommendYouMightLike(token: string, count: number) {
	console.log("Mocked recommendYouMightLike |", token[0], count);
	const mockResponse = {
		data: {
			message: "Recommendation based on track is successful",
			tracks_info: [
				{
					id: "2ojIqYSnGPEz0BG5pLtDUa",
					name: "Crescendo",
					release_year: 2016,
					main_artist: "Muzz",
					img_url: "https://i.scdn.co/image/ab67616d0000b273d7cc4112b22edd77cd36a9d6"
				},
				{
					id: "7GUF0ejPHEe03rOc4u4Baj",
					name: "Migraine",
					release_year: 2016,
					main_artist: "Ellis",
					img_url: "https://i.scdn.co/image/ab67616d0000b2738c2d4c4e73ac53c23fdac81d"
				},
				{
					id: "2SslWikfXUjCUXnVqI9v88",
					name: "Horizons - Original Mix",
					release_year: 2013,
					main_artist: "Veela",
					img_url: "https://i.scdn.co/image/ab67616d0000b273ba4e5a8f7427a67decd6c40f"
				},
				{
					id: "5mk5IUHKpdL0MBr6IY69hV",
					name: "Worth The Lie",
					release_year: 2017,
					main_artist: "Koven",
					img_url: "https://i.scdn.co/image/ab67616d0000b2730bdbfd4656953ed1fc44f0e4"
				},
				{
					id: "7wUW5qYK19RlL6ljqDbc5x",
					name: "Feelings",
					release_year: 2021,
					main_artist: "Diviners",
					img_url: "https://i.scdn.co/image/ab67616d0000b273eb16425d0ca961deead3d7be"
				},
				{
					id: "0xRLmFcXFtWBl8suWRiKj3",
					name: "Guardian",
					release_year: 2012,
					main_artist: "Tristam",
					img_url: "https://i.scdn.co/image/ab67616d0000b273e030820bbd60a7a025be4dd0"
				},
				{
					id: "5wp6dhW0dCOO0TG4MGCIPT",
					name: "By Your Side",
					release_year: 2020,
					main_artist: "Raphaella",
					img_url: "https://i.scdn.co/image/ab67616d0000b27370bef918a513d36c8370fb99"
				},
				{
					id: "1M85o2ruB9uTj68dIXj6dJ",
					name: "Vagrant",
					release_year: 2015,
					main_artist: "Veela",
					img_url: "https://i.scdn.co/image/ab67616d0000b273cb5e9973c66bfd141e144f0e"
				}
			]
		},
		error: null,
		status: 200
	} as any;
	return mockResponse;
}

export async function recommendSinceYouLike(token: string, count: number) {
	const response = await api.get(`users/recommend-since-you-like/?count=${count}`, token);
	return response;
}

// Spotify song recommendation for friends
export async function recommendFriendMix(token: string, count: number) {
	const response = await api.get(`users/recommend-friend-mix/?count=${count}`, token);
	return response;
}

// Database song recommendation for friends
export async function recommendFriendsListen(token: string, count: number) {
	const response = await api.get(`users/recommend-friend-listen/?count=${count}`, token);
	console.log(response);
	return response;
}
