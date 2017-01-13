export default function createFolder({ parentId, projectId, folderName }) {
	return fetch(`/api/folders?parentId=${parentId || ''}&projectId=${projectId}`, {
		method: 'POST',
		headers: {
			'Accepts': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name: folderName,
		}),
	})
		.then(response => response.json())
		.then(folder => ({ folder }))
}
