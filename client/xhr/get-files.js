export default function getFiles({ parentId = '', projectId } = {}) {
	return fetch(`/api/files?parentId=${parentId || ''}&projectId=${projectId}`)
		.then(response => response.json())
}
