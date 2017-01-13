import React, { PropTypes } from 'react'
import { css } from 'glamor'

import File from './file'
import Row from './row'
import ActionCell from './action-cell'
import IndentCell from './indent-cell'
import NameCell from './name-cell'
import SizeCell from './size-cell'
import TypeCell from './type-cell'
import LastModifiedCell from './last-modified-cell'
import FolderActionDropdown from './folder-action-dropdown'
import NewFolder from '../new-folder'

const styles = {
	folder: css({
		display: 'flex',
		flexDirection: 'column',
	}),
}

const Folder = ({
	addFolder,
	addingFolderUnder,
	folder,
	depth,
	saveNewFolder,
	toggle,
	getIsToggled,
	uploadFile,
	projectId,
}) => {
	const isAddingFolderUnder = addingFolderUnder === folder._id
	const isToggled = getIsToggled(folder._id)

	return (
		<div className={styles.folder}>
			<Row onClick={() => toggle(folder._id)}>
				<IndentCell depth={depth} />
				<TypeCell type="FOLDER" isToggled={isToggled} />
				<NameCell>{folder.name}</NameCell>
				<SizeCell size={folder.size} />
				<LastModifiedCell isoDate={folder.dateModified} />
				<ActionCell>
					<FolderActionDropdown
						addFolder={() => {
							addFolder({ parentId: folder._id })
							if (!isToggled) {
								toggle(folder._id)
							}
						}}
						uploadFile={(file) => {
							uploadFile({ file, parentId: folder._id })
						}}
					/>
				</ActionCell>
			</Row>
			{isToggled && folder.items.map(item => (
				item.type === 'FOLDER' ?
					<Folder
						key={item._id}
						addFolder={addFolder}
						addingFolderUnder={addingFolderUnder}
						folder={item}
						depth={depth + 1}
						saveNewFolder={saveNewFolder}
						toggle={toggle}
						getIsToggled={getIsToggled}
						uploadFile={uploadFile}
						projectId={projectId}
					/> :
					<File
						key={item._id}
						file={item}
						depth={depth + 1}
						projectId={projectId}
					/>
			))}
			{isAddingFolderUnder && (
				<NewFolder
					depth={depth}
					onSave={({ folderName }) => {
						saveNewFolder({ parentId: folder._id, folderName })
					}}
					onBlur={() => {
						addFolder({ parentId: undefined })
					}}
				/>
			)}
		</div>
	)
}

Folder.propTypes = {
	addFolder: PropTypes.func.isRequired,
	addingFolderUnder: PropTypes.string,
	folder: PropTypes.shape({
		name: PropTypes.string.isRequired,
		size: PropTypes.number.isRequired,
		items: PropTypes.array.isRequired,
	}).isRequired,
	depth: PropTypes.number.isRequired,
	saveNewFolder: PropTypes.func.isRequired,
	toggle: PropTypes.func.isRequired,
	getIsToggled: PropTypes.func.isRequired,
	uploadFile: PropTypes.func.isRequired,
	projectId: PropTypes.string,
}

Folder.defaultProps = {
	depth: 0,
}

export default Folder
