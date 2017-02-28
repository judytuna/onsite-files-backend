export default function getFiles({ parentId = '', projectId } = {}) {
	const path = parentId ? `/api/folders/${parentId}/items` : '/api/files'
	return fetch(path + `?projectId=${projectId}`)
		.then(response => response.json())
}
