export default function uploadFile({ parentId, projectId, file }) {
	const data = new FormData()
	data.append('file', file)

	return fetch(`/api/files?parentId=${parentId || ''}&projectId=${projectId}`, {
		method: 'POST',
		headers: {
			'Accepts': 'application/json',
		},
		body: data,
	})
		.then(response => response.json())
		.then(finishedFile => ({ file: finishedFile }))
}
