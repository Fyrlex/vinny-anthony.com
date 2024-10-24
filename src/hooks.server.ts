export async function handleError({ error, event, message, status }) {
  console.error(`Status ${status} ${message}: ${event.url.pathname}`);
}
