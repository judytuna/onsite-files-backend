import React, { PropTypes } from 'react'
import { css } from 'glamor'

import {
	FILE_ACTION_WIDTH,
	FILE_SIZE_WIDTH,
	FILE_MODIFIED_WIDTH,
} from '../style-constants'
import File from './file'
import Folder from './folder'
import ColHeader from './col-header'

const styles = {
	header: css({
		display: 'flex',
		height: '30px',
		alignItems: 'center',
		borderBottom: '1px solid #ddd',
	}),
}

const FileList = ({
	addFolder,
	addingFolderUnder,
	fileTree,
	saveNewFolder,
	toggleFolder,
	getIsToggled,
	uploadFile,
	projectId,
}) => {
	return (
		<div>
			<div className={styles.header}>
				<ColHeader>Name</ColHeader>
				<ColHeader width={FILE_SIZE_WIDTH}>Size</ColHeader>
				<ColHeader width={FILE_MODIFIED_WIDTH}>Last Modified</ColHeader>
				<ColHeader width={FILE_ACTION_WIDTH} />
			</div>
			<div>
				{fileTree.map(item =>
					item.type === 'FILE' ?
						<File file={item} key={item._id} projectId={projectId} /> :
						<Folder
							addFolder={addFolder}
							addingFolderUnder={addingFolderUnder}
							folder={item}
							key={item._id}
							saveNewFolder={saveNewFolder}
							toggle={toggleFolder}
							getIsToggled={getIsToggled}
							uploadFile={uploadFile}
							projectId={projectId}
						/>
				)}
			</div>
		</div>
	)
}

FileList.propTypes = {
	addFolder: PropTypes.func.isRequired,
	addingFolderUnder: PropTypes.string,
	fileTree: PropTypes.array,
	getIsToggled: PropTypes.func.isRequired,
	saveNewFolder: PropTypes.func.isRequired,
	toggleFolder: PropTypes.func.isRequired,
	uploadFile: PropTypes.func.isRequired,
	projectId: PropTypes.string,
}

export default FileList
