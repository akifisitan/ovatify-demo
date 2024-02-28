import { simulateNetworkLatency } from "$lib/mock/utils";

export async function recommendYouMightLike(token: string, count: number) {
	await simulateNetworkLatency();
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
	await simulateNetworkLatency();
	console.log("Mocked recommendSinceYouLike |", token[0], count);
	const mockResponse = {
		data: {
			message: "Recommendation based on what you listen is successful",
			tracks_info: {
				"Dancefloor Dnb": [
					{
						id: "0xRLmFcXFtWBl8suWRiKj3",
						name: "Guardian",
						release_year: 2012,
						main_artist: "Tristam",
						img_url: "https://i.scdn.co/image/ab67616d0000b273e030820bbd60a7a025be4dd0"
					},
					{
						id: "0UKQrQDMVcKN3ngG1kthYN",
						name: "Fading Wind",
						release_year: 2021,
						main_artist: "Feint",
						img_url: "https://i.scdn.co/image/ab67616d0000b27394cfbf911b2101b7beaa8719"
					},
					{
						id: "0tHVAJpXYyjboR8jL0dK8n",
						name: "Beyond",
						release_year: 2023,
						main_artist: "Mylk",
						img_url: "https://i.scdn.co/image/ab67616d0000b2732437f22fe5e9e3181a2bbabb"
					},
					{
						id: "2ojIqYSnGPEz0BG5pLtDUa",
						name: "Crescendo",
						release_year: 2016,
						main_artist: "Muzz",
						img_url: "https://i.scdn.co/image/ab67616d0000b273d7cc4112b22edd77cd36a9d6"
					},
					{
						id: "15fhccPHabcXcrmIxKFHum",
						name: "Space Boy",
						release_year: 2022,
						main_artist: "Rameses B",
						img_url: "https://i.scdn.co/image/ab67616d0000b273d269fcf439d979c2eaec7c9e"
					},
					{
						id: "2Tnt1ux4o63qXFR8G9kePT",
						name: "Still Sleepless - Ekko & Sidetrack Remix",
						release_year: 2022,
						main_artist: "D.O.D",
						img_url: "https://i.scdn.co/image/ab67616d0000b273268d3185e22cdcd2b9f262b2"
					},
					{
						id: "3io1vp9hVwvuHzI5iIeDhm",
						name: "Like You",
						release_year: 2013,
						main_artist: "Fox Stevenson",
						img_url: "https://i.scdn.co/image/ab67616d0000b273789858164ba4b65f2d26c5c0"
					},
					{
						id: "2eQUzzwm9FKMtx98qsWsFf",
						name: "Outbreak",
						release_year: 2017,
						main_artist: "Mylk",
						img_url: "https://i.scdn.co/image/ab67616d0000b2735a993a10ef92f8ba442784b5"
					},
					{
						id: "5RkJMrhW5aU2zMuJcZUNmh",
						name: "Do Better",
						release_year: 2021,
						main_artist: "Feint",
						img_url: "https://i.scdn.co/image/ab67616d0000b2734f6559eb1f19f25cb4097afa"
					},
					{
						id: "1M85o2ruB9uTj68dIXj6dJ",
						name: "Vagrant",
						release_year: 2015,
						main_artist: "Veela",
						img_url: "https://i.scdn.co/image/ab67616d0000b273cb5e9973c66bfd141e144f0e"
					}
				],
				Chillstep: [
					{
						id: "0zdGcBMexiugXnCdfVgAo8",
						name: "Good Enough",
						release_year: 2021,
						main_artist: "Koven",
						img_url: "https://i.scdn.co/image/ab67616d0000b273d711a5688eb04158eb209b02"
					},
					{
						id: "5psoxZpBVWS27k9Fngaes9",
						name: "Ghost Assassin - Vip",
						release_year: 2015,
						main_artist: "Veela",
						img_url: "https://i.scdn.co/image/ab67616d0000b273733ad1e081582ee5ac914553"
					},
					{
						id: "01V3FamQ70LSYhkDXz47Wt",
						name: "Overhours",
						release_year: 2019,
						main_artist: "Warriyo",
						img_url: "https://i.scdn.co/image/ab67616d0000b273071d26376b20e532b3129494"
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
						id: "4ChBLndekjzQveHPsn3r6W",
						name: "Let It Be (Feat. Veela)",
						release_year: 2011,
						main_artist: "Veela",
						img_url: "https://i.scdn.co/image/ab67616d0000b2731e240c89392460689b7615a3"
					},
					{
						id: "3AayefDdUFxivRs79bX7kV",
						name: "We Won'T Be Alone",
						release_year: 2015,
						main_artist: "Feint",
						img_url: "https://i.scdn.co/image/ab67616d0000b2735545b80a9fe26faccb5b6a51"
					},
					{
						id: "5iRAuFJ2REy13omtUqYbEG",
						name: "Be Honest",
						release_year: 2023,
						main_artist: "Veela",
						img_url: "https://i.scdn.co/image/ab67616d0000b27300ce38b8ef76e7ad65573d82"
					},
					{
						id: "76gMPZKh0An6M4hlZbEfL3",
						name: "The Light",
						release_year: 2013,
						main_artist: "Veela",
						img_url: "https://i.scdn.co/image/ab67616d0000b27356437a26de94e6a9e0966208"
					},
					{
						id: "0tHVAJpXYyjboR8jL0dK8n",
						name: "Beyond",
						release_year: 2023,
						main_artist: "Mylk",
						img_url: "https://i.scdn.co/image/ab67616d0000b2732437f22fe5e9e3181a2bbabb"
					}
				],
				Koven: [
					{
						id: "5wWrVP5z7uV6ZtRN4RPfgw",
						name: "Drifters",
						release_year: 2019,
						main_artist: "Elizaveta",
						img_url: "https://i.scdn.co/image/ab67616d0000b27319a51f12f4276053c6040ffc"
					},
					{
						id: "4ChBLndekjzQveHPsn3r6W",
						name: "Let It Be (Feat. Veela)",
						release_year: 2011,
						main_artist: "Veela",
						img_url: "https://i.scdn.co/image/ab67616d0000b2731e240c89392460689b7615a3"
					},
					{
						id: "0tHVAJpXYyjboR8jL0dK8n",
						name: "Beyond",
						release_year: 2023,
						main_artist: "Mylk",
						img_url: "https://i.scdn.co/image/ab67616d0000b2732437f22fe5e9e3181a2bbabb"
					},
					{
						id: "6LKJwN8aF3uYod3JUPXjQR",
						name: "Time Bomb",
						release_year: 2012,
						main_artist: "Veela",
						img_url: "https://i.scdn.co/image/ab67616d0000b2736d9683f96953d37bfd3ed047"
					},
					{
						id: "2SslWikfXUjCUXnVqI9v88",
						name: "Horizons - Original Mix",
						release_year: 2013,
						main_artist: "Veela",
						img_url: "https://i.scdn.co/image/ab67616d0000b273ba4e5a8f7427a67decd6c40f"
					},
					{
						id: "0j7yF7CURZTm6rnJWOWIoV",
						name: "Losing You",
						release_year: 2017,
						main_artist: "Laura Brehm",
						img_url: "https://i.scdn.co/image/ab67616d0000b273a96002532bcd6d2f42831d5b"
					},
					{
						id: "5RkJMrhW5aU2zMuJcZUNmh",
						name: "Do Better",
						release_year: 2021,
						main_artist: "Feint",
						img_url: "https://i.scdn.co/image/ab67616d0000b2734f6559eb1f19f25cb4097afa"
					},
					{
						id: "76gMPZKh0An6M4hlZbEfL3",
						name: "The Light",
						release_year: 2013,
						main_artist: "Veela",
						img_url: "https://i.scdn.co/image/ab67616d0000b27356437a26de94e6a9e0966208"
					},
					{
						id: "0L7vlrUbYlt9aBJ4FEanKu",
						name: "Valkyrie",
						release_year: 2014,
						main_artist: "Varien",
						img_url: "https://i.scdn.co/image/ab67616d0000b273b14b15e134da20e29b128d3b"
					},
					{
						id: "2DOsq2dfLJ6p2dTcSZYNda",
						name: "Love Wins Again",
						release_year: 2019,
						main_artist: "Koven",
						img_url: "https://i.scdn.co/image/ab67616d0000b27366017bc6a51e8b4c920d74c6"
					}
				],
				"Fractal Dreamers": [
					{
						id: "7H7RtxRYHIwfhOy8vLxpAw",
						name: "Solitude",
						release_year: 2019,
						main_artist: "Slaydit",
						img_url: "https://i.scdn.co/image/ab67616d0000b273004c428682ce50fc4256c8fd"
					},
					{
						id: "5jB0IkgKoNeHcCObpZuPXP",
						name: "Let Love Win",
						release_year: 2021,
						main_artist: "Thefatrat",
						img_url: "https://i.scdn.co/image/ab67616d0000b273c4804c3b0e301fc85b1e178b"
					},
					{
						id: "0hTrQoqDmFnA4S1PC265e1",
						name: "Fly Away",
						release_year: 2017,
						main_artist: "Thefatrat",
						img_url: "https://i.scdn.co/image/ab67616d0000b27397ea027ac78c05d10422b588"
					},
					{
						id: "0dOfSrDMGQqqa5aZT827fb",
						name: "Jelly",
						release_year: 2022,
						main_artist: "Hyper Potions",
						img_url: "https://i.scdn.co/image/ab67616d0000b27316883e2e37b58d7353eb0b6d"
					},
					{
						id: "0saGACKtFP1ZVW4Nd4IkCw",
						name: "We'Ll Meet Again",
						release_year: 2020,
						main_artist: "Thefatrat",
						img_url: "https://i.scdn.co/image/ab67616d0000b273eb3785a0c33439fb09e39f97"
					},
					{
						id: "5xXB7wVgRmBHoMBmcfEE3C",
						name: "Mayday",
						release_year: 2018,
						main_artist: "Thefatrat",
						img_url: "https://i.scdn.co/image/ab67616d0000b273baada250536194504307ffd7"
					},
					{
						id: "2ZKB2c2R5pWjRJoRbpL0mR",
						name: "Call Your Name - Andromedik Remix",
						release_year: 2023,
						main_artist: "John Newman",
						img_url: "https://i.scdn.co/image/ab67616d0000b273bce1eab7aa7a88b3ff95009c"
					},
					{
						id: "7CQjnYsGLdtcrsp95oBpCv",
						name: "Close To The Sun",
						release_year: 2019,
						main_artist: "Thefatrat",
						img_url: "https://i.scdn.co/image/ab67616d0000b2733585e6b4f6910a956dc5e35a"
					},
					{
						id: "5iRVNYbhfWNO2VzBykX7GS",
						name: "Xenogenesis",
						release_year: 2014,
						main_artist: "Thefatrat",
						img_url: "https://i.scdn.co/image/ab67616d0000b273de1c21aef47a0d14ed0999c2"
					},
					{
						id: "1nRm0zSnBz6drMTlk3C20E",
						name: "Chosen",
						release_year: 2019,
						main_artist: "Anna Yvette",
						img_url: "https://i.scdn.co/image/ab67616d0000b273812814d925fbb4cdc744cc4c"
					}
				]
			}
		},
		error: null,
		status: 200
	} as any;

	return mockResponse;
}

