<script lang="ts">
	import * as Dialog from "$lib/components/ui/dialog";
	import * as Avatar from "$lib/components/ui/avatar";
	import { spotify } from "$lib/utils/spotify";
	import { sleep } from "$lib/utils/time";
	import { displayToast } from "$lib/utils/toast";
	import { fade } from "svelte/transition";
	import Spinner from "$lib/components/Spinner.svelte";
	import { Button } from "$lib/components/ui/button";
	import { defaultImageUrl } from "$lib/constants";
	import { userData } from "$lib/stores/userData";

	export let dialogOpen: boolean;

	async function getSpotifyProfile() {
		await sleep(0.15);
		return {
			username: $userData.name,
			imageUrl: $userData.img_url,
			followerCount: 5
		};
	}
</script>

<Dialog.Root bind:open={dialogOpen}>
	<Dialog.Content
		class="flex justify-center rounded-lg w-11/12 md:max-w-[32rem] h-[24rem]"
	>
		{#await getSpotifyProfile()}
			<div class="flex items-center justify-center">
				<Spinner class="w-10 h-10 animate-spin" />
			</div>
		{:then spotifyProfile}
			{#if spotifyProfile}
				<div in:fade|global class="flex flex-col items-center justify-center w-full">
					<Avatar.Root class="w-32 h-32 text-3xl">
						<Avatar.Image src={spotifyProfile.imageUrl} alt={spotifyProfile.username} />
						<Avatar.Fallback>{spotifyProfile.username.slice(0, 2)}</Avatar.Fallback>
					</Avatar.Root>
					<div class="py-2">
						<p class="text-3xl font-bold">{spotifyProfile.username}</p>
						{#if spotifyProfile.followerCount === 1}
							<p class="font-light">{spotifyProfile.followerCount} Follower</p>
						{:else}
							<p class="font-light">{spotifyProfile.followerCount} Followers</p>
						{/if}
					</div>
					<Button
						variant="destructive"
						on:click={() => {
							console.log("Mocked spotify logout");
							dialogOpen = false;
							displayToast({ type: "success", message: "Logged out of Spotify" });
						}}>Log out</Button
					>
				</div>
			{:else}
				<div
					in:fade|global
					class="flex flex-col items-center justify-center w-full sm:w-3/4 gap-4"
				>
					<p class="text-lg font-bold">Not logged in to Spotify</p>
					<Button
						variant="outline"
						class="w-full bg-emerald-800 hover:bg-emerald-700"
						on:click={async () => {
							await spotify.authenticate();
						}}>Login</Button
					>
				</div>
			{/if}
		{/await}
	</Dialog.Content>
</Dialog.Root>
