export async function simulateNetworkLatency() {
	// Simulate network latency for demo purposes
	const delay = Math.floor(Math.random() * 400) + 300;
	return new Promise((resolve) => setTimeout(resolve, delay));
}
