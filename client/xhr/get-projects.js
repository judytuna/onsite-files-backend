export default function getFiles() {
	return fetch('/api/projects')
		.then(response => response.json())
}
