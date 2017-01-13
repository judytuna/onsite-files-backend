export default function createFileTree({ files, fileIdsByParent, projectId }) {
	function populateFolder(folder) {
		const childIds = fileIdsByParent[folder._id] || []

		return {
			...folder,
			items: populateIdList(childIds),
		}
	}
	function populateIdList(ids) {
		return ids.map(id => {
			const item = files[id]
			return item.type === 'FILE' ?
				item :
				populateFolder(item)
		})
	}

	return populateIdList(fileIdsByParent[projectId] || [])
}