// Spotify song recommendation for friends
export async function recommendFriendMix(token: string, count: number) {
	await simulateNetworkLatency();
	console.log("Mocked recommendFriendMix |", token[0], count);
	const mockResponse = {
		data: {
			message: "Recommendation based on friends is successful",
			tracks_info: [
				{
					id: "26u6YkRnkPAIjMxqzRF0uO",
					name: "שמש",
					release_year: 2022,
					main_artist: "Ortega",
					img_url: "https://i.scdn.co/image/ab67616d0000b2733fa77dc1c98d20d7f5d70a9f"
				},
				{
					id: "5t9MIcVEPw3Kz3OWMRiYOW",
					name: "Ala Hasab Wedad Live Record",
					release_year: 1973,
					main_artist: "Abdel Halim Hafez",
					img_url: "https://i.scdn.co/image/ab67616d0000b273895abbccb254f03d7c881521"
				},
				{
					id: "7a4wS53T33baaPfUxrVeEy",
					name: "Bury The Light",
					release_year: 2021,
					main_artist: "Casey Edwards",
					img_url: "https://i.scdn.co/image/ab67616d0000b2731a3b3e78b2673db1cf02fb48"
				},
				{
					id: "3AayefDdUFxivRs79bX7kV",
					name: "We Won'T Be Alone",
					release_year: 2015,
					main_artist: "Feint",
					img_url: "https://i.scdn.co/image/ab67616d0000b2735545b80a9fe26faccb5b6a51"
				},
				{
					id: "7BXhyXma11NSNQlQDZOgiN",
					name: "Nassam Alayna El Hawa",
					release_year: 1967,
					main_artist: "Fairuz",
					img_url: "https://i.scdn.co/image/ab67616d0000b27317a8f7d8aa2df1fc9971aa47"
				},
				{
					id: "6TbxWXPwXo8hclWtsP3eWP",
					name: "Awel Mara",
					release_year: 1957,
					main_artist: "Abdel Halim Hafez",
					img_url: "https://i.scdn.co/image/ab67616d0000b273b872acfc46cc93fa62557b2d"
				},
				{
					id: "5N5S0poP9W64HsTp8BRCYW",
					name: "Bloom In The Shadows",
					release_year: 2023,
					main_artist: "The Luna Sequence",
					img_url: "https://i.scdn.co/image/ab67616d0000b273d16d31dbb7bc4328e8ace46e"
				},
				{
					id: "3WA7CkDfu5qOLFfIxubZeL",
					name: "After Dreams Isolate",
					release_year: 2013,
					main_artist: "The Luna Sequence",
					img_url: "https://i.scdn.co/image/ab67616d0000b273b72ed25cbf66f27a4338c9ee"
				},
				{
					id: "5Z4bnMj3gxU2a07jaiRwzs",
					name: "Dialtone",
					release_year: 2021,
					main_artist: "Toby Fox",
					img_url: "https://i.scdn.co/image/ab67616d0000b2734e48efe54e29fa5dc5e0a0d6"
				},
				{
					id: "0yHNKPjOSq80uOgwAPFrA8",
					name: "Erasus (Feat. Celldweller) - The Luna Sequence Remix",
					release_year: 2008,
					main_artist: "Subkulture",
					img_url: "https://i.scdn.co/image/ab67616d0000b2730de440da7ac23d86386f2e9f"
				}
			]
		},
		error: null,
		status: 200
	} as any;
	return mockResponse;
}

