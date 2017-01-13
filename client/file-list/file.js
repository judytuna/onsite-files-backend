import React, { PropTypes } from 'react'

import Row from './row'
import ActionCell from './action-cell'
import IndentCell from './indent-cell'
import NameCell from './name-cell'
import SizeCell from './size-cell'
import TypeCell from './type-cell'
import LastModifiedCell from './last-modified-cell'

const File = ({ projectId, file, depth }) => (
	<Row
		onClick={() => {
			window.location = `/api/files/${file._id}/content?projectId=${projectId}`
		}}
	>
		<IndentCell depth={depth} />
		<TypeCell type="FILE" />
		<NameCell>
			{file.name}
		</NameCell>
		<SizeCell size={file.size} />
		<LastModifiedCell isoDate={file.dateModified} />
		<ActionCell />
	</Row>
)

File.propTypes = {
	projectId: PropTypes.string,
	file: PropTypes.shape({
		name: PropTypes.string.isRequired,
		size: PropTypes.number.isRequired,
	}),
	depth: PropTypes.number.isRequired,
}

File.defaultProps = {
	depth: 0,
}

export default File
