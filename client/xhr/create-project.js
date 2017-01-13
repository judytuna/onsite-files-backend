export default function createFolder({ name }) {
	return fetch('/api/projects', {
		method: 'POST',
		headers: {
			'Accepts': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name }),
	})
		.then(response => response.json())
}