// Database song recommendation for friends
export async function recommendFriendsListen(token: string, count: number) {
	await simulateNetworkLatency();
	console.log("Mocked recommendFriendsListen |", token[0], count);
	const mockResponse = {
		data: {
			message: "Recommendation based on friends is successful",
			tracks_info: [
				{
					name: "Ah Sana Vah Sana",
					main_artist: ["Yakışıklı Güvenlik"],
					release_year: 2022,
					id: "6dtPJKowMxowV8hEmhGw4F",
					img_url: "https://i.scdn.co/image/ab67616d0000b273f04aa33ce08aa5a78361cbde"
				},
				{
					name: "Sanctuary In Dying Light",
					main_artist: ["The Luna Sequence"],
					release_year: 2012,
					id: "4lQ0R8gZMc16khvAEWsZLG",
					img_url: "https://i.scdn.co/image/ab67616d0000b2735a11e6ccee5233eb49c64885"
				},
				{
					name: "Oy Asiye - Slowed + Reverb",
					main_artist: ["Hüseyin Ali", "Nezexous", "Samet Aka Spud"],
					release_year: 2022,
					id: "3CqYwDWHw3pi1m8RAd2qCP",
					img_url: "https://i.scdn.co/image/ab67616d0000b273fb839cd828e6b2453fe92a66"
				},
				{
					name: "Ateşten Gömlek",
					main_artist: ["Sagopa Kajmer"],
					release_year: 2009,
					id: "6gAVXYsjYe9ZuAfLwMBZEv",
					img_url: "https://i.scdn.co/image/ab67616d0000b273d36cfee3477994611a3a6efb"
				},
				{
					name: "Neyim Var Ki (Feat. Sagopa K)",
					main_artist: ["Ceza"],
					release_year: 2004,
					id: "09XOVDSIbBxBf6Kr1vGnHf",
					img_url: "https://i.scdn.co/image/ab67616d0000b2732a07bf1912730d354453a4ca"
				},
				{
					name: "Boom Boom",
					main_artist: ["John Lee Hooker", "Jimmie Vaughan"],
					release_year: 2007,
					id: "0LtGs7rRXfOaTOF2Kji1pE",
					img_url: "https://i.scdn.co/image/ab67616d0000b2735370784348d9a0de03ec529f"
				},
				{
					name: "Canın Sağ Olsun",
					main_artist: ["Rast", "Semicenk"],
					release_year: 2023,
					id: "0mYqW8vhiw9rgwSwB21JQz",
					img_url: "https://i.scdn.co/image/ab67616d0000b2737c4b5fa9b2ce976aba839e86"
				},
				{
					name: "Hello",
					main_artist: ["Adele"],
					release_year: 2015,
					id: "62PaSfnXSMyLshYJrlTuL3",
					img_url: "https://i.scdn.co/image/ab67616d0000b27347ce408fb4926d69da6713c2"
				},
				{
					name: "Merhaba",
					main_artist: ["Barış Akarsu"],
					release_year: 2022,
					id: "4JVDp4ii08i5zXjbnk3Hdn",
					img_url: "https://i.scdn.co/image/ab67616d0000b27314c130c3a302c52fbb248d3f"
				},
				{
					name: "We Won'T Be Alone",
					main_artist: ["Feint", "Laura Brehm"],
					release_year: 2015,
					id: "3AayefDdUFxivRs79bX7kV",
					img_url: "https://i.scdn.co/image/ab67616d0000b2735545b80a9fe26faccb5b6a51"
				}
			]
		},
		error: null,
		status: 200
	} as any;
	return mockResponse;
}
