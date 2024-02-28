import { SpotifyApi } from "@spotify/web-api-ts-sdk";

const scopes = [
	"user-read-private",
	"user-read-email",
	"playlist-read-private",
	"playlist-read-collaborative",
	"playlist-modify-private",
	"playlist-modify-public",
	"user-library-read",
	"user-library-modify"
];

export const spotify = SpotifyApi.withUserAuthorization(
	"PUBLIC_SPOTIFY_CLIENT_ID", // Removed for demo
	"PUBLIC_SPOTIFY_REDIRECT_URI", // Removed for demo
	scopes
);

export async function clearSpotifyState() {
	spotify.logOut();
}
