<script lang="ts">
	import { Copy } from "lucide-svelte";
	import { copyText } from "svelte-copy";
	import { Button } from "$lib/components/ui/button";
	import { displayToast } from "$lib/utils/toast";

	export let text: string;
</script>

<Button
	variant="outline"
	class="p-0 w-8 h-8"
	on:click={() => {
		copyText(`${text}\n#ovatify #music`);
		displayToast({ type: "success", message: "Copied to clipboard" });
	}}
>
	<Copy class="w-6 h-6" />
</Button>
